'use client';

import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { SidebarItemProps } from './sidebar-item.type';

export const SidebarItem: React.FC<SidebarItemProps> = ({ item }) => {
  const { name, icon: Icon, href } = item;
  const pathName = usePathname();

  const activePath = pathName === href;

  return (
    <Link
      href={href}
      className={cn(
        `flex gap-x-2 mt-2 light: text-slate-600 dark:text-white text-sm items-center  p-2 rounded-lg cursor-pointer hover:bg-cyan-600 hover:text-white transition-all`,
        activePath && 'bg-cyan-600 text-white'
      )}
    >
      <Icon strokeWidth={1} className="h-5 w-5" />
      {name}
    </Link>
  );
};
