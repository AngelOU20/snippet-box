import { Navbar } from '@/components/navbar';
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
      <div className="w-full h-full lg:ml-80">
        <Navbar />
        <div
          className="p-6 bg-slate-100 dark:bg-[#050a1a]/90"
          style={{
            height: 'calc(100vh - 6.75rem)',
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Platformlayout;
