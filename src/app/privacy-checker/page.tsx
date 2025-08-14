import { PrivacyCheckerForm } from './privacy-checker-form';

export default function PrivacyCheckerPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">
            AI Privacy Checker
          </h1>
          <p className="mt-2 text-xl text-muted-foreground max-w-2xl mx-auto">
            Enter a website URL to get an AI-powered analysis of its privacy
            policy.
          </p>
        </div>
        <PrivacyCheckerForm />
      </div>
    </div>
  );
}