---
title: Testing CSS skills
summary: "Testing CSS skills on the Qualified platform"
tags:
  - css
  - puppeteer
  - guides
---

# Testing CSS skills

## Overview

[CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets) is a critical technology for many web development roles which involve visual design skills in creating user interfaces and user experiences.

Although CSS isn't as naturally conducive to unit testing as the general-purpose programming languages usually assessed by Qualified, there are many ways to work within the constraints to test many key CSS and CSS preprocessor skills accurately.

This guide shares some of the strategies we're using at Qualified for assessing CSS.

## Platform technical capabilities

This section details technologies and tools the platform offers which can be useful for creating CSS challenges.

### Web Preview

Qualified offers a feature called [Web Preview](/reference/features/challenges/multi-file-code/#web-preview) which renders the candidate's front-end code in an iframe sandbox, enabling them to interact with it live. No testing or validation is performed in Web Preview; instead, Qualified runs the code on the server and scores it using a testing library such as [Jest](https://jestjs.io/).

### Puppeteer and web drivers

Qualified's code runner supports the browser automation library [Puppeteer](https://github.com/puppeteer/puppeteer/) through the [Jest-Puppeteer](https://github.com/smooth-code/jest-puppeteer) package. Our Puppeteer image tests HTML5 apps bundled with [Parcel](https://github.com/parcel-bundler/parcel) and offer web preview for visualization.


:::info
[Selenium WebDriver](https://www.selenium.dev/) or browser automation tools outside of Puppeteer aren't supported at this time.
:::

### Front-end UI libraries that use stylesheets

Qualified also supports popular UI libraries like [Angular](/reference/languages/typescript/#angular-angular-preset), [React](/creating-content/challenges/guides/react/#testing-react-skills), [Vue](/reference/languages/javascript/#vue-vue-preset) and [React Native](https://reactnative.dev), all of which involve CSS and have specific testing libraries that can evaluate many aspects of styling.

### Q&A quizzes

We offer a quiz feature that lets you test knowledge without using runnable code.

### Static HTML on the Code Runner

Finally, the traditional code runner test case output in all of our challenges can render HTML, CSS and JS. This has limited usefulness for evaluating HTML5 skills and has almost entirely been replaced by [web preview](#web-preview).

## Goals

This section puts forth the goals we have in testing candidate CSS competencies. These apply with varying degrees to different use cases and may not align completely with your goals. Feel free to adapt them as you wish.

- **Accuracy**: tests must ensure the candidate completed the task correctly.
  - False positives can arise when a testing suite doesn't reinforce the challenge specification thoroughly and scores a candidate's code higher than it should be.
  - False negatives can arise when the testing suite is overly strict and over-penalizes candidates whose code has basically fulfilled the specification except for a minor detail.
  - Consistency and reliability is important; the test suite can't have random timing factors. This makes animations much harder to validate than stable layouts.
- **Clear feedback**: when the candidate fails to pass a CSS test case, we want the testing suite to be able to explain why with a clear assertion message.
  - This requires a high granularity of test cases, at least one per deliverable requirement, with clear labeling and code.
- **Developmental ease**: CSS challenges should be simple to write and maintain.
- **Focus**: it's tempting to toss CSS requirements into JS-oriented front-end challenges as an afterthought, but we generally prefer to separate CSS as a distinct challenge with its own test cases.

## Approaches

This section provides an overview of some of the approaches for testing CSS which we've seen or used. Each of them have advantages and disadvantages relative to the goals above and we hope this guide helps empower you to decide what's best for your assessment.

Approaches aren't mutually exclusive. Feel free to mix and match.

### Quizzes

While this guide mostly discusses coding challenges, it'd be remiss to not mention that many CSS skills can be tested with Q&A-style assessments. Quizzes can be accurate, are able to provide insight into contextual awareness that might be difficult to establish with a coding challenge and may be easier in many respects to develop, validate and deliver than a coding challenge.

### Pixel-perfect matching

A direct approach is to ask candidates to fulfill a precise specification, then snapshot the rendered application to an image and compare it pixel-by-pixel against the expected result. Optionally, tests can interact with the page and perform multiple snapshot comparisons against expected results to handle interaction and animation.

An advantage to this approach is that tests are easy to write once a snapshotting system is set up.

Another advantage is that it scales to difficulty of the task; the testing procedure need not change even as the requirements become more complex.

One drawback is that most diff tests won't have labeled test cases for each requirement. When tests fail, it may be difficult to provide specific feedback to pinpoint what went wrong. Visual feedback showing the pixel diffs and off-by counts can typically be provided, however. These image diffs can be rendered onto the code runner UI.

Requiring pixel-perfect results can unfairly penalize fundamentally correct solutions that are off by a pixel or two, leading to candidate frustration and false negatives. This makes the technique prohibitive to use in general.

[Bug fix challenge styles](/creating-content/challenges/challenge-styles/#debugging) are a category that can work with pixel diffing. As a basic example, imagine a CSS challenge that requires fixing a mistake in a selector that isn't applying a predefined style to a particular element. Since the properties are already written, the pixel-perfection demanded by the tests shouldn't be a hindrance to the candidate passing the test.

:::tip
[pixelmatch](https://github.com/mapbox/pixelmatch) is a lightweight library that can perform pixel diffing for tests. See [this GitHub comment](https://github.com/codewars/runner/issues/21#issuecomment-692379797) for a minimal example.
:::

### Smarter image diffing

The pixel-perfect diffing approach's major drawback of being too precise can be loosened by using smarter utilities that enable an epsilon of tolerable differences between actual and expected snapshots of the site.

The upside is reduction of false negatives, but this comes at the cost of increased false positives, a heavier testing suite (machine learning and computer vision could be used) and potentially more work and time required to write the tests or the basic diffing utility.

### Browser automation tools

Our current preferred approach for CSS testing is using a browser automation tool. Puppeteer is the tool of choice for the Qualified platform.

Puppeteer can accurately enforce a specification without being overly strict. For example, a test can ensure that a series of elements are displayed next to each other and aligned along the bottom while allowing some variability in padding, testing responsive layouts and flexbox or grid skills without letting other properties unduly interfere.

Puppeteer with Jest cleanly organizes requirements in small chunks.

The major downside of Puppeteer is that writing a flexible test suite for even small apps can take much longer than a one-and-done image diff test.

#### Puppeteer examples

Puppeteer's [`evaluate`](https://github.com/puppeteer/puppeteer/blob/main/docs/api.md#pageevaluatepagefunction-args) function lets you execute code in the browser context to extract [computed styles](https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle) and properties from elements. Here's an example testing opacity of an element on hover:

```js
it("should have 70% opacity on hover", async () => {
  const box = await page.$('[data-testid="box"]');
  await box.hover();
  const opacity = await page.evaluate(el =>
    getComputedStyle(el).getPropertyValue("opacity")
  , box);
  expect(opacity).toEqual("0.7");
});
```

Remember that Puppeteer functions that operate in browser context such as `evaluate`, [`$eval`](https://github.com/puppeteer/puppeteer/blob/main/docs/api.md#frameevalselector-pagefunction-args-1), [`$$eval`](https://github.com/puppeteer/puppeteer/blob/main/docs/api.md#frameevalselector-pagefunction-args) and [`evaluateHandle`](https://github.com/puppeteer/puppeteer/blob/main/docs/api.md#pageevaluatehandlepagefunction-args) require data serialization going into and out of the function. This means you won't be able to return DOM structures, only their properties, and code inside these callbacks can't access state in your test suite.

Puppeteer also offers easy access to an element's bounding box for positioning tests. Here's an example of testing that a blue box is located below a red box:

```js
describe("blue box", () => {
  it("should be located immediately below the red box", async () => {
    const blueBox = await page.$('[data-testid="blue-box"]');
    const redBox = await page.$('[data-testid="red-box"]');
    const blueBoxRect = await blueBox.boundingBox();
    const redBoxRect = await redBox.boundingBox();
    expect(blueBoxRect.x).toEqual(redBoxRect.x);
    expect(blueBoxRect.y).toEqual(redBoxRect.y + redBoxRect.height);
  });
});
```

:::tip
Using `data-testid` properties gives your candidate the freedom to pick their own CSS class and id names. This gives you insight into what naming conventions they may choose for CSS classes.
:::

### Human evaluation

You can skip automation entirely and rely on humans to evaluate your candidates' solutions by hand using a consistent rubric provided to candidates and reviewers.

The downsides include a large time commitment for reviewers for evaluating assessments, potential inconsistencies in evaluations from reviewer to reviewer or introduction of bias and a less clear goal for candidates.

On the other hand, the advantages of human review include deeper insight, quick challenge development time and candidate freedom in implementing a solution.

### Stylesheet matching

You can read the candidate's stylesheet file and use regex to check that certain patterns appeared. The advantage is ease of development, but this generally only works for narrow use cases and can cause false negatives.

## Challenge design strategies

This section provides high-level guidance for developing CSS challenges and assessments.

### Prefer separate CSS and JS challenges

As mentioned in the [goals](#goals) section, we recommend isolating CSS requirements in a distinct challenge, especially when using automated testing for the CSS. The main problem with integrated CSS and JS challenges is that the broadened challenge scope tends to cause bloat in the test suite and instructions. JS and CSS are substantial enough each on their own to fit in the time and scope for a challenge.

Modularity makes the challenges reusable for different roles and makes it easier for reviewers to evaluate candidate skills.

Many JS-centric challenges benefit from permitting a small amount of (likely) untested CSS to allow for basic styling and realism.

### Prefer separate CSS and JS framework challenges

As an extension of the above point, we've found that testing CSS skills in isolation from front-end frameworks like React, Angular and Vue is a good rule of thumb.

An exception might be testing a specific technology like React [styled-components](https://github.com/styled-components/styled-components). In cases like this, you could consider separating component logic and style into distinct challenges.

:::note
Keep in mind that our Puppeteer image only supports Parcel and doesn't include framework packages. It's still possible to use a framework such as React in the Puppeteer image, provided it's browser-transpiled and retrieves its source from a CDN. While browser-only development departs from modern workflows; it should be less of an issue if the focus is on non-preprocessed CSS.

Alternately, if you use our code runner's standard React, Angular or Vue image, Puppeteer is unavailable and testing will occur (typically) in Jest using a framework-appropriate library such as React Testing Library.
:::

### Instructions and rubrics

Given the challenges inherent in testing CSS, it can be particularly frustrating for a candidate to follow a styling specification enforced by a prewritten test under pressure. If in doubt, keep requirements simple. Try to avoid non-essential requirements. Including appropriate demos in the form of gifs and screenshots can help candidates visualize the expected output.

Consider providing a rubric that articulates how you'll be evaluating the candidate's solution, including naming conventions and organization as well as behavior.

### Constraint considerations

Some facets of CSS are more amenable to testing than others. Requirements for transitions, animations, shadows, opacity and the like may be harder to test than relative positioning between objects, layouts and exact colors. Enforcing font sizes and measurements can be tricky; setting generous tolerance ranges can help avoid false negatives.

Understanding and working within the constraints to strike the right balance between the CSS testing options on the platform is the key to creating an effective CSS assesment to meet your goals.

