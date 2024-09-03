import type { ThemeConfig } from 'antd';
import {theme} from 'antd';

export const lightTheme: ThemeConfig = {
  token: {
    // 定义浅色主题的 token
    colorPrimary: '#1890ff',
    colorBgBase: '#ffffff',
  },
  algorithm:theme.defaultAlgorithm
};