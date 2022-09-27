---
summary: Information about the Mocha testing framework for Solidity
tags:
  - solidity
  - testing
  - mocha
---

# Mocha Testing Framework

## Overview

Qualified offers the [Mocha](https://mochajs.org/) testing framework in the [Hardhat](https://hardhat.org/) Ethereum development environment.

[Chai](https://chaijs.com/) assertions are available for testing Solidity Smart Contracts. [Hardhat's Chai matchers](https://hardhat.org/hardhat-runner/plugins/nomicfoundation-hardhat-chai-matchers#hardhat-chai-matchers) are pre-configured on the runner.

The environment includes [`@openzeppelin/contracts`](https://www.npmjs.com/package/@openzeppelin/contracts) which offers a collection of smart contracts. You can import one with `import "@openzeppelin/contracts/token/ERC20/ERC20.sol"`, for example.

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

