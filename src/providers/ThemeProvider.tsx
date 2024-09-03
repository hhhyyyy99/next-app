'use client';
// src/providers/ThemeProvider.tsx
import { ConfigProvider } from 'antd';
import { ReactNode } from 'react';
import { getTheme } from '@/theme';
import { useThemeStore } from '@/store/theme';

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const { theme } = useThemeStore();
  const themeConfig = getTheme(theme);
  return <ConfigProvider theme={themeConfig}>{children}</ConfigProvider>;
};

export default ThemeProvider;
