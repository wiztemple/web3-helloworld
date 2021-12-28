import { useEffect } from 'react';
import { ethers } from 'ethers';
import HelloWorld from './artifacts/contracts/HelloWorld.sol/HelloWorld.json'

function App() {
  async function hasSigners() {
    const metamask = window.ethereum;
    const signers = await (metamask.request({method: 'eth_accounts'}));
    return signers.length > 0;
  }
  async function requestAccount(){
    const result = (await window.ethereum.request({ method: 'eth_requestAccounts' }))
    return result && result.length > 0;
  }

  async function getContract() {
    const address = process.env.CONTRACT_ADDRESS;
  
    if (!(await hasSigners()) && !(await requestAccount())) {
        console.log("You are in trouble, no one wants to play");
    }
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const contract = new ethers.Contract(
        address,
        HelloWorld.abi, // abi
        provider
    );

    console.log(await contract.helloWorld());
  }
  useEffect(() => {
    getContract();
  }, [])

  return (
    <div className="app">
      <h1>Okay</h1>
    </div>
  );
}

export default App;
