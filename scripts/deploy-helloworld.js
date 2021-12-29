require("@nomiclabs/hardhat-ethers");
const { ethers } = require("hardhat");

async function deployHellowWorld() {
  const HelloWorld = await ethers.getContractFactory("HelloWorld");

  const hello = await HelloWorld.deploy();

  await hello.deployed();

  console.log(await hello.hello());

  return hello
}
async function deploy() {
  const hello = await deployHellowWorld();
  
  return hello;
}

deploy();