---
summary: Information for the Qualified Testing Framework for Objective-C
tags:
  - objective-c
  - testing
---

# Qualified Testing Framework

## Overview

Qualified provides a lightweight, custom testing framework for Objective-C. However, we recommend using the standard [unitkit](/reference/languages/objc/unitkit) instead.

# Pass/Fail methods

## `equal(NSObject actual, NSObject expected)`

Checks that the actual value equals the expected value.

## `notEqual(NSObject actual, NSObject expected)`

Checks that the actual value does not equal the expected value.

## `pass(int expression)`

Checks that the integer passed is true. Useful when passing an assert, for example, `true == true`.

# Spec Methods

## `describe(msg, block)`

Top level method for describing/grouping a set of tests. Globally available in tests as "describe".

```
describe("Foo", ^() {

});
```

## `it(msg, fn)`

Used in conjunction with describe to group related sets of tests in a spec. Globally available in tests as "it".

```
describe(@"foo", ^() {
  it(@"exclaims things", ^() {
    equal(@"Hi!", foo(@"Hi"));
  });
});
```
