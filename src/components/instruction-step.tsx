import React from 'react';
import Image from 'next/image';

interface InstructionStepProps {
  title: string;
  description: React.ReactNode;
  icon: React.ReactNode;
  imageUrl?: string;
  showImage?: boolean;
}

export function InstructionStep({
  title,
  description,
  icon,
  imageUrl,
  showImage = true,
}: InstructionStepProps) {
  return (
    <div className="flex flex-col sm:flex-row items-start gap-6">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground flex-shrink-0">
        {icon}
      </div>
      <div className="grid gap-1 pt-2 flex-1">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-base text-muted-foreground">{description}</p>
        {showImage && imageUrl && (
           <div className="mt-4">
            <Image
              src={imageUrl}
              alt={title}
              width={500}
              height={300}
              className="rounded-lg object-cover w-full"
            />
          </div>
        )}
      </div>
    </div>
  );
}
