---
title: Karma with Mocha Testing Framework (BDD)
summary: Information about the Karma with Mocha testing framework
tags:
  - typescript
  - ts
  - testing
  - karma
  - mocha
  - behavior-driven development
---

# Karma with Mocha Testing Framework

Qualified has support for testing in-browser code using Karma with Mocha.

There is very little changes necessary from testing normal code, except your code will be run inside a PhantomJS
headless browser, enabling you to test browser-specific events.

## Language Version

All code run in the browser is compiled via tsc, so you can safely use ES2015 code.

## Using Mocha
 
Mocha in Karma works the same as the normal [javascript/mocha-bdd](/reference/languages/javascript/mocha-bdd), with one exception: _Chai_ will already be loaded for you, with `expect`, `should`, and `assert` all available, no `require()` necessary.

> ### Note on Chai Failure Reporting
> 
> By default Chai truncates objects and arrays over `40` characters in length. If you want to show longer objects (especially arrays) to candidates, you should add the following to your `preloaded` section:
>
> ```js
> // How many characters to show before truncating long objects? 0 means no truncating.
> chai.config.truncateThreshold = 1000;
> ```
