---
title: Karma with Mocha Testing Framework (BDD)
summary: Information about the Karma with Mocha testing framework
tags:
  - javascript
  - js
  - testing
  - karma
  - mocha
  - behavior-driven development
---

# Karma with Mocha Testing Framework

Qualified has support for testing in-browser code using Karma with Mocha.

There are few changes necessary from testing normal code, except your code will be run inside a PhantomJS headless browser, enabling you to test browser-specific events.

## Language Version

All code run in the browser is compiled via `tsc`, so you can safely use ES2015 code.

## Using Mocha

Mocha in Karma works the same as the normal [javascript/mocha-bdd](/reference/languages/javascript/mocha-bdd), with one exception: _Chai_ will already be loaded for you, with `expect` and `assert` all available, no `require()` necessary.

> ### Note on Chai Failure Reporting
>
> By default Chai truncates objects and arrays over `40` characters in length. If you want to show longer objects (especially arrays) to candidates, you should add the following to your `preloaded` section:
>
> ```js
> // How many characters to show before truncating long objects? 0 means no truncating.
> chai.config.truncateThreshold = 1000;
> ```

## Including External Libraries

There is a lightweight library inclusion feature, based on comments in the _Preloaded_ section. Including comments like the following enables automatic inclusion of well-known libraries.

:::note
Please note this feature has been surpassed by Project Challenges, and will not likely be expanded.
:::

```js
// @include-external angular@1.5
```

We only support the following:

- `angular@1.2` - AngularJS core libraries, v1.2.x
- `angular@1.3` - AngularJS core libraries, v1.3.x
- `angular@1.4` - AngularJS core libraries, v1.4.x
- `angular@1.5` - AngularJS core libraries, v1.5.x
- `angular@1.6` - AngularJS core libraries, v1.6.x
