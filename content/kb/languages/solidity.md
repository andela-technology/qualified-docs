---
title: Solidity
summary: "Solidity Environment and Testing Framework"
tags:
  - solidity
  - language
---

# Solidity

## Environment

Qualified supports Solidity version 0.4.19, using the [Truffle framework](http://truffleframework.com/) for compiling contracts.

From the solution, the setup can be imported using an import statement (`import "./setup.sol";`). Both will be compiled as seperate contract files through Truffle.

### OpenZeppelin Library

OpenZeppelin is provided as library for writing smart contracts. It can be imported using import statements (e.g. `import 'zeppelin-solidity/contracts/ownership/Ownable.sol';`)

For more information on OpenZepplin see the [documentation on Github](https://github.com/OpenZeppelin/zeppelin-solidity)

## Testing

Our Solidity environment supports testing in JavaScript through the [Truffle Framework with Mocha](/kb/languages/solidity/truffle_with_mocha).
