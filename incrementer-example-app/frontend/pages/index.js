import Head from 'next/head'
import React, { useEffect, useState } from 'react';
import { ethers } from "ethers";
import Incrementer from "../artifacts/contracts/Incrementer.sol/Incrementer.json";

export default function Index() {
    const [counter, setCounter] = useState(null);
const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);

    useEffect(() => {
        const loadProvider = async () => {
          let contractAddress = "0xA2F40765C236cA40b8Dda466231208a4c21D7B99";
          const url = "https://testnet.aurora.dev";
          const provider = new ethers.providers.JsonRpcProvider(url);
          const contract = new ethers.Contract(
            contractAddress,
            Incrementer.abi,
            provider
          );
          setContract(contract);
          setProvider(provider);
          // console.log(contract);
        };
        loadProvider();
      }, []);

      useEffect(() => {
        const getCounter = async () => {
          const counter = await contract.getCounter();
          setCounter(ethers.BigNumber.from(counter).toNumber());
        };
        contract && getCounter();
      }, [contract]);
      
    
    return ( <> 
        <Head>
            <title>Next.js + Aurora</title>
        </Head>
    <div>{counter}</div>
    </>);

}