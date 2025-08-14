import { SentimentForm } from './sentiment-form';

export default function SentimentAnalysisPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">
                Cross-Lingual Sentiment Tool
            </h1>
            <p className="mt-2 text-xl text-muted-foreground max-w-2xl mx-auto">
                Generate an AI-based sentiment analysis of instructions to adjust for language and cultural nuances.
            </p>
        </div>
        <SentimentForm />
      </div>
    </div>
  );
}
