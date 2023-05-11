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

## Basic Example

### Solution

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

### Test

```solidity
const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const { assert } = require("chai");

describe('Greeter', function() {
  async function deployFixture() {
    const Contract = await ethers.getContractFactory("Greeter");
    const contract = await Contract.deploy();
    await contract.deployed();
    return { contract }; 
  } 

  it("should say hello", async function() {
    const { contract } = await loadFixture(deployFixture);
    assert.strictEqual(await contract.sayHello("Qualified"), "Hello, Qualified!");
  });
});
```

