// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract GasOptimizedToken {
    mapping(address => uint256) private balances;
    mapping(address => mapping(address => uint256)) private allowances;
    uint256 private _totalSupply;

    // Use assembly for basic operations
    function transfer(address to, uint256 amount) public returns (bool) {
        assembly {
            // Load balances mapping slot
            mstore(0x00, caller())
            mstore(0x20, 0x00) // balances slot
            let fromBalance := sload(keccak256(0x00, 0x40))
            
            // Check balance and underflow
            if lt(fromBalance, amount) { revert(0, 0) }
            
            // Update balances
            sstore(keccak256(0x00, 0x40), sub(fromBalance, amount))
            
            // Update recipient balance
            mstore(0x00, to)
            let toBalance := sload(keccak256(0x00, 0x40))
            sstore(keccak256(0x00, 0x40), add(toBalance, amount))
        }
        return true;
    }
} 