import { useAccount, useConnect, useDisconnect, useReadContract, WagmiProvider } from 'wagmi'
import { config } from './config'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import './App.css'

const queryClient = new QueryClient();

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectWallet />
        <TotalSupply />
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export const TotalSupply = () => {
  const {data, isLoading, error} = useReadContract({
    address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
    abi: [
      {"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}
    ],
    functionName: 'totalSupply'
  })

  if(isLoading){
    return <div>
      ...Loading
    </div>
  }

  if(error){
    <div>
      Error fetching the total supply!
    </div>
  }

  return <div>
    Total Supply is {data ? parseInt(data.toString()) / 1000000000000000 : 'N/A'}
  </div>
}

const ConnectWallet = () => {
  const {address, isConnected} = useAccount();
  const {connectors, connect} = useConnect();
  const {disconnect} = useDisconnect();

  if (isConnected){
    return <div >
      <p>You are connected {address}</p>
      <button onClick={() => disconnect()}>Disconnect</button>
    </div>
  }

  return connectors.map((connector) => (
    <button key={connector.uid} onClick={() => connect({connector})}>
      {connector.name}
    </button>
  ))
}
 
export default App
