import Head from 'next/head'
import { ethers } from "ethers";
import Incrementer from "./artifacts/contracts/Incrementer.sol/Incrementer.json";

export default function Index() {
    return ( <> 
        <Head>
            <title>Next.js + Aurora</title>
        </Head>
    </>);

}