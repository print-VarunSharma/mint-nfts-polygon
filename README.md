# Mint NFTs with Polygon (Matic)

## HardHat

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```

#### Compile

npx hardhat compile

#### Test Deployment

Chose your Network carefully.

npx hardhat run scripts/deploy.js --network goerli to deploy on the test chain

npx hardhat run scripts/deploy.js --network mainnet to deploy on the live Eth chain

npx hardhat run scripts/deploy.js --network mumbai to deploy on the live polygon chain

## Walkthroughs

- https://betterprogramming.pub/deploying-smart-contracts-to-the-polygon-and-ethereum-blockchain-using-hardhat-and-ethers-js-2c31aa41aed0
- https://medium.com/@timpark0807/how-to-deploy-a-smart-contract-to-polygon-mainnet-d11d60bff7e7
