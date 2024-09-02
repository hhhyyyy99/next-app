"use client"
import AppLayout from "@/components/Layout";
import {useTranslations} from 'next-intl';
import {Link} from "@/lib/language";
import {staticRouter} from "@/static/staticRouter";

export default function Home() {
  const t = useTranslations('HomePage');
  return  <AppLayout>
    <div>{t('title')}</div>
    <Link href={staticRouter.about}>
      <button>{t('about')}</button>
    </Link>
  </AppLayout>
}
