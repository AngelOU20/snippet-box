import { Logo } from '@/components/logo';
import { SidebarRoutes } from '@/components/sidebar-routes';

export const Sidebar = () => {
  return (
    <div className="h-screen">
      <div className="h-full flex flex-col gap-20 p-5 border-r">
        <Logo />

        <SidebarRoutes />
      </div>
    </div>
  );
};
