import { id, JsonRpcProvider } from "ethers"

const provider = new JsonRpcProvider("https://eth-mainnet.g.alchemy.com/v2/5PdkNmU-khw3HZ5uPlRZkVnD9SkG6Bo7");

async function pollBlock(blocknumber: number){
    const logs = await provider.getLogs({
        address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
        fromBlock: blocknumber,
        toBlock: blocknumber,
        topics: [id("Transfer(address,address,uint256)")]
    })

    console.log(logs);
    
}

pollBlock(22210169)