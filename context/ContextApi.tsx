'use client';

import { createContext, useContext, useState } from 'react';
import {
  PanelsTopLeft,
  Heart,
  Trash,
  LucideIcon,
  Moon,
  Sun,
} from 'lucide-react';
import { IconType } from 'react-icons';
import { dataQuickLinksSidebar } from '@/components/sidebar-routes/sidebar-routes.data';

// interface DarkModeType {
//   id: number;
//   icon: LucideIcon;
//   isSelected: boolean;
// }

interface SidebarMenu {
  id: number;
  name: string;
  href: string;
  isSelected: boolean;
  icon: LucideIcon | IconType;
}

interface GlobalContextType {
  sidebarMenuObject: {
    sidebarMenu: SidebarMenu[];
    setSidebarMenu: React.Dispatch<React.SetStateAction<SidebarMenu[]>>;
  };

  // darkModeObject: {
  //   darkMode: DarkModeType[];
  //   setDarkMode: React.Dispatch<React.SetStateAction<DarkModeType[]>>;
  // };
}

const ContextProvider = createContext<GlobalContextType>({
  sidebarMenuObject: {
    sidebarMenu: [],
    setSidebarMenu: () => {},
  },

  // darkModeObject: {
  //   darkMode: [],
  //   setDarkMode: () => {},
  // },
});

export default function GlobalContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarMenu, setSidebarMenu] = useState<SidebarMenu[]>(
    dataQuickLinksSidebar
  );

  // const [darkMode, setDarkMode] = useState<DarkModeType[]>([
  //   {
  //     id: 1,
  //     icon: Sun,
  //     isSelected: true,
  //   },
  //   {
  //     id: 2,
  //     icon: Moon,
  //     isSelected: false,
  //   },
  // ]);

  return (
    <ContextProvider.Provider
      value={{
        sidebarMenuObject: { sidebarMenu, setSidebarMenu },
        // darkModeObject: { darkMode, setDarkMode },
      }}
    >
      {children}
    </ContextProvider.Provider>
  );
}

export const useGlobalContext = () => {
  const context = useContext(ContextProvider);

  if (!context) {
    throw new Error(
      'useGlobalContext must be used within a GlobalContextProvider'
    );
  }

  return context;
};
