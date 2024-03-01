// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "forge-std/Test.sol";
import "../src/Merchant.sol";
import "./MockERC20.sol";

contract MerchantTest is Test {
    Merchant public merchant;
    MockERC20 public mockERC20;

    address testUser = address(0x123);
    string constant testProductId = "product-001";
    uint256 constant testProductPrice = 1 ether;
    uint256 constant testProductPoints = 10;

    function setUp() public {
        mockERC20 = new MockERC20();
        merchant = new Merchant(address(mockERC20));

        // Minting mock tokens to testUser
        mockERC20.mint(testUser, 1000 ether);

        // Adding a product
        merchant.addProduct(testProductId, testProductPrice, testProductPoints);
    }

    function testAddProduct() public {
        // Asserting the product was added correctly
        (uint256 price, uint256 points) = merchant.products(testProductId);
        assertEq(price, testProductPrice);
        assertEq(points, testProductPoints);
    }

    function testPurchaseProduct() public payable {
        // Simulating purchase by testUser
        vm.startPrank(testUser);
        testUser.call{value: testProductPrice}(abi.encodeWithSelector(merchant.purchaseProduct.selector, testProductId));
        vm.stopPrank();

        // Asserting the purchase incremented totalPurchases and awarded points
        assertEq(merchant.totalPurchases(testUser), 1);
        assertEq(merchant.points(testUser), testProductPoints);
    }

    function testClaimAirdrop() public {
        // Setting up testUser with enough points to claim airdrop
        vm.startPrank(testUser);
        testUser.call{value: testProductPrice * 10}(abi.encodeWithSelector(merchant.purchaseProduct.selector, testProductId));
        merchant.claimAirdrop();
        vm.stopPrank();

        // Asserting the airdrop was claimed
        uint256 balance = mockERC20.balanceOf(testUser);
        assertEq(balance, 100); // Airdrop amount
    }

    receive() external payable {}
}