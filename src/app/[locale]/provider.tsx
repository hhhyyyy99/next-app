import { AntdRegistry } from '@ant-design/nextjs-registry';
import ThemeProvider from "@/providers/ThemeProvider";
import { WalletProvider } from "@/providers/WalletProvider";
import { ReactQueryProvider } from "@/providers/ReactQueryProvider";
import TranslationProvider from "@/providers/TranslationProvider";
import {Props} from "@/types/Layout";
import {defaultLocale} from "@/i18n/config";
import msgList from "@/i18n/locales"

const Provider = ({children,params:{locale}}: Props) => {
  const lng = locale || defaultLocale
  // @ts-ignore
  const messages = msgList[lng]
  return (
    <>
      <TranslationProvider locale={lng} messages={messages}>
        <WalletProvider>
          <ReactQueryProvider>
            <ThemeProvider>
              <AntdRegistry>
                {children}
              </AntdRegistry>
            </ThemeProvider>
          </ReactQueryProvider>
        </WalletProvider>
      </TranslationProvider>
    </>
  );
};

export default Provider;