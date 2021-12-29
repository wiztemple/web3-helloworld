require("@nomiclabs/hardhat-ethers");
const { ethers } = require("hardhat");

async function deployApp() {
  const HelloWorld = await ethers.getContractFactory("HelloWorld");

  const hello = await HelloWorld.deploy();

  await hello.deployed();

  console.log(await hello.hello());

  return hello
}
async function deploy() {
  const hello = await deployApp();
  
  return hello;
}
async function sayHello(hello) {
  console.log("Say Hello:", await hello.hello());
}

deploy().then(sayHello);