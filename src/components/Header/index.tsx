"use client"

import Image from "next/image";

const Header = () => {

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
      <span>菜单</span>
    </div>
  </header>
}
export default Header