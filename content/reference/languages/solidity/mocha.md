---
summary: Information about the Mocha testing framework for Solidity
tags:
  - solidity
  - testing
  - mocha
---

# Mocha Testing Framework

## Overview

Qualified uses the [Mocha](https://mochajs.org/) testing framework and [Chai](https://chaijs.com/) assertions for testing Solidity Smart Contracts.

## Basic Example

### Solution

```js
// SPDX-License-Identifier: BSD-2-Clause
pragma solidity ^0.8.0;

contract Greeter {

  // Complete this function to return either
  // "Hello, [name]!" or "Hello there!"
  // based on the input
  function sayHello(string memory name) public pure returns (string memory) {

    return ""; // TODO: return the correct value
  }
}
```

### Test

```js
// SPDX-License-Identifier: BSD-2-Clause
pragma solidity ^0.8.0;

contract Greeter {
  function sayHello(string memory name) public pure returns (string memory) {
    if (keccak256(abi.encodePacked(name)) == keccak256("")) {
      return "Hello there!";
    }

    return string.concat("Hello, ", string.concat(name, "!"));
  }
}
```

