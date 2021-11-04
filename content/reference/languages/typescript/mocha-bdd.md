---
title: Mocha Testing Framework (BDD)
summary: Information about the Mocha testing framework
tags:
  - typescript
  - ts
  - testing
  - mocha
  - behavior-driven development
---

# Mocha Testing Framework

Qualified supports the Mocha testing framework, in a BDD or TDD setup.

The following is a Mocha BDD example on how to use the framework using the built in Node.js assertion library:

```typescript
import {add} from "./solution";
import {assert} from "chai";

describe("add", () => {
  before(() => { /* optional code to run before the entire suite */ });
  beforeEach(() => { /* optional code to run before each test */ });
  afterEach(() => { /* optional code to run after each test */ });
  after(() => { /* optional code to run after the entire suite */ });

  it("should add two numbers", () => {
    assert.equal(add(1, 2), 3);
  });
});
```

# Assertions

Mocha allows you to use any assertion library you want and so does not auto-require a certain library for you by default.

## Chai

We recommend that you use the [Chai](http://chai.js.com) BDD/TDD assertion library. It supports the following assertion styles:

### Expect

```typescript
const {expect} = require("chai");

expect(foo).to.be.a('string');
expect(foo).to.equal('bar');
expect(foo).to.have.length(3);
expect(tea).to.have.property('flavors').with.length(3);
```

### Assert

```typescript
const {assert} = require("chai");

assert.typeOf(foo, 'string');
assert.equal(foo, 'bar');
assert.lengthOf(foo, 3)
assert.property(tea, 'flavors');
assert.lengthOf(tea.flavors, 3);
```

# Learn More

[You can learn more on the Mocha website](http://mochajs.org/).
