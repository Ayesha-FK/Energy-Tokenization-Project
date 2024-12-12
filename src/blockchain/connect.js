import Web3 from "web3";
import GreenEnergyToken from "./GreenEnergyToken.json"; // Correctly import the file

const contractAddress = GreenEnergyToken.address; // Ensure the correct contract address is present in the JSON file
const contractABI = GreenEnergyToken.abi; // Use the ABI from the JSON file

export const connectWallet = async () => {
  if (window.ethereum || window.web3) {
    try {
      let web3;
      if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        await window.ethereum.request({ method: "eth_requestAccounts" });
      } else {
        web3 = new Web3(window.web3.currentProvider);
      }

      const accounts = await web3.eth.getAccounts();
      const account = accounts[0];
      if (!account) throw new Error("No account found in MetaMask.");

      const networkId = await web3.eth.net.getId();
      console.log("Connected to network ID:", networkId);

      if (networkId != 1337) {
        alert("Please switch to the Hardhat local network (ID 1337).");
        return { web3: null, account: null, error: "Wrong network" };
      }

      return { web3, account, error: null };
    } catch (error) {
      console.error("Error connecting to MetaMask:", error);
      alert("Could not connect to wallet. Check MetaMask and try again.");
      return { web3: null, account: null, error: error.message };
    }
  } else {
    alert("MetaMask or Web3 provider not detected.");
    return { web3: null, account: null, error: "No Web3 provider" };
  }
};

export const getContract = (web3Instance) => {
  if (web3Instance) {
    return new web3Instance.eth.Contract(contractABI, contractAddress);
  }
  return null;
};
