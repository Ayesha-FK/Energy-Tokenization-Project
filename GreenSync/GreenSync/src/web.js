import Web3 from "web3";

let web3;

// Check if running in the browser and if MetaMask is installed
if (typeof window !== "undefined" && window.ethereum) {
    web3 = new Web3(window.ethereum); // Connect to MetaMask
    console.log("Web3 connected to MetaMask");
} else {
    // Default to Hardhat local network
    web3 = new Web3("http://127.0.0.1:8545");
    console.log("Web3 connected to Hardhat network");
}

export default web3;
