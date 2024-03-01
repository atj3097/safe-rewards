// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Merchant is ERC721URIStorage, Ownable {
    IERC20 public merchantToken;
    
    struct Product {
        uint256 price; // Price in xDai
        uint256 points; // Points awarded for purchasing
    }

    uint256 public nextTokenId;
    mapping(string => Product) public products;
    mapping(address => uint256) public points;
    mapping(address => uint256) public totalPurchases;

    event ProductPurchased(address indexed customer, string productId, uint256 tokenId, uint256 pointsAwarded);
    event PointsRedeemed(address indexed customer, uint256 points);
    event AirdropClaimed(address indexed customer, uint256 tokenAmount);

    constructor(address merchantTokenAddress) ERC721("MerchantReceipt", "MRCPT") Ownable(msg.sender){
        merchantToken = IERC20(merchantTokenAddress);
    }

    function addProduct(string memory _id, uint256 _price, uint256 _points) public onlyOwner {
        products[_id] = Product(_price, _points);
    }


    function purchaseProduct(string memory productId) external payable {
        Product memory product = products[productId];
        require(msg.value == product.price, "Incorrect payment amount");

        uint256 tokenId = nextTokenId++;
        _mint(msg.sender, tokenId);
        _setTokenURI(tokenId, string(abi.encodePacked("https://example.com/api/products/", productId)));

        points[msg.sender] += product.points;
        totalPurchases[msg.sender]++;

        emit ProductPurchased(msg.sender, productId, tokenId, product.points);
    }

    function claimAirdrop() external {
        require(points[msg.sender] >= 100, "Not enough points to claim airdrop");
        
        uint256 airdropAmount = 100;
        merchantToken.transfer(msg.sender, airdropAmount);
        emit AirdropClaimed(msg.sender, airdropAmount);
    }
}
