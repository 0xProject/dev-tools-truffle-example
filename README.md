# dev-tools-truffle-example

An example truffle project showing how to use 0x dev tools with the Truffle framework.

- [@0x/sol-trace](https://www.sol-trace.com)
- [@0x/sol-profiler](https://www.sol-profiler.com)
- [@0x/sol-coverage](https://www.sol-coverage.com)
- [@0x/sol-compiler](https://www.sol-compiler.com)

## Intro

First run `yarn` or `npm i` to install the dependencies.

This project contains two contracts. `MetaCoin` and `SafeMath`. `MetaCoin` is a coin-like contract where the owner of it initially has 1 token. `SafeMath` is called by `MetaCoin` to perform addition and substraction safely.

## Tests

There is a single test that tries to send 2 tokens from the owner. Owner doesn't have enough tokens so it reverts.

Now we're ready to run the tests:

```bash
yarn test
```

They will fail and we'll get an error:

```bash
     Error: Transaction: 0x012d87cbbd7799ef361872571e75d37b7e53192161a1955ef5d6c97f1531d613 exited with an error (status 0).
     Please check that the transaction:
     - satisfies all conditions set by Solidity `require` statements.
     - does not trigger a Solidity `revert` statement.
```

Not very helpful. Now let's run it using [@0x/sol-trace](http://sol-trace.com)

## Sol-trace

```bash
yarn trace
```

```bash
dev-tools-truffle-example/contracts/SafeMath.sol:12:8:
        require(b <= a)
dev-tools-truffle-example/contracts/MetaCoin.sol:13:25:
        SafeMath(safeMath).sub(balances[msg.sender], amount)
```

That's better. Now we don't need to check all the require and revert statements but we know exactly which one reverted and who called it.

## Sol-coverage

```bash
yarn coverage
```

It will generate the HTML report and open it in the default browser. You can use any other istanbul reporter too. (text, json, etc.).

## Sol-profiler

```bash
yarn profile
```

## Sol-compiler

To test [sol-compiler](https://sol-compiler.com) run

```bash
yarn sol-compiler
```

or

```bash
yarn sol-compiler:watch
```

## Licence

Apache 2.0
