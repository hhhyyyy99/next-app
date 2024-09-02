import {getRequestConfig} from 'next-intl/server';
import {defaultLocale} from "@/i18n/config";

export default getRequestConfig(async () => {
  // Provide a static locale, fetch a user setting,
  // read from `cookies()`, `headers()`, etc.
  const locale = defaultLocale;

  return {
    locale,
    messages: (await import(`./locales/${locale}.json`)).default
  };
});