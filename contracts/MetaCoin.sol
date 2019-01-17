pragma solidity ^0.5.0;

import {SafeMath} from "./SafeMath.sol";

contract MetaCoin {
	mapping (address => uint) public balances;

	constructor() public {
		balances[tx.origin] = 1;
	}

	function sendCoin(address safeMath, address receiver, uint amount) public {
		balances[msg.sender] = SafeMath(safeMath).sub(balances[msg.sender], amount);
		balances[receiver] = SafeMath(safeMath).add(balances[receiver], amount);
	}
}
