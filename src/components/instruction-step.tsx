import React from 'react';

interface InstructionStepProps {
  title: string;
  description: React.ReactNode;
  icon: React.ReactNode;
}

export function InstructionStep({
  title,
  description,
  icon,
}: InstructionStepProps) {
  return (
    <div className="flex flex-col sm:flex-row items-start gap-6">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
        {icon}
      </div>
      <div className="grid gap-1 pt-2">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-base text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
