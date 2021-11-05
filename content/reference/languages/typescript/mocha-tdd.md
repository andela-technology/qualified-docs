---
title: Mocha Testing Framework (TDD)
summary: Information about the Mocha testing framework
tags:
  - typescript
  - ts
  - testing
  - mocha
  - test-driven development
---

# Mocha Testing Framework

Qualified supports the Mocha testing framework, in a BDD or TDD setup.

The following is a Mocha TDD example on how to use the framework using the built in Node.js assertion library:

```typescript
import {assert} from "chai";
import {add} from "./solution";
// import preloaded from "./preloaded"; // optionally, import the preloaded file

suite("add", () => {
  suiteSetup(() => { /* optional code to run before the entire suite */ });
  setup(() => { /* optional code to run before each test */ });
  teardown(() => { /* optional code to run after each test */ });
  suiteTeardown(() => { /* optional code to run after the entire suite */ });

  test("should add two numbers", () => {
    assert.equal(add(1, 2), 3);
  });
});
```

# Assertions

Mocha allows you to use any assertion library you want and so does not auto-require a certain library for you by default.

## Chai

We recommend that you use the [Chai](https://chai.js.com) BDD/TDD assertion library. It supports the following assertion styles:

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

[You can learn more on the Mocha website](https://mochajs.org/).
