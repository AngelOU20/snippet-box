'use client';

import React from 'react';
import {
  dataLanguagesSidebar,
  dataQuickLinksSidebar,
} from './sidebar-routes.data';
import { SidebarItem } from '../sidebar-item/sidebar-item';
import Link from 'next/link';

export const SidebarRoutes = () => {
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="py-2">
        <div className="py-2 md:py-6">
          <p className="text-slate-500 font-semibold mb-4">Quick Links</p>

          {dataQuickLinksSidebar.map((item) => (
            <React.Fragment key={item.label}>
              <SidebarItem item={item} />
            </React.Fragment>
          ))}
        </div>

        <div className="py-2 md:py-6">
          <p className="text-slate-500 font-semibold mb-4">Languages</p>

          {dataLanguagesSidebar.map(({ label, icon: Icon, href, count }) => (
            <React.Fragment key={label}>
              <Link
                href={href}
                className="flex justify-between items-center gap-x-2 text-sm p-2 mt-2 text-slate-600 dark:text-white cursor-pointer"
              >
                <span className="flex gap-x-2">
                  <Icon strokeWidth={1} className="h-5 w-5" />
                  {label}
                </span>
                <span className="font-light">{count}</span>
              </Link>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
