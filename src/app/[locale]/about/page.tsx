"use client"
import AppLayout from "@/components/Layout";
import {useTranslations} from "next-intl";
const AboutPage = () => {
  const t = useTranslations('AboutPage');
  return <AppLayout>
    <div>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
    </div>
  </AppLayout>
};
export default AboutPage;