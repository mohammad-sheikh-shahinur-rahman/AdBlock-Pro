'use server';

import { z } from 'zod';
import { ai } from '../genkit';

const SentimentInputSchema = z.object({
  englishText: z.string(),
  banglaText: z.string(),
});

const SentimentOutputSchema = z.object({
  englishSentiment: z.string(),
  banglaSentiment: z.string(),
  adjustmentSuggestion: z.string(),
});

const sentimentAnalysisPrompt = ai.definePrompt({
  name: 'sentimentAnalysisPrompt',
  input: { schema: SentimentInputSchema },
  output: { schema: SentimentOutputSchema },
  prompt: `
    Analyze the sentiment of the following two sets of instructions for installing a Chrome extension. One is in English and the other is in Bangla.

    For each language, determine the sentiment (e.g., "Positive", "Neutral", "Negative", "Formal", "Encouraging", "Clear", "Confusing").

    Then, provide a brief suggestion on how to adjust the tone or wording to improve clarity and user trust, especially considering any differences in sentiment or cultural nuances between the English-speaking and Bengali-speaking audiences.

    English Instructions:
    ---
    {{{englishText}}}
    ---

    Bangla Instructions:
    ---
    {{{banglaText}}}
    ---

    Provide the output as a valid JSON object with the following keys: "englishSentiment", "banglaSentiment", "adjustmentSuggestion".
    - "englishSentiment": Your analysis of the English text's sentiment.
    - "banglaSentiment": Your analysis of the Bangla text's sentiment.
    - "adjustmentSuggestion": Your actionable suggestion for improvement.
  `,
  config: {
    temperature: 0.3,
  },
});

export const crossLingualSentiment = ai.defineFlow(
  {
    name: 'crossLingualSentiment',
    inputSchema: SentimentInputSchema,
    outputSchema: SentimentOutputSchema,
  },
  async (input) => {
    const { output } = await sentimentAnalysisPrompt(input);
    return (
      output || {
        englishSentiment: 'Analysis failed.',
        banglaSentiment: 'Analysis failed.',
        adjustmentSuggestion: 'Could not generate a suggestion.',
      }
    );
  }
);
