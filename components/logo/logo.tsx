import Image from 'next/image';
import Link from 'next/link';

export const Logo = () => {
  return (
    <Link href="/">
      <div className="hover:opacity-75 transition items-center gap-x-3 md:flex hidden">
        <Image src="/logo.svg" alt="logo" height={45} width={45} />
        <p className="text-xl font-bold text-neutral-600 dark:text-neutral-100">
          <span className="text-cyan-600">Snippet</span> box
        </p>
      </div>
    </Link>
  );
};
