/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
const {
  ALCHEMY_API_URL_GOERLI,
  ALCHEMY_API_URL_MUMBAI,
  METAMASK_PRIVATE_KEY,
  METAMASK_PRIVATE_KEY_MAINNET,
  ALCHEMY_API_URL_POLYGON_MAINET,
} = process.env;

module.exports = {
  solidity: "0.8.1",
  defaultNetwork: "goerli",
  networks: {
    hardhat: {},
    // Add Polygon Mumbai network

    goerli: {
      url: ALCHEMY_API_URL_GOERLI,
      accounts: [`0x${METAMASK_PRIVATE_KEY}`],
    },
    mumbai: {
      url: ALCHEMY_API_URL_MUMBAI,
      accounts: [`0x${METAMASK_PRIVATE_KEY}`],
    },
    mainnet: {
      url: ALCHEMY_API_URL_POLYGON_MAINET,
      accounts: [`0x${METAMASK_PRIVATE_KEY_MAINNET}`],
    },
  },
};
