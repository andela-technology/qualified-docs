---
summary: Information about the Truffle testing framework for Solidity
tags:
  - solidity
  - testing
  - truffle
---

# Truffle Framework

Truffle uses the [Mocha](https://mochajs.org/) testing framework and [Chai](https://chaijs.com/) for testing Solidity Smart Contracts with some additions.

If you're unfamiliar with mocha testing whatsoever check out our [Mocha Testing Framework BDD Documentation](/reference/languages/javascript/mocha-bdd).

The rest of these notes are adapted from [the truffle framework documentation](https://truffleframework.com/docs/getting_started/javascript-tests).

## Use `contract()` instead of `describe()`

What makes Truffle tests different from that of Mocha is the `contract()` function: This function works exactly like `describe()` except it enables Truffle's clean-room features. It works like this:

- Before each `contract()` function is run, your contracts are redeployed to the running Ethereum client so the tests within it run with a clean contract state.
- The `contract()` function provides a list of accounts made available by your Ethereum client which you can use to write tests.

Since Truffle uses Mocha under the hood, you can still use `describe()` to run normal Mocha tests whenever Truffle clean-room features are unnecessary.

## Use contract abstractions within your tests

Contract abstractions are the basis for making contract interaction possible from Javascript (they're basically our flux capacitor). Because Truffle has no way of detecting which contracts you'll need to interact with within your tests, you'll need to ask for those contracts explicitly. You do this by using the `artifacts.require()` method, a method provided by Truffle that allows you to request a usable contract abstraction for a specific Solidity contract. As you'll see in the example below, you can then use this abstraction to make sure your contracts are working properly.

For more information on using contract abstractions, see the [Interacting With Your Contracts](https://truffleframework.com/docs/getting_started/contracts) section of the truffle framework documentation.

## Using `artifacts.require()`

Using `artifacts.require()` within your tests is the exact same as using it within your migrations. See the [`artifacts.require()` documentation](https://truffleframework.com/docs/getting_started/migrations#artifacts-require-) from the Truffle Documentation for detailed usage.

### Example

Here's an example test. Note the use of the `contract()` function, the accounts array for specifying available Ethereum accounts, and our use of `artifacts.require()` for interacting directly with our contracts.

File: `./test/metacoin.js`

```javascript
var MetaCoin = artifacts.require("MetaCoin");

contract('MetaCoin', function(accounts) {
  it("should put 10000 MetaCoin in the first account", async function() {
    const m = await MetaCoin.deployed();
    const balance = await m.getBalance.call(accounts[0]);
    assert.equal(balance.valueOf(), 10000, "10000 wasn't in the first account");
  });
  it("should send coin correctly", async function() {
    const amount = 10;
    const m = await MetaCoin.deployed();
    // Get initial balances of first and second account.
    const account1 = accounts[0], account2 = accounts[1];
    const account1Start = (await m.getBalance.call(account1)).toNumber();
    const account2Start = (await m.getBalance.call(account2)).toNumber();

    await m.sendCoin(account2, amount, {from: account1});

    const account1End = (await m.getBalance.call(account1)).toNumber();
    const account2End = (await m.getBalance.call(account2)).toNumber();

    assert.equal(account1End, account1Start - amount, "Amount wasn't correctly taken from the sender");
    assert.equal(account2End, account2Start + amount, "Amount wasn't correctly sent to the receiver");
  });
});
```

This test will produce the following output:

```
  Contract: MetaCoin
    ✓ should put 10000 MetaCoin in the first account
    ✓ should send coin correctly

  2 passing (113ms)
```
