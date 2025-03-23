// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.13;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import { IERC20 } from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

contract WTanCoin is ERC20, Ownable {
    constructor() ERC20("WTanCoin","WTC") Ownable(contract.address) {

    }
    
    function mint(address to, uint amount) private onlyOwner{
        _mint(to, amount);
    }

    function burn(address to, uint amount) public {
        
    }
}
