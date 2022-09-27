---
summary: Information about the Mocha testing framework for Solidity
tags:
  - solidity
  - testing
  - mocha
---

# Mocha Testing Framework

## Overview

Qualified uses the [Mocha](https://mochajs.org/) testing framework in the [Hardhat](https://hardhat.org/) Ethereum development environment. [Chai](https://chaijs.com/) assertions are available for testing Solidity Smart Contracts.

The OpenZeppelin package `@openzeppelin/contracts` can be imported with `import "@openzeppelin/contracts/token/ERC20/ERC20.sol"`.

## Basic Example

### Solution

```solidity
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

```solidity
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

