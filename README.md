# Ganache issue repro

Run:

```bash
yarn
yarn test
```

Get:

```bash
Error: the tx doesn't have the correct nonce. account has nonce of: 0 tx has nonce of: 1
    at /Users/leonidlogvinov/0x/ganache-core/node_modules/ethereumjs-vm/dist/runTx.js:117:12
    at /Users/leonidlogvinov/0x/ganache-core/node_modules/ethereumjs-vm/dist/cache.js:57:7
    at /Users/leonidlogvinov/0x/ganache-core/node_modules/ethereumjs-vm/dist/cache.js:44:5
    at /Users/leonidlogvinov/0x/ganache-core/node_modules/merkle-patricia-tree/baseTrie.js:77:5
    at /Users/leonidlogvinov/0x/ganache-core/node_modules/merkle-patricia-tree/baseTrie.js:461:14
    at Object.return (/Users/leonidlogvinov/0x/ganache-core/node_modules/merkle-patricia-tree/baseTrie.js:485:9)
    at processNode (/Users/leonidlogvinov/0x/ganache-core/node_modules/merkle-patricia-tree/baseTrie.js:285:30)
    at processNode (/Users/leonidlogvinov/0x/ganache-core/node_modules/merkle-patricia-tree/baseTrie.js:521:5)
    at /Users/leonidlogvinov/0x/ganache-core/node_modules/merkle-patricia-tree/baseTrie.js:516:13
    at /Users/leonidlogvinov/0x/ganache-core/node_modules/merkle-patricia-tree/baseTrie.js:180:7
    at process._tickCallback (internal/process/next_tick.js:61:11)
```
