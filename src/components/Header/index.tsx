"use client"

import {Button} from "antd";
import Image from "next/image";
import ConnectWallet from "../ConnectWallet";
import { useState } from "react";

const Header = ()=> {
  const [isOpen, setIsOpen] = useState(false);
  return <header className="p-4 flex justify-between items-center">
    {/* Logo */}
    <div className="flex items-center">
      <div className="flex flex-1 justify-center items-center">
        <span>Logo</span>
      </div>
    </div>
    {/* Settings Button */}
    <div className="flex items-center space-x-4">
      <Button onClick={()=>setIsOpen(true)}>连接钱包</Button>
    </div>
    {isOpen&&<div className="absolute bg-white top-20 z-50"><ConnectWallet/></div>}
  </header>
}
export default Header