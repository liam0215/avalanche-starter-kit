// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts@4.8.1/token/ERC20/IERC20.sol";

contract TokenReceiver {
    IERC20 public token;

    constructor(address tokenAddress) {
        token = IERC20(tokenAddress);
    }

    function receiveTokens(address from, uint256 amount) public {
        require(token.transferFrom(from, address(this), amount), "Transfer failed");
    }
}
