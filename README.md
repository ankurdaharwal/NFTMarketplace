# NFT Marketplace

![Version](https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000)
![Prerequisite](https://img.shields.io/badge/node-%3E%3D10.0-blue.svg)

### A Non-Fungible Tokens based decentralised marketplace to bid and purchase collectibles on a P2P public network.

[Documentation]()

## Setup
- `yarn`

## Run local node
- `yarn node`

## Compile & migrate (Deploy) Contracts
- `yarn deploy` (Default network: local Hardhat development network)

## Run Tests
- `yarn test`

1. Install deps with yarn `yarn`
2. Start hardhat `yarn deploy`

![](https://media.giphy.com/media/9l6z9MzXfHX9gKzbvU/giphy.gif)

```text
It runs up a Hardhat node, compile contracts, generates typescript interfaces, creates React context and instantiates your contract instances and factories with frontend provider.
```

4. Open up a new terminal
5. Enter the frontend directory: `cd frontend`
6. Install dependencies: `npm install`
7. Import seed phrase in Metamask. The default mnemonic currently used by hardhat is `test test test test test test test test test test test junk`
  1. Please note that you need to sign out from your current Metamask wallet to import a new one. **Instead of logging out**, you can use a new browser profile to do your Ethereum development:
  3. Click your profile icon in the top right corner of Chrome (right next to the hamburger menu icon)
  4. Click "Add"
  5. Give the profile a name and click "Add"
  6. In this new browser window, install Metamask and import the keyphrase above
8. Ensure Metamask RPC is set to `http://localhost:8545` and chainID `31337`.
9. Start the React app: `npm start`

The frontend should open at http://localhost:3000/

Because of this default hardhat.config.ts it will first try to connect with an injected provider like Metamask (web3modal package does this).

If nothing found it will try to connect with your hardhat node. On localhost and hardhat nodes it will inject your mnemonic into the frontend so you have a "browser wallet" that can both call and send transactions. NB! Dont ever put a mnemonic with actual value here.

In hardhat.config.ts there is example on how to instruct your hardhat-network to use mnemonic or privatekey.

```ts
const config: HardhatUserConfig = {
  react: {
    providerPriority: ["web3modal", "hardhat"],
  },
};
```

Ensure you are using RPC to http://localhost:8545.

You may also need to set the chainID to 31337 if you are using Hardhat blockchain development node.

## Invalid nonce.

```bash
eth_sendRawTransaction
  Invalid nonce. Expected X but got X.
```

Reset your account in Metamask.

# We ❤️ these **Ethereum** projects:

- [Hardhat 👷](https://hardhat.org/)
- [Hardhat-deploy 🤘](https://hardhat.org/plugins/hardhat-deploy.html)
- [Typechain 🔌](https://github.com/ethereum-ts/Typechain#readme)
- [hardhat-typechain 🧙‍♀️](https://hardhat.org/plugins/hardhat-typechain.html)
- [ethers.js v5 ⺦](https://github.com/ethers-io/ethers.js#readme)
- [web3modal 💸](https://github.com/Web3Modal/web3modal#web3modal)
- [ts-morph 🏊‍♂️](https://github.com/dsherret/ts-morph)
- [@symfoni/hardhat-react 🎻(our own)](https://www.npmjs.com/package/@symfoni/hardhat-react)
