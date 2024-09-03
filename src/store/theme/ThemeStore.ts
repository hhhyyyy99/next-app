'use client';
import {create} from "zustand"
import {createJSONStorage, devtools, persist, StateStorage} from "zustand/middleware";


// 最大存储时间
const MAX_STORAGE_TIME = 5 * 60 * 1000;

interface ThemeState {
  theme: string;
  setTheme: (theme:string) => void;
}
interface PersistedState {
  state: ThemeState;
  timestamp: number;
}
const customLocalStorage: StateStorage = {
  getItem: async (name) => {
    if (typeof window === 'undefined') return null;
    const item = window.localStorage.getItem(name);
    if (item) {
      const { state, timestamp } = JSON.parse(item) as PersistedState;
      if (Date.now() - timestamp > MAX_STORAGE_TIME) {
        window.localStorage.removeItem(name);
        return null;
      }
      return JSON.stringify(state);
    }
    return null;
  },
  setItem: async (name, value) => {
    if (typeof window === 'undefined') return;
    const state = JSON.parse(value) as ThemeState;
    const persistedState: PersistedState = {
      state,
      timestamp: Date.now(),
    };
    window.localStorage.setItem(name, JSON.stringify(persistedState));
  },
  removeItem: async (name) => {
    if (typeof window === 'undefined') return;
    window.localStorage.removeItem(name);
  },
};
export const useThemeStore = create<ThemeState>()(
  devtools(
    persist(
      (set) => ({
        theme: "light",
        setTheme: (theme) => set({ theme }),
      }),
      {name: 'ThemeStore', storage: createJSONStorage(()=>customLocalStorage) },
    ),
  ),
);
