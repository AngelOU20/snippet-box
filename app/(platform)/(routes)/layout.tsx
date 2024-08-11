import { Sidebar } from '@/components/sidebar';

type LayoutProps = {
  children: React.ReactNode;
};

const Platformlayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex w-full h-full">
      <div className="hidden lg:block w-80 h-full lg:fixed">
        <Sidebar />
      </div>
      <div className="w-full lg:ml-80">
        <p>Navbar</p>
        <div className="p-6 bg-[#fafbfc] dark:bg-[#050a1a]/90">{children}</div>
      </div>
    </div>
  );
};

export default Platformlayout;
