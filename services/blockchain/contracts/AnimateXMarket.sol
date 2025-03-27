// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract AnimateXMarket is ERC721, ReentrancyGuard, Ownable {
    struct Animation {
        uint256 id;
        address creator;
        uint256 price;
        bool isListed;
        string metadataURI;
    }

    mapping(uint256 => Animation) public animations;
    uint256 private _tokenIds;
    uint256 public platformFee = 250; // 2.5%

    event AnimationCreated(uint256 indexed id, address creator);
    event AnimationListed(uint256 indexed id, uint256 price);
    event AnimationSold(uint256 indexed id, address seller, address buyer);

    constructor() ERC721("AnimateX Animations", "ANIM") {}

    function createAnimation(string memory metadataURI) external returns (uint256) {
        _tokenIds++;
        uint256 newItemId = _tokenIds;
        
        _mint(msg.sender, newItemId);
        animations[newItemId] = Animation(
            newItemId,
            msg.sender,
            0,
            false,
            metadataURI
        );

        emit AnimationCreated(newItemId, msg.sender);
        return newItemId;
    }
} 