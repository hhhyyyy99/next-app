"use client"
import { redirect } from 'next/navigation';
import {defaultLocale} from "@/i18n/config";

export default function RootPage () {
  // 将用户重定向到默认语言路径
  redirect(`/${defaultLocale}`);
}
