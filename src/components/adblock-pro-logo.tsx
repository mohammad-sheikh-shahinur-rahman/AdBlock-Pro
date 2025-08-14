import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

const AdBlockProLogo = ({ className }: { className?: string }) => {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <Image
        src="https://i.ibb.co/rGx3s29b/Ad-Block-Pro.png"
        alt="AdBlock Pro Logo"
        width={140}
        height={40}
        className="h-10 w-auto"
      />
    </div>
  );
};

export default AdBlockProLogo;
