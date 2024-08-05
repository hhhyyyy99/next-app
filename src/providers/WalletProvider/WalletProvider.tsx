"use client"
import {ReactNode} from "react";
import { WagmiProvider } from 'wagmi'
import {wagmiConfig} from "@/config"

interface WalletProviderProps {
  children: ReactNode;
}

export const WalletProvider = ({ children }: WalletProviderProps) => (
  <WagmiProvider config={wagmiConfig}>
    {children}
  </WagmiProvider>
);

