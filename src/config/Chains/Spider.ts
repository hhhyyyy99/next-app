import { defineChain } from "viem"

export const spider = /*#__PURE__*/ defineChain({
  id: 919,
  name: 'Spider',
  nativeCurrency: {
    decimals: 18,
    name: 'Spider',
    symbol: 'SPC',
  },
  rpcUrls: {
    default: { http: ['http://main-node.spiderlabs.net:18545'] },
  },
  blockExplorers: {
    default: {
      name: 'Spider',
      url: 'http://scan.spiderlabs.net',
    },
  },
})
