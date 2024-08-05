"use client"

import {useCallback, useMemo} from "react";
import {Button} from "antd";
import Image from "next/image";
import ConnectWallet from "@/components/ConnectWallet";
import {useAccount} from "wagmi";
import {Avatar,DoubleAvatar} from "@/components/Avatar";
import {getWalletIcon, shortenAddress} from "@/utils";
import {useConnectWalletMenuStore} from "@/store/connectWalletMenu";
import { WagmiConnectWallet } from "../ConnectWalletMenu";

const Header = () => {
  const {visible, setVisible} = useConnectWalletMenuStore()
  const {isConnected} = useAccount();
  const {address, connector} = useAccount();
  const formattedAddress = useMemo(() => shortenAddress(address), [address]);

  return <header className="relative p-4 flex justify-between items-center z-10">
    {/* Logo */}
    <div className="flex items-center">
      <div className="flex flex-1 justify-center items-center">
        <Image src="/images/logo.svg" alt="Logo" width={32} height={32}/>
        <span className="hidden md:block">Logo</span>
      </div>
    </div>
    {/* Settings Button */}
    <div className="flex items-center space-x-4 z-20">
      {isConnected && <div className="bg-white rounded-full px-3 py-1 flex items-center gap-2 cursor-pointer hover:bg-gray-100 transition-colors"
                           onClick={() => setVisible(!visible)}>
        <DoubleAvatar mainImg={{url:getWalletIcon(connector),name:connector?.name}}/>
        <span>{formattedAddress}</span>
      </div> || <Button type="primary" onClick={() => setVisible(true)}>连接钱包</Button>}
    </div>
    {/* <div className={`w-full fixed bottom-0 left-0 right-0 transition-transform rounded-t-lg
    md:w-[288px] md:absolute md:top-20 md:right-3.5 md:bottom-auto md:left-auto
    md:rounded-lg bg-white p-3 z-50 ${visible ? "translate-y-0 md:block" : "translate-y-[200%] md:hidden"}`}>
      <ConnectWallet/>
    </div>
    {visible &&
      <div className="fixed top-0 left-0 w-full h-full md:bg-transparent bg-black opacity-50" onClick={() => setVisible(false)}></div>} */}
      <WagmiConnectWallet/>
  </header>
}
export default Header