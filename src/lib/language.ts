import { createLocalizedPathnamesNavigation } from 'next-intl/navigation';
import { staticRouter } from '@/static/staticRouter';
import { locales } from "@/i18n/config";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const localePrefix = undefined;
export const pathnames = {} as any;

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({
    locales,
    pathnames,
    localePrefix,
  });

export type AppPathnames = keyof typeof staticRouter;

