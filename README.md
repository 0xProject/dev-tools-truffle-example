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

Before running tests you need to have the ethereum node running. Right now because of a [few issues with Ganache](https://github.com/0xProject/0x-monorepo/issues/1520) - it's not supported by 0x Dev Tools. We'll be running Geth from a docker container for simplicity.

```bash
docker run -it --rm -p 8545:8501 0xorg/devnet
```

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

You can also run:

```bash
yarn profile
```

or

```bash
yarn coverage
```

to run tests with [@0x/sol-coverage](http://sol-coverage.com) or [@0x/sol-profiler](http://sol-profiler.com) accordingly.

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
