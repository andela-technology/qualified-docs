---
title: Mocha Testing Framework (TDD)
summary: Information about the Mocha testing framework
tags:
  - javascript
  - js
  - testing
  - mocha
  - test-driven development
---

# Mocha Testing Framework

Qualified supports the Mocha testing framework, in a BDD or TDD setup.

The following is a Mocha TDD example on how to use the framework using the built in Node.js assertion library:

```javascript
const assert = require("assert");

suite('Array', () => {
  suiteSetup(() => { /* optional code to run before the entire suite */ });
  setup(() => { /* optional code to run before each test */ });
  teardown(() => { /* optional code to run after each test */ });
  suiteTeardown(() => { /* optional code to run after the entire suite */ });

  suite('#indexOf()', () => {
    test('should return -1 when not present', () => {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});
```

# Assertions

Mocha allows you to use any assertion library you want and so does not auto-require a certain library for you by default.

## Chai

We recommend that you use the [Chai](https://chai.js.com) BDD/TDD assertion library. It supports the following assertion styles:

### Expect

```javascript
const {expect} = require("chai");

expect(foo).to.be.a('string');
expect(foo).to.equal('bar');
expect(foo).to.have.length(3);
expect(tea).to.have.property('flavors').with.length(3);
```

### Assert

```javascript
const {assert} = require("chai");

assert.typeOf(foo, 'string');
assert.strictEqual(foo, 'bar');
assert.lengthOf(foo, 3)
assert.property(tea, 'flavors');
assert.lengthOf(tea.flavors, 3);
```

# Learn More

[You can learn more on the Mocha website](https://mochajs.org/).
