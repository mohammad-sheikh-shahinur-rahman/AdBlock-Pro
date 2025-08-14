import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

const AdBlockProLogo = ({ className }: { className?: string }) => {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <Image
        src="https://iili.io/FDx3Pe4.png"
        alt="AdBlock Pro Logo"
        width={140}
        height={40}
        className="h-10 w-auto"
        priority
      />
    </div>
  );
};

export default AdBlockProLogo;
