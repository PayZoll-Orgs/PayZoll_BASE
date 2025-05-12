require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const PRIVATE_KEY = process.env.PRIVATE_KEY || "";

module.exports = {
  solidity: "0.8.27",
  networks: {

    pharos: {
      url: "https://devnet.dplabs-internal.com",
      chainId: 50002,
      accounts: [PRIVATE_KEY]
    },
    // Polygon Mainnet
    polygon: {
      url: "https://polygon-rpc.com",
      chainId: 137,
      accounts: [PRIVATE_KEY]
    },
    arbitrum: {
      url: "https://arb1.arbitrum.io/rpc",
      chainId: 42161,
      accounts: [PRIVATE_KEY]
    },
    // Polygon Testnet (Amoy)
    amoy: {
      url: "https://rpc-amoy.polygon.technology",
      chainId: 80002,
      accounts: [PRIVATE_KEY]
    },
    // BNB Chain Mainnet
    bsc: {
      url: "https://binance.llamarpc.com",
      chainId: 56,
      accounts: [PRIVATE_KEY]
    },
    // BNB Chain Testnet
    bscTestnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      chainId: 97,
      accounts: [PRIVATE_KEY]
    },
    // Educhain Mainnet
    educhainMainnet: {
      url: "https://rpc.edu-chain.raas.gelato.cloud/66a13f09ceab49998f954e7bb71c7c02",
      chainId: 41923,
      accounts: [PRIVATE_KEY]
    },
    // Educhain Testnet
    educhainTestnet: {
      url: "https://rpc.educhain.xyz",
      chainId: 656476,
      accounts: [PRIVATE_KEY]
    },
    // Sonic Blaze Testnet
    sonicBlazeTestnet: {
      url: "https://rpc.blaze.soniclabs.com",
      chainId: 57054,
      accounts: [PRIVATE_KEY]
    }
  }
};
