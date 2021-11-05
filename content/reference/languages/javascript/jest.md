---
summary: Information for using Jest
tags:
  - javascript
  - testing
  - jest
---

# Jest Testing Framework

## Overview

Qualified supports writing tests for JavaScript (Node 10+ only) using [Jest][0].

## Quick Start

#### Solution Code:

```javascript
const sum = (a, b) => a + b;

module.exports = sum;
```

#### Test Fixture:

```javascript
const sum = require('./solution');

describe('Example', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
```

# Learn More

You can learn more on the [Jest website][0].

[0]: https://jestjs.io/en/
