'use client';

import { UserProfile } from './user-profile';
import { SearchBar } from './search-bar';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ModeToggle } from '@/components/mode-toogle/mode-toogle';
import { SidebarRoutes } from '@/components/sidebar-routes';
import { Menu } from 'lucide-react';

export const Navbar = () => {
  return (
    <div className="w-full bg-slate-100 dark:bg-background p-5">
      <div className="rounded-lg flex justify-between items-center gap-4 bg-white dark:bg-[#1D293D] p-3">
        <UserProfile />

        <div className="md:w-3/5 flex justify-between items-center gap-10">
          <SearchBar className="hidden md:flex" />
          <ModeToggle />
        </div>

        <div className="block md:hidden">
          <Sheet>
            <SheetTrigger className="flex items-center">
              <Menu />
            </SheetTrigger>
            <SheetContent side={'left'}>
              <SidebarRoutes />
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <div className="md:hidden w-full flex items-center bg-white h-14 my-4 p-2 rounded-lg dark:bg-[#1D293D]">
        <SearchBar />
      </div>
    </div>
  );
};
