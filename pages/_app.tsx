import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // please change this before production to // Mainnet //
  <ThirdwebProvider desiredChainId={ChainId.Rinkeby}>
      <Component {...pageProps} />
  </ThirdwebProvider>
    
  
  
  )
}

export default MyApp
