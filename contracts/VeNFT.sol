//Contract based on https://docs.openzeppelin.com/contracts/3.x/erc721
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.1;

// implements the ERC721 Standard

// implements the ERC721 standard
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
// keeps track of the number of tokens issued
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

// Accessing the Ownable method ensures that only the creator of the smart contract can interact with it

contract VeNFT is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    // The name and symbol for the NFT

    constructor() ERC721("VeNFT", "VENFT") {}

    // create a function to mint/create the NFT
    // The receiver takes a type of address. This is the wallet address
    // user that should receive the NFT minted using the smart contract

    // tokenURI takes a string that contains metadata about the NFT

    function createNFT(address receiver, string memory tokenURI)
        public
        onlyOwner
        returns (uint256)
    {
        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        _mint(receiver, newItemId);
        _setTokenURI(newItemId, tokenURI);

        // returns the id for the newly created token

        return newItemId;
    }
}
