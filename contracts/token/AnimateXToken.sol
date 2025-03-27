// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract AnimateXToken is ERC20, Ownable {
    uint256 public constant TOTAL_SUPPLY = 1000000000 * 10**18;

    constructor() ERC20("AnimateX", "ANIMX") {
        _mint(msg.sender, TOTAL_SUPPLY);
    }
} 