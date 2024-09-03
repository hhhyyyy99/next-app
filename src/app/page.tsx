import Header from "@/components/Header";
import MainContent from "@/components/MainContent";
import AppLayout from "@/components/Layout";
import Link from "next/link";

export default function Home() {
  return <AppLayout>
   <div className="flex flex-col items-center gap-4 rounded-lg p-6 bg-gray-300 dark:bg-purple-500">
   <header className="">主页</header>
    <Link href="/about" className="">关于我们</Link>
    <Link href="/profile" className="">资料</Link>
   </div>
  </AppLayout>
}
