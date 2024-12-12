import Web3 from "web3";

// Initialize Web3 and connect to localhost:8545
const web3 = new Web3("http://localhost:8545");

// Contract details
const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";  // Deployed contract address
const contractABI = [ {
    "inputs": [
      { "internalType": "uint256", "name": "price", "type": "uint256" },
      { "internalType": "uint256", "name": "quantity", "type": "uint256" },
      { "internalType": "string", "name": "name", "type": "string" }
    ],
    "name": "createEnergyCredit",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "bytes32", "name": "creditId", "type": "bytes32" },
      { "internalType": "uint256", "name": "quantity", "type": "uint256" }
    ],
    "name": "buyEnergyCredit",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "withdrawEarnings",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "bytes32", "name": "creditId", "type": "bytes32" }
    ],
    "name": "getEnergyCredit",
    "outputs": [
      { "internalType": "uint256", "name": "", "type": "uint256" },
      { "internalType": "address", "name": "", "type": "address" },
      { "internalType": "uint256", "name": "", "type": "uint256" },
      { "internalType": "uint256", "name": "", "type": "uint256" },
      { "internalType": "string", "name": "", "type": "string" },
      { "internalType": "string", "name": "", "type": "string" },
      { "internalType": "bool", "name": "", "type": "bool" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getAllCreditIds",
    "outputs": [
      { "internalType": "bytes32[]", "name": "", "type": "bytes32[]" }
    ],
    "stateMutability": "view",
    "type": "function"
  } ];  // Replace this with your ABI

// Create a contract instance
const contract = new web3.eth.Contract(contractABI, contractAddress);

// Example: Fetch all credit details
async function getCredits() {
  try {
    const accounts = await web3.eth.getAccounts();
    const credits = await contract.methods.getAllCreditDetails().call({ from: accounts[0] });
    console.log(credits);
  } catch (error) {
    console.error("Error fetching credits:", error);
  }
}

getCredits();
