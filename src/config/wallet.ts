import { http, createConfig } from 'wagmi';
import { base, mainnet, optimism } from 'wagmi/chains';
// import { injected, safe, walletConnect,coinbaseWallet } from 'wagmi/connectors';

// const projectId = '3cba8b23aab2853366a341b18cfb60d1';

export const wagmiConfig = createConfig({
  chains: [mainnet, optimism, base],
  ssr:true,
  // connectors: [injected(), walletConnect({ projectId }), safe(),coinbaseWallet({ version: '4'})],
  connectors:[],
  transports: {
    [mainnet.id]: http(),
    [optimism.id]: http(),
    [base.id]: http(),
  },
});
