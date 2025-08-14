import React from 'react';
import Image from 'next/image';

interface InstructionStepProps {
  image?: string;
  title: string;
  description: React.ReactNode;
  icon: React.ReactNode;
}

export function InstructionStep({
  image,
  title,
  description,
  icon,
}: InstructionStepProps) {
  return (
    <div className="flex flex-col sm:flex-row items-start gap-6">
      <div className="flex-shrink-0">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-xl mb-4">
          {icon}
        </div>
        {image && (
          <Image
            src={image}
            alt={title}
            width={200}
            height={150}
            className="rounded-lg object-cover shadow-md"
          />
        )}
      </div>
      <div className="grid gap-1 pt-2">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-base text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
