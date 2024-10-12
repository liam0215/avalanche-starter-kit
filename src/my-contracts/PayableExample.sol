pragma solidity ^0.8.0;

contract PayableExample {
    uint256 public amountReceived = 0;

    function receiveNative() public payable {
        amountReceived += msg.value;
    }
}
