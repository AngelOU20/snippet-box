import Link from 'next/link';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/logo';
import { auth } from '@clerk/nextjs';

export const NavbarMarketing = () => {
  const { userId } = auth();

  return (
    <div className="fixed top-0 w-full h-16 px-4 border-b shadow-sm bg-white flex items-center">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <Logo />
        <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
          {userId ? (
            <Button>
              <Link href="/my-notes">Access to the app</Link>
            </Button>
          ) : (
            <>
              <Button variant="outline" asChild>
                <Link href="/sign-in">Sign in</Link>
              </Button>
              <Button asChild>
                <Link href="/sign-up">Get for free</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
