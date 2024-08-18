'use client';

import { UserProfile } from './user-profile';
import { SearchBar } from './search-bar';
import { ModeToggle } from '../mode-toogle/mode-toogle';

export const Navbar = () => {
  return (
    <div className="w-full bg-slate-100 dark:bg-background p-5">
      <div className="rounded-lg flex justify-between items-center gap-4 bg-white dark:bg-[#1D293D] p-3">
        <UserProfile />

        <div className="md:w-3/5 flex justify-between items-center gap-10">
          <SearchBar className="hidden md:flex" />
          <ModeToggle />
        </div>
      </div>

      <div className="md:hidden flex justify-center items-center bg-white h-14 my-4 p-2 rounded-lg">
        <SearchBar />
      </div>
    </div>
  );
};
