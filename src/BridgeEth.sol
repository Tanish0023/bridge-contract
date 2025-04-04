// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.13;

import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import { IERC20 } from "@openzeppelin/contracts/token/ERC20/IERC20.sol";


contract BridgeETH is Ownable{
    uint public balance;
    address public tokenAddress;

    event Deposit(address indexed depositor, uint amount);

    mapping(address => uint256) public pendingBalance;

    constructor(address _tokenAddress) Ownable(msg.sender){
        tokenAddress = _tokenAddress;
    }

    function lock(IERC20 _tokenAddress, uint256 _amount) public{
        require(address(_tokenAddress) == tokenAddress);
        require(_tokenAddress.allowance(msg.sender, address(this)) >= _amount);
        require(_tokenAddress.transferFrom(msg.sender, address(this), _amount));
    }

    function unlock() public {

    }

    function burnOnOtherSide() public onlyOwner {

    }
}