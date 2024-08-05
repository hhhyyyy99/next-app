'use client';

import { createWithEqualityFn } from 'zustand/traditional';

interface ConnectWalletMenuState {
  visible: boolean;
  setVisible: (visible: boolean) => void;
}

export const useConnectWalletMenuStore = createWithEqualityFn<ConnectWalletMenuState>(
  (set) => ({
    visible:false,
    setVisible: (visible) => set({ visible }),
  }),
  Object.is,
);