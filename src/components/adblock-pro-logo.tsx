import { cn } from '@/lib/utils';
import React from 'react';

const AdBlockProLogo = ({ className }: { className?: string }) => {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
      >
        <path
          d="M16 29.3333C16 29.3333 26.6667 24 26.6667 16V6.66666L16 2.66666L5.33333 6.66666V16C5.33333 24 16 29.3333 16 29.3333Z"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.3333 16L14.6667 19.3333L21.3333 12.6667"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="text-2xl font-bold font-headline">AdBlock Pro</span>
    </div>
  );
};

export default AdBlockProLogo;