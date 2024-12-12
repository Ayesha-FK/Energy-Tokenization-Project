import React, { useState, useEffect } from "react";
import Web3 from "web3";
import { connectWallet, getContract } from "../../blockchain/connect";
import "./SmartContractPage.css";

const SmartContractPage = () => {
  const [mintAmount, setMintAmount] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [tokenName, setTokenName] = useState("");
  const [buyCreditName, setBuyCreditName] = useState("");
  const [buyQuantity, setBuyQuantity] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [credits, setCredits] = useState([]); // To store minted credits
  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState(null);
  const [contract, setContract] = useState(null);


  // Connect wallet and initialize contract
  const handleConnectWallet = async () => {
    const { web3, account, error } = await connectWallet();
    if (error) {
      setErrorMessage(error);
      return;
    }

    setWeb3(web3);
    setAccount(account);
    setErrorMessage("");
    setSuccessMessage("Wallet connected successfully!");

    const contractInstance = await getContract(web3, "GreenEnergyToken");
    setContract(contractInstance);
  };

  // Handle minting of energy credits
  const handleMint = async () => {
    try {
      if (!web3 || !contract) return;

      const formattedPrice = web3.utils.toWei(newPrice, "ether");
      const formattedAmount = parseInt(mintAmount);

      if (!tokenName) {
        setErrorMessage("Please provide all required fields (name, price).");
        return;
      }

      const gasEstimate = await contract.methods.createEnergyCredit(
        formattedPrice,
        formattedAmount,
        tokenName
      ).estimateGas({ from: account });

      await contract.methods.createEnergyCredit(
        formattedPrice,
        formattedAmount,
        tokenName
      ).send({ from: account, gas: gasEstimate });

      setSuccessMessage(`Minted ${mintAmount} credits named "${tokenName}" at ${newPrice} ETH.`);
      setErrorMessage("");

      // Add the minted credit to the marketplace
      setCredits((prevCredits) => [
        ...prevCredits,
        { name: tokenName, price: newPrice, quantity: mintAmount },
      ]);

      setTokenName("");
      setMintAmount("");
      setNewPrice("");
    } catch (error) {
      setErrorMessage(`Minting failed: ${error.message}`);
    }
  };

  // Handle buying energy credits
  const handleBuy = async () => {
    try {
      if (!web3 || !contract) return;

      // Validate the selected credit
      const selectedCredit = credits.find((credit) => credit.name === buyCreditName);
      if (!selectedCredit) {
        setErrorMessage("Credit not found in the marketplace.");
        return;
      }

      if (parseInt(buyQuantity) <= 0 || parseInt(buyQuantity) > parseInt(selectedCredit.quantity)) {
        setErrorMessage("Invalid quantity.");
        return;
      }

      const pricePerTokenWei = web3.utils.toWei(selectedCredit.price, "ether");
      const totalCostWei = BigInt(pricePerTokenWei) * BigInt(buyQuantity);

      console.log(`Buying ${buyQuantity} tokens of "${buyCreditName}" for a total cost of ${totalCostWei} Wei`);

      await contract.methods.buyEnergyCredit(buyCreditName, buyQuantity).send({
        from: account,
        value: totalCostWei.toString(),
      });

      setSuccessMessage(`Successfully purchased ${buyQuantity} tokens of "${buyCreditName}".`);
      setErrorMessage("");

      // Update marketplace
      setCredits((prevCredits) =>
        prevCredits.map((credit) => {
          if (credit.name === buyCreditName) {
            const remainingQuantity = credit.quantity - buyQuantity;
            return {
              ...credit,
              quantity: remainingQuantity,
              status: remainingQuantity === 0 ? "Sold" : credit.status, // Mark as Sold if all tokens are bought
            };
          }
          return credit;
        })
      );

      setBuyCreditName("");
      setBuyQuantity("");
    } catch (error) {
      setErrorMessage("Purchase failed: " + error.message);
    }
  };

  useEffect(() => {
    handleConnectWallet();
  }, []);

  return (
    <div className="smart-contract-page">

      <h2 className="marketplace-heading">Energy Exchange Marketplace</h2>
      <p></p>

      {/* Wallet Connection */}
      <div className="wallet-connection">
        <p><strong>Connected Account:</strong> {account || "Not connected"}</p>
        <button onClick={handleConnectWallet} className="connect-wallet-btn">
          {account ? "Wallet Connected" : "Connect Wallet"}
        </button>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
         
      </div>

      {/* Producer Section */}
      <div className="producer-section">
        <h2>Producer Dashboard</h2>
        <div className="card">
          <h3>Mint Energy Credits</h3>
          <input
            type="text"
            placeholder="Token Name"
            value={tokenName}
            onChange={(e) => setTokenName(e.target.value)}
          />
          <input
            type="number"
            placeholder="Price per token (ETH)"
            value={newPrice}
            onChange={(e) => setNewPrice(e.target.value)}
          />
          <input
            type="number"
            placeholder="Amount to mint"
            value={mintAmount}
            onChange={(e) => setMintAmount(e.target.value)}
          />
          <button onClick={handleMint} className="btn-mint">Mint Credits</button>
        </div>
      </div>

      {/* Marketplace Section */}
      <div className="marketplace-section">
        <h2>Marketplace</h2>
        <div className="cards-container">
          {credits.length > 0 ? (
            credits.map((credit, index) => (
              <div className="card" key={index}>
                <h3>{credit.name}</h3>
                <p><strong>Price:</strong> {credit.price} ETH</p>
                <p>
                  <strong>Status:</strong>{" "}
                  {credit.quantity > 0 ? `${credit.quantity} available` : "Sold"}
                </p>
                {credit.quantity > 0 && (
                  <button
                    onClick={() => {
                      setBuyCreditName(credit.name); // Pre-fill credit name
                      setBuyQuantity(credit.quantity); // Pre-fill available quantity
                      setSuccessMessage(`Selected "${credit.name}" with quantity "${credit.quantity}" for purchase.`);
                    }}
                  >
                    Select to Buy
                  </button>
                )}
              </div>
            ))
          ) : (
            <p>No credits available in the marketplace yet.</p>
          )}
        </div>
      </div>

      {/* Consumer Section */}
      <div className="consumer-section">
        <h2>Consumer Dashboard</h2>
        <div className="card">
          <h3>Buy Energy Credits</h3>
          <input
            type="text"
            placeholder="Credit Name"
            value={buyCreditName}
            onChange={(e) => setBuyCreditName(e.target.value)}
          />
          <input
            type="number"
            placeholder="Quantity"
            value={buyQuantity}
            onChange={(e) => setBuyQuantity(e.target.value)}
          />
          <button onClick={handleBuy} className="btn-buy">Buy Tokens</button>
        </div>
      </div>
    </div>
  );
};

export default SmartContractPage;
