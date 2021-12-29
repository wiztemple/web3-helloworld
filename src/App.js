import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import HelloWorld from './artifacts/contracts/HelloWorld.sol/HelloWorld.json'

function App() {
  const [helloWorld, setHelloWorld] = useState('');
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
    if (!(await hasSigners()) && !(await requestAccount())) {
        console.log("no available account");
    }
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const contract = new ethers.Contract(
      "0x5fbdb2315678afecb367f032d93f642f64180aa3",
        HelloWorld.abi, // abi
        provider
    );
    setHelloWorld(await contract.hello());
  }

  useEffect(() => {
    getContract();
  }, [])

  return (
    <div className="app">
      <h1>{helloWorld}</h1>
    </div>
  );
}

export default App;
