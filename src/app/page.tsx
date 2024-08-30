import AppLayout from "@/components/Layout";
import {useTranslations} from 'next-intl';
import Link from "next/link";

export default function Home() {
  const t = useTranslations('HomePage');
  return <AppLayout>
    <div>{t('HomePage.title')}</div>
    <Link href={"/about"}>
      <button>{t('HomePage.about')}</button>
    </Link>
  </AppLayout>
}
