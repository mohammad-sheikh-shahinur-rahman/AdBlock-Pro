'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';
import AdBlockProLogo from '@/components/adblock-pro-logo';

export function Header() {
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '#features', label: 'Features' },
    { href: '#privacy-checker', label: 'Privacy Checker' },
  ];

  return (
    <header className="bg-card border-b sticky top-0 z-50">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <AdBlockProLogo className="text-primary" />
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
             <Link
              key={link.href}
              href={link.href}
              className={cn(
                'transition-colors hover:text-primary',
                pathname === link.href ? 'text-primary' : 'text-muted-foreground'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
           <Button asChild>
                <a
                    href="https://minhazul-islam-santo.github.io/adblockpro/AdBlockPro.zip"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Download Now
                </a>
            </Button>
        </div>
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                    <Menu />
                    <span className="sr-only">Toggle Menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="right">
                 <nav className="grid gap-6 text-lg font-medium mt-10">
                    {navLinks.map((link) => (
                        <Link
                        key={link.href}
                        href={link.href}
                        className={cn(
                            'transition-colors hover:text-primary',
                            pathname === link.href ? 'text-primary' : 'text-muted-foreground'
                        )}
                        >
                        {link.label}
                        </Link>
                    ))}
                 </nav>
                 <div className="mt-6">
                    <Button asChild className="w-full">
                        <a
                            href="https://minhazul-islam-santo.github.io/adblockpro/AdBlockPro.zip"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Download Now
                        </a>
                    </Button>
                 </div>
            </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
