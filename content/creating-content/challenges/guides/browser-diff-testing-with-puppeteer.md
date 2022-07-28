---
title: Browser UI Diff Testing with Puppeteer
summary: "An overview of a technique for programmatically diffing images, canvases and DOMs on the front end, expanding the possibilities for validating user interfaces in Qualified."
tags:
  - html
  - css
  - javascript
  - testing
  - puppeteer
  - guides
---

# Browser Diff Testing with Puppeteer

## Background

Let's say you'd like to create a challenge where the candidate must render a specific user interface (UI) layout with HTML and CSS or draw a scene on an HTML5 canvas. This sounds like a fun challenge, but it's not exactly obvious how to go about testing this automatically!

### Pixel-perfection?

One approach is to programmatically capture screenshots of the expected and actual pages or components and compare them pixel by pixel. This is appealing from an ease-of-implementation standpoint, but it's too intolerant of minor issues. If the solution attempt is off by a pixel or more, it'll fail the test. To make matters worse, it's difficult to communicate to the candidate what exactly went wrong with the attempt.

Given this potential for frustrating false positives, such an approach is pretty much off-limits except for narrow use cases.

### CSS properties?

For HTML and CSS user interfaces, the [Testing CSS Skills](css) guide offers another strategy, using a browser automation library like [Puppeteer](https://github.com/puppeteer/puppeteer/) to select DOM elements and validate that they have the correct properties and positions. This allows for more flexibility than a pixel-perfect match. Tolerances and ranges are possible. Test cases can assert that an element has a color in a range or is positioned to the left of another element by a rough amount, among other possibilities.

This is great for a good deal of situations, but it has a few downsides:

1. It can be time-consuming to write highly-granular tests for every requirement in a complex page.
2. The error messages may be as specific as the tests, but there's no easy way to show a visual diff of the discrepancy to the candidate.
3. Some things are still difficult to test, like HTML5 canvases, which are raster and have no elements to hook onto for property assertions.


## Image diffing to the rescue

An approach that mitigates some of these problems is using an image diffing library such as [pixelmatch](https://github.com/mapbox/pixelmatch/). Pixelmatch can draw a canvas showing the difference between the expected and actual pages or components. It can also produce a count of the number of mismatched pixels, perfect for an assertion with adjustable room for error.

### Conversions

The diffing technique is mostly agnostic of the input source, but a few conversions will be necessary:

- [html2canvas](https://github.com/niklasvh/html2canvas) converts a HTML page structure (including images, canvases, CSS, SVGs, etc) to a canvas.
- [`HTMLCanvasElement.toDataURL()`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toDataURL) converts a canvas to a base64 string.
- [`Image`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/Image) converts a base64 string to an `Image` instance.
- [`CanvasRenderingContext2D.drawImage()`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage) renders an `Image` to canvas.

### Overview of the testing workflow

With these conversions in mind, the first step is capturing the reference ("expected") UI as a base64 string which will be used for comparison against the candidate's solution UI. An expected base64 string can be kept in the filesystem and opened by the testing suite in Node.

:::info
At this time, Qualified doesn't support image files, so base64 text is the default storage format for image data.
:::

In a test case, the expected base64 string will be passed to a Puppeteer [`page.evaluate()`](https://github.com/puppeteer/puppeteer/blob/v2.1.1/docs/api.md#pageevaluatepagefunction-args) call. The evaluated console code will draw the string into a canvas by way of an `Image` as described in the conversion steps above.

Alternately, the conversion can be performed in Node context using a package like [pngjs](https://www.npmjs.com/package/pngjs).

Once the expected image is on a canvas, the next step is to select and convert the candidate's solution element to a canvas using one of the conversion strategies above.

With the actual and expected canvases, we can create a third canvas to render the diff, and call pixelmatch with all three canvases: actual, expected and diff. Pixelmatch will fill in the diff canvas and return a mismatched pixel count.

The result diff can be rendered to the code runner, and the mismatched pixel count can be used in the test case for assertions.

### Code example

This example uses Qualified's basic Puppeteer preset without any additional Node libraries. Pixelmatch and html2canvas are imported in the automated browser by Puppeteer. See [this example](https://github.com/codewars/runner/issues/21#issuecomment-692379797) for a Node-based approach.

Keep in mind that this approach tests a full DOM tree, so it will require a bit of modification to work nicely on single canvas elements or other elements besides `document.body`. For example, if the root element to diff on is a canvas, there's no need for `html2canvas` and a simple `document.querySelector("#your-canvas")` will suffice. You can remove viewport settings and the `html2canvas` script tag in that case.

#### `test/solution.test.js`

This file is the Jest test harness. It imports `run-diff.js`, shown below, which does the heavy lifting and diffing, and `show-diff.js`, which renders the actual, expected and diff canvases on the code runner.

The test suite sets up a viewport to the size of the base64, adds script tags for the diffing libraries and uses `"networkidle0"` to ensure the page is fully loaded before performing assertions.

```js
const fs = require("fs");
const path = require("path");
const _runDiff = require("./run-diff");
const showDiff = require("./show-diff");
const runDiff = expectedBase64 => _runDiff(page, expectedBase64);

jest.setTimeout(7000);
const baseURL = process.env.TEST_BASE_URL;

describe("index.html", () => {
  beforeAll(async () => {
    page.setDefaultTimeout(5000);
    await page.setViewport({width: 100, height: 100});
  });

  beforeEach(async () => {
    await page.goto(baseURL, {waitUntil: "networkidle0"});
    await Promise.all([
      page.addScriptTag({url: "https://bundle.run/pixelmatch@5.2.1"}),
      page.addScriptTag({url: "https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"})
    ]);
  });

  it("should be close enough to the expected result", async () => {
    // get the reference/expected base64 and copy it
    // to the fixture png file for the first run:
    //console.log(await page.evaluate(async () =>
    //  (await html2canvas(document.body)).toDataURL()
    //));

    const expectedBase64 = (await fs.promises
      .readFile(path.join(__dirname, "fixtures", "expected-base-64.png")))
      .toString()
    ;

    const {
      mismatchedPixels,
      diffBase64,
      actualBase64,
    } = await runDiff(expectedBase64);
    showDiff({
      expectedBase64,
      diffBase64,
      actualBase64,
      collapsed: mismatchedPixels === 0,
      label: "should be close enough to the expected result",
    });
    expect(mismatchedPixels).toBeLessThan(50);
  });
});
```


#### `test/run-diff.js`

This function is the workhorse, preparing the canvases and running the diff on behalf of the test suite:

```js
const runDiff = (page, expectedBase64) =>
  page.evaluate(async expectedBase64 => {
    const loadImage = src => new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = src;
    });

    // Prepare the actual canvas
    const actualCanvas = await html2canvas(document.body);
    const {width: w, height: h} = actualCanvas;
    const actualImageData = actualCanvas.getContext("2d")
      .getImageData(0, 0, w, h);

    // Prepare the expected canvas
    const expectedImage = await loadImage(expectedBase64);
    const expectedCanvas = document.createElement("canvas");
    expectedCanvas.width = expectedImage.width;
    expectedCanvas.height = expectedImage.height;
    const expectedCtx = expectedCanvas.getContext("2d");
    expectedCtx.drawImage(
      expectedImage, 0, 0,
      expectedCanvas.width, expectedCanvas.height
    );
    const expectedImageData = expectedCtx
      .getImageData(0, 0, expectedCanvas.width, expectedCanvas.height);

    // Prepare the diff canvas
    const diffCanvas = document.createElement("canvas");
    diffCanvas.width = w;
    diffCanvas.height = h;
    const diffCtx = diffCanvas.getContext("2d");
    const diffImageData = diffCtx.createImageData(w, h);

    // Run pixelmatch to generate the diff
    const mismatchedPixels = pixelmatch(
      actualImageData.data,
      expectedImageData.data,
      diffImageData.data,
      w, h, {threshold: 0.1}
    );
    diffCtx.putImageData(diffImageData, 0, 0);
    return {
      mismatchedPixels,
      diffBase64: diffCanvas.toDataURL("image/png"),
      actualBase64: actualCanvas.toDataURL("image/png"),
    };
  }, expectedBase64)
;
module.exports = runDiff;
```

#### `test/show-diff.js`

This function injects a script into the code runner to show the actual, expected and diff canvases. This helps the user debug their solution.

```js
const makeId = ((id=0) => () => id++)();

const showDiff = ({
  expectedBase64,
  actualBase64,
  diffBase64,
  collapsed,
  label = "",
}) => {
  const expId = "exp" + makeId();
  const actId = "act" + makeId();
  const diffId = "diff" + makeId();
  const html = `<LOG:HTML:${collapsed ? "-" : ""}${label}>
<div style="display: inline-block;">
  <div style="border-bottom:1px solid #666;padding-bottom: 1em;">
    <h3>expected</h3>
    <canvas id="${expId}"></canvas>
  </div>
  <div style="border-bottom:1px solid #666;padding-bottom: 1em;">
    <h3>actual</h3>
    <canvas id="${actId}"></canvas>
  </div>
  <div>
    <h3>diff</h3>
    <canvas id="${diffId}"></canvas>
  </div>
</div>
<script>

function loadImage(src) {
  return new Promise(function (resolve, reject) {
    const img = new Image();
    img.onload = function () {
      resolve(this);
    };
    img.onerror = reject;
    img.src = src;
  });
}

function imageToCanvas(canvas, image) {
  canvas.width = image.width;
  canvas.height = image.height;
  canvas.getContext("2d")
    .drawImage(image, 0, 0, canvas.width, canvas.height)
  ;
}

Promise.all([
    "${expectedBase64}",
    "${actualBase64}",
    "${diffBase64}",
  ].map(loadImage)
).then(([exp, act, diff]) => {
  imageToCanvas(document.getElementById("${expId}"), exp);
  imageToCanvas(document.getElementById("${actId}"), act);
  imageToCanvas(document.getElementById("${diffId}"), diff);
});

</script>
  `;
  console.log(html.replace(/\n/g, "<:LF:>"));
};
module.exports = showDiff;
```

:::note
For an explanation of the special elements such as `<LOG:HTML:-name>` in the above snippet, see [Qualified's Advanced Output Syntax Walkthrough ](https://www.qualified.io/hire/challenges/5be61268e361f8001048f2d8).
:::

:::note
A complete example of this code can be seen as a template within the Qualified platform, [Puppeteer: UI Diffing](https://www.qualified.io/hire/challenges/626dc3d97d22bb0012c9c571).
:::

:::caution
Providing an expected/reference image in any format gives candidates a cheating potential for some challenges, so be careful when displaying this!
:::

### Limitations of image diffing

Naturally, image diffing has its own set of limitations. Running Puppeteer, storing and passing large images between the client, server and Chromium browser and performing conversions on a potentially large DOM tree or canvas can be heavy operations. Fortunately, it's likely that only an assertion or two will do the job, which should be comfortably within the Qualified code runner's 12-second timeout.

Choosing the right tolerance settings can also be tricky, potentially resulting in false positives or negatives. Some fine details like border radii might be hard to correctly enforce without inadvertently precluding details that aren't relevant to the specification.

Handling animation is still tricky to get right and depends heavily on the use case. Simple animations can be tested by capturing a couple of frames with a delay in between and ensuring the relevant changes have occurred.

Image diffing is just another tool for validating UIs. You can always combine approaches to meet your needs.

### See also

- [How can I prove that two HTML pages look identical?](https://stackoverflow.com/a/58885864/6243352) on Stack Overflow

