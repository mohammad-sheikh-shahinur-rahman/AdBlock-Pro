import React from 'react';
import type { LucideProps } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';

interface InstructionStepProps {
  icon: React.ReactElement<LucideProps>;
  title: string;
  description: React.ReactNode;
}

export function InstructionStep({ icon, title, description }: InstructionStepProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
        {React.cloneElement(icon, { className: 'h-6 w-6' })}
      </div>
      <div className="grid gap-1">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
