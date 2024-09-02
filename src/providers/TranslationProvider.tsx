"use client"
import {NextIntlClientProvider} from "next-intl";
import type {typeOfLocale} from '@/i18n/locales'
import React from "react";
import {timeZone} from "@/i18n/config";

const TranslationProvider =  ({ children,locale,messages }:{children:React.ReactNode,locale:string,messages:typeOfLocale}) => {
  return <NextIntlClientProvider locale={locale} messages={messages} timeZone={timeZone}>{children}</NextIntlClientProvider>;
}

export default TranslationProvider;