'use client';

import Image from 'next/image';
import { useUser } from '@clerk/nextjs';
import { Skeleton } from '../ui/skeleton';
import { useEffect, useState } from 'react';

export const UserProfile = () => {
  const { user, isLoaded, isSignedIn } = useUser();
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (isLoaded && !user) {
      setHasError(true);
    }
  }, [isLoaded, user]);

  if (hasError) {
    return (
      <div className="flex items-center space-x-4">
        <p className="text-red-500">Error al cargar el usuario.</p>
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div className="flex items-center space-x-4">
        <Skeleton className="h-10 w-10 rounded-full dark:bg-background" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[200px] dark:bg-background" />
          <Skeleton className="h-4 w-[150px] dark:bg-background" />
        </div>
      </div>
    );
  }

  if (!isSignedIn) {
    return (
      <div className="flex items-center space-x-4">
        <p className="text-gray-500">No has iniciado sesión.</p>
      </div>
    );
  }

  return (
    <div className="flex gap-3 items-center">
      <Image
        src={user.imageUrl || '/fallback-image.png'}
        alt={`${user.firstName} ${user.lastName}`}
        className="w-10 h-10 rounded-full mb-1"
        height={4}
        width={40}
      />

      <div className="flex flex-col text-sm">
        <span className="font-semibold">
          {user.lastName} {user.firstName}
        </span>

        <span className="text-slate-500 text-xs">
          {user.emailAddresses[0]?.emailAddress}
        </span>
      </div>
    </div>
  );
};
