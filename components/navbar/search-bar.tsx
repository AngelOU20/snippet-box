import React from 'react';
import { Plus, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const AddSnippetButton = () => {
  return (
    <Button
      size={'sm'}
      className="absolute bg-cyan-600 hover:bg-cyan-600/90 top-0.5 right-0 select-none"
    >
      <Plus className="w-4 h-4" strokeWidth={4} /> Snippet
    </Button>
  );
};

export const SearchBar = ({ className }: { className?: string }) => {
  return (
    <div
      className={`relative pl-3 w-4/5 h-10 bg-slate-100 rounded-md flex items-center gap-2 ${className}`}
    >
      <Search />
      <Input
        type="text"
        placeholder="Search a snippet..."
        className="w-[70%] border-0 text-sm bg-slate-100 text-slate-500"
      />
      <AddSnippetButton />
    </div>
  );
};
