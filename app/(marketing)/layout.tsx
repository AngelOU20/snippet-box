import { FooterMarketing } from './_components/footer';
import { NavbarMarketing } from './_components/navbar';

type Props = {
  children: React.ReactNode;
};

const MarketingLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className={`h-full bg-slate-100`}>
      <NavbarMarketing />
      <main className="bg-slate-100 h-screen pt-40 pb-20">{children}</main>
      <FooterMarketing />
    </div>
  );
};

export default MarketingLayout;
