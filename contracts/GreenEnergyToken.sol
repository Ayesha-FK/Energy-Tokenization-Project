// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract GreenEnergyMarketplace {
    struct EnergyCredit {
        address producer;
        uint256 price;         // Price per unit of the energy credit
        uint256 quantity;      // Available quantity of energy credits
        string name;           // Name of the token
        bool available;        // Availability status
    }

    mapping(string => EnergyCredit) public energyCredits; // Map credit names to their details
    mapping(address => uint256) public producerEarnings;

    event CreditCreated(
        string indexed name,
        address indexed producer,
        uint256 price,
        uint256 quantity
    );

    event CreditPurchased(
        string indexed name,
        address indexed buyer,
        uint256 quantity
    );

    event EarningsWithdrawn(
        address indexed producer,
        uint256 amount
    );

    // Function to create energy credits
    function createEnergyCredit(
        uint256 price,
        uint256 quantity,
        string memory name
    ) public {
        require(price > 0, "Price must be greater than zero");
        require(quantity > 0, "Quantity must be greater than zero");
        require(bytes(name).length > 0, "Name cannot be empty");
        require(energyCredits[name].quantity == 0, "Credit with this name already exists");

        energyCredits[name] = EnergyCredit({
            producer: msg.sender,
            price: price,
            quantity: quantity,
            name: name,
            available: true
        });

        emit CreditCreated(name, msg.sender, price, quantity);
    }

    // Function to get energy credit details by name
    function getEnergyCredit(string memory name) public view returns (
        address producer, uint256 price, uint256 quantity, string memory tokenName, bool available
    ) {
        EnergyCredit storage credit = energyCredits[name];
        require(credit.quantity > 0, "Credit does not exist");
        return (
            credit.producer,
            credit.price,
            credit.quantity,
            credit.name,
            credit.available
        );
    }

    // Function to purchase energy credits by name
    function buyEnergyCredit(string memory name, uint256 quantity) public payable {
        EnergyCredit storage credit = energyCredits[name];
        require(credit.quantity > 0, "Credit does not exist");
        require(credit.available, "Credit not available");
        require(quantity > 0 && quantity <= credit.quantity, "Invalid quantity requested");

        uint256 totalCost = credit.price * quantity;
        require(msg.value >= totalCost, "Insufficient funds sent");

        credit.quantity -= quantity;

        if (credit.quantity == 0) {
            credit.available = false;
        }

        emit CreditPurchased(name, msg.sender, quantity);
    }

    // Function for producers to withdraw earnings
    function withdrawEarnings() public {
        uint256 earnings = producerEarnings[msg.sender];
        require(earnings > 0, "No earnings to withdraw");

        producerEarnings[msg.sender] = 0;
        payable(msg.sender).transfer(earnings);

        emit EarningsWithdrawn(msg.sender, earnings);
    }
}
