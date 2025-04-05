import { useConnect, WagmiProvider } from 'wagmi'
import { config } from './config'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import './App.css'

const queryClient = new QueryClient();

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectWallet />
      </QueryClientProvider>
    </WagmiProvider>
  )
}

const ConnectWallet = () => {
  const {connectors, connect} = useConnect();

  return connectors.map((connector) => (
    <button key={connector.uid} onClick={() => connect({connector})}>
      {connector.name}
    </button>
  ))
}
 
export default App
