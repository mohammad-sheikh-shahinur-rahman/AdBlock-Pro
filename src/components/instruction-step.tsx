import type { LucideProps } from 'lucide-react';

interface InstructionStepProps {
  step: number;
  icon: React.ReactElement<LucideProps>;
  text: React.ReactNode;
}

export function InstructionStep({ step, icon, text }: InstructionStepProps) {
  return (
    <li className="flex items-start gap-4">
      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-bold font-headline text-primary">
          Step {step}
        </h3>
        <div className="text-muted-foreground mt-1 text-base">{text}</div>
      </div>
    </li>
  );
}
