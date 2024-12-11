# GreenSync - Green Energy Marketplace

## Overview

GreenSync is a blockchain-based marketplace that connects renewable energy producers with consumers. This platform leverages Ethereum smart contracts to facilitate energy transactions, ensuring transparency, security, and automation in energy trading. Producers can tokenize their energy credits and sell them to consumers, who can use these tokens to meet their energy needs. The platform also features wallet integration with MetaMask for a seamless user experience.


## Features

- **Blockchain Integration**: Uses Ethereum and smart contracts for decentralized transactions.
- **Smart Contracts**: Enforces buy/sell energy token transactions between producers and consumers.
- **MetaMask Wallet Integration**: Allows users to securely interact with the platform via MetaMask.
- **Green Energy Focus**: Encourages sustainable energy production and consumption through tokenized credits.
- **Real-Time Data**: Displays available energy credits for sale and updates transactions in real-time.
- **Secure Transactions**: Smart contracts ensure that all transactions are secure and transparent.

## Technologies Used

- **React**: Frontend framework to build an interactive and responsive user interface.
- **Solidity**: Smart contract programming language used for implementing blockchain logic.
- **Ethereum**: Blockchain platform used for decentralized energy token transactions.
- **MetaMask**: Cryptocurrency wallet used for user authentication and managing Ethereum assets.
- **Node.js**: JavaScript runtime used for backend services and API endpoints.
- **Hardhat**: Development framework for Ethereum smart contracts.
- **SQL**: Used for backend database to store user data and energy transaction records.
- **Vite**: Build tool for faster project development and bundling.

## Installation

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or higher)
- **MetaMask** (installed as a browser extension)
- **Ethereum Test Network** (such as Hardhat or Rinkeby)

### Setup Instructions

1. **Clone the repository**:

   Open a terminal window and clone the project using Git:

   ```bash
   git clone https://github.com/Ayesha-FK/Energy-Tokenization-Project.git
   cd GreenSync

To install project project dependencies:

     npm install

To start the project:

    npm start

Smart Contract Deployment:

Navigate to the GreenSync/blockchain directory. Use the Hardhat deployment script to deploy the smart contract to a local Ethereum network:

   npx hardhat run scripts/deploy.js --network localhost

Connect MetaMask:

Ensure MetaMask is installed and connected to your Ethereum network (Hardhat or another test network).
Open the app at http://localhost:3000 and connect your wallet via MetaMask.
For Producers:

Producers can list their energy credits for sale on the marketplace.
Set the price for your energy tokens and provide the details about the energy offering.
For Consumers:

Consumers can browse energy tokens listed by producers.
Select the energy offering and purchase the tokens via MetaMask.
The transaction will be processed through the Ethereum blockchain and executed by the smart contract.

Project Contributors

This project, GreenSync: A Blockchain-Based Green Energy Marketplace, has been developed by a dedicated group of students from FAST University, Islamabad. The team members have collaborated to create an innovative platform that leverages blockchain technology to promote sustainability in the energy sector.

The project has been meticulously developed by:

Ayesha Fazal
Amama Khurram
Hamza Farooq
Moosa Saeed

Each member brought their unique skills to the table, working together to build a decentralized solution aimed at improving the efficiency, transparency, and security of energy credit trading.
