// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Calculator {
    event Addition(uint256 a, uint256 b, uint256 result);
    event Subtraction(uint256 a, uint256 b, uint256 result);
    event Multiplication(uint256 a, uint256 b, uint256 result);
    event Division(uint256 a, uint256 b, uint256 result);

    function add(uint256 a, uint256 b) public returns (uint256) {
        uint256 result = a + b;
        emit Addition(a, b, result);
        return result;
    }

    function subtract(uint256 a, uint256 b) public returns (uint256) {
        uint256 result = a - b;
        emit Subtraction(a, b, result);
        return result;
    }

    function multiply(uint256 a, uint256 b) public returns (uint256) {
        uint256 result = a * b;
        emit Multiplication(a, b, result);
        return result;
    }

    function divide(uint256 a, uint256 b) public returns (uint256) {
        require(b != 0, "Cannot divide by zero");
        uint256 result = a / b;
        emit Division(a, b, result);
        return result;
    }
}
