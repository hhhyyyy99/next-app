"use client"
import Header from "@/components/Header";
import MainContent from "@/components/MainContent";
import AppLayout from "@/components/Layout";
import {useTranslation} from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
  return <AppLayout>
    <div>{t("navbar.welcome.title")}</div>
  </AppLayout>
}
