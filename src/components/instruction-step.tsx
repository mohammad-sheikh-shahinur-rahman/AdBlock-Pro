import React from 'react';
import type { LucideProps } from 'lucide-react';

interface InstructionStepProps {
  icon: React.ReactElement<LucideProps>;
  title: string;
  description: React.ReactNode;
  step: number;
}

export function InstructionStep({
  icon,
  title,
  description,
  step,
}: InstructionStepProps) {
  return (
    <div className="flex items-start gap-6">
      <div className="flex flex-col items-center">
        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-xl">
          {step}
        </div>
        <div className="mt-2 text-primary">{React.cloneElement(icon, { className: 'h-6 w-6' })}</div>
      </div>
      <div className="grid gap-1">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-base text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}