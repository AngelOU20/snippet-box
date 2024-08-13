import { UserButton } from '@clerk/nextjs';

export default function Home() {
  return (
    <div className="h-full">
      <UserButton />
      <h1>Page</h1>
    </div>
  );
}
