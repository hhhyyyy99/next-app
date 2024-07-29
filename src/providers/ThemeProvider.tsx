// src/providers/ThemeProvider.tsx
import { ConfigProvider } from 'antd';
import { ReactNode } from 'react';
import {theme} from "@/theme";

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => (
  <ConfigProvider theme={theme}>
    {children}
  </ConfigProvider>
);

export default ThemeProvider;
