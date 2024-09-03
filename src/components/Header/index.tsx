"use client"

import Image from "next/image";
import Link from "next/link";
import {Button} from "antd";
import useTheme from "@/theme/hooks";

const Header = () => {
  const {theme,toggleTheme} = useTheme();
  return <header className="relative p-4 flex justify-between items-center z-10">
    {/* Logo */}
    <div className="flex items-center">
      <div className="flex flex-1 justify-center items-center">
       <Link href="/">
        {/* <Image src="/images/logo.svg" alt="Logo" width={32} height={32}/> */}
        {/* <span className="hidden md:block">Logo</span> */}
        <span>Logo</span>
       </Link>
      </div>
    </div>
    {/* Settings Button */}
    <div className="flex items-center space-x-4 z-20">
      <Button type="primary" onClick={()=>toggleTheme()}>主题:{theme}</Button>
      <span>菜单</span>
    </div>
  </header>
}
export default Header