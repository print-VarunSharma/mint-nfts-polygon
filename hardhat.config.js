/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
const {
  ALCHEMY_API_URL_MUMBAI,
  ALCHEMY_API_URL_MAINNET,
  METAMASK_PRIVATE_KEY,
} = process.env;

module.exports = {
  solidity: "0.8.1",
  defaultNetwork: "mumbai",
  networks: {
    hardhat: {},
    // Add Polygon Mumbai network
    mumbai: {
      url: ALCHEMY_API_URL_MUMBAI,
      accounts: [`0x${METAMASK_PRIVATE_KEY}`],
    },
    mainnet: {
      url: ALCHEMY_API_URL_MAINNET,
      accounts: [`0x${METAMASK_PRIVATE_KEY}`],
    },
  },
};
