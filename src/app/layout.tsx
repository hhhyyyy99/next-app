import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import ThemeProvider from "@/providers/ThemeProvider";
import { WalletProvider } from "@/providers/WalletProvider";
import { ReactQueryProvider } from "@/providers/ReactQueryProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <WalletProvider>
        <ReactQueryProvider>
          <ThemeProvider>
            <AntdRegistry>{children}</AntdRegistry>
          </ThemeProvider>
        </ReactQueryProvider>
      </WalletProvider>
      </body>
    </html>
  );
}
