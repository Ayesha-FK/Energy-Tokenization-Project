import Web3 from 'web3';
import fs from 'fs';
import path from 'path';

async function main() {
  // Set up Web3 provider to connect to the local Hardhat node
  const web3 = new Web3('http://127.0.0.1:8545'); // Ensure Hardhat node is running on localhost:8545

  // Get the list of accounts
  const accounts = await web3.eth.getAccounts();
  const deployer = accounts[0];
  console.log("Deploying contracts with the account:", deployer);

  // Get the ABI and Bytecode from the compiled contract
  const contractPath = path.resolve('artifacts/contracts/GreenEnergyToken.sol/GreenEnergyToken.json');
  const contractJSON = JSON.parse(fs.readFileSync(contractPath, 'utf8'));

  const abi = contractJSON.abi;
  const bytecode = contractJSON.bytecode;

  // Create a contract instance
  const contract = new web3.eth.Contract(abi);

  // Deploy the contract
  console.log("Deploying contract...");
  const deployTx = contract.deploy({ data: bytecode });

  // Estimate gas for deployment
  const gas = await deployTx.estimateGas();
  
  // Deploy the contract and wait for it to be mined
  const deployedContract = await deployTx.send({ from: deployer, gas });

  // Log the contract address
  console.log('GreenEnergyToken deployed to:', deployedContract.options.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
