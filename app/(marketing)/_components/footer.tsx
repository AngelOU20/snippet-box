import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';

export const FooterMarketing = () => {
  return (
    <div className="fixed bottom-0 w-full p-4 border-t bg-slate-100 text-neutral-500">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <p className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{' '}
          <a
            href="https://github.com/AngelOU20"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            Desarrollado por <span className="font-semibold">AngelOU20</span>
          </a>
        </p>
        <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
          <Button size="sm" variant="ghost">
            Privacy Policy
          </Button>
          <Button size="sm" variant="ghost">
            Terms of Service
          </Button>
        </div>
      </div>
    </div>
  );
};
