import { Logo } from '@/components/logo';
import React from 'react';

type LayoutProps = {
  children: React.ReactNode;
};

const AuthLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-10">
      <Logo />
      {children}
    </div>
  );
};

export default AuthLayout;
