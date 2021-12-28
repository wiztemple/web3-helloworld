pragma solidity ^0.8.0; // this specifies to solidity what compiler you expect it to use. it specifies the version we want to use

contract HelloWorld {

  function hello() public pure returns (string memory) {
    return "Hello, World!";
  }
}
