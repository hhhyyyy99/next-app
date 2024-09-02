"use client"

import Image from "next/image";
import { Link, usePathname as useIntlPathname, useRouter as useIntlRouter } from '@/lib/language';
import {useTransitionStore} from "@/store/translation";
import {Button} from "antd";
import {useTranslations} from "next-intl";
import {staticRouter} from "@/static/staticRouter";

const Header = () => {
  const t = useTranslations('Header');
  const {language,setLanguage} = useTransitionStore()
  const intlPathname = useIntlPathname();
  const intlRouter = useIntlRouter();
  const handleLanguageChange = () => {
    const value = language === 'en'? 'zh' : 'en'
    setLanguage(value)
    intlRouter.replace(intlPathname, { locale: value });
  }
  return <header className="relative p-4 flex justify-between items-center z-10">
    {/* Logo */}
    <div className="flex items-center">
      <div className="flex flex-1 justify-center items-center">
        <Link href={staticRouter.root}>
          <Image src="/images/logo.svg" alt="Logo" width={32} height={32}/>
          <span className="hidden md:block">Logo</span>
        </Link>
      </div>
    </div>
    {/* Settings Button */}
    <div className="flex items-center space-x-4 z-20">
      <span>{`${t("language")}:${language}`}</span>
      <Button onClick={handleLanguageChange}>{t("changeLanguage")}</Button>
    </div>
  </header>
}
export default Header