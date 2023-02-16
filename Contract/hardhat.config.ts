require("dotenv").config({path: ".env"});
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-etherscan";


const MANTLE_RPC_URL = process.env.MANTLE_RPC_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY
// const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    mantle: {
      url: MANTLE_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 5001,
      // blockConfirmations: 6,
    },
  },
  // etherscan: {
  //   apiKey: ETHERSCAN_API_KEY
  // },
  solidity: {
    compilers: [{ version: "0.8.9" }, { version: "0.6.6" }],
  },
};