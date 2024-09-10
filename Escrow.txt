pragma solidity ^0.8.0;

contract Escrow {
  address public funder;
  address public recepient;
  address public arbiter;

  uint public depositedAmount;
  bool public funderDeposited;
  bool public recepientConfirmed;

  constructor(address _funder, address _seller, address _arbiter) {
    funder = _funder;
    recepient = _seller;
    arbiter = _arbiter;
  }

  function deposit() public payable {
    require(msg.sender == funder, "Only buyer can deposit");
    require(!funderDeposited, "Buyer already deposited");

    depositedAmount = msg.value;
    funderDeposited = true;
  }

  function confirmDelivery() public {
    require(msg.sender == recepient, "Only seller can confirm delivery");
    require(funderDeposited, "Buyer hasn't deposited yet");

    recepientConfirmed = true;
  }

  function releaseFundsToBuyer() public {
    require(recepientConfirmed, "Seller hasn't confirmed delivery");

    payable(funder).transfer(depositedAmount);

    // Reset contract state
    depositedAmount = 0;
    funderDeposited = false;
    recepientConfirmed = false;
  }

  function releaseFundsToSeller(address _to) public {
    require(msg.sender == arbiter, "Only arbiter can release to seller");
    require(!recepientConfirmed, "Seller already confirmed or funds released");

    payable(_to).transfer(depositedAmount);

    // Reset contract state
    depositedAmount = 0;
    funderDeposited = false;
    recepientConfirmed = false;
  }
}

