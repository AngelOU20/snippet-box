'use client';

import { UserProfile } from './user-profile';
import { SearchBar } from './search-bar';

export const Navbar = () => {
  return (
    <div className="w-full bg-slate-100 p-5">
      <div className="rounded-lg flex justify-between items-center gap-4 bg-white p-3">
        <UserProfile />

        <div className="md:w-3/5 flex justify-between items-center gap-10">
          <SearchBar className="hidden md:flex" />
          <p>Toogle mode dark</p>
        </div>
      </div>

      <div className="md:hidden flex justify-center items-center bg-white h-14 my-4 p-2 rounded-lg">
        <SearchBar />
      </div>
    </div>
  );
};
