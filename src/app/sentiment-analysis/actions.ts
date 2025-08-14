'use server';

import { z } from 'zod';
import { analyzeSentiment } from '@/ai/flows/sentiment';

const sentimentSchema = z.object({
  englishText: z.string().min(10, { message: 'English text must be at least 10 characters.' }),
  banglaText: z.string().min(10, { message: 'Bangla text must be at least 10 characters.' }),
});

export interface SentimentState {
  data?: {
    englishSentiment: string;
    banglaSentiment: string;
    adjustmentSuggestion: string;
  };
  error?: string;
}

export async function analyzeSentimentAction(
  prevState: SentimentState,
  formData: FormData
): Promise<SentimentState> {
  const validatedFields = sentimentSchema.safeParse({
    englishText: formData.get('englishText'),
    banglaText: formData.get('banglaText'),
  });

  if (!validatedFields.success) {
    const errorMessage = Object.values(validatedFields.error.flatten().fieldErrors)
      .flat()
      .join(' ');
    return {
      error: errorMessage || 'Invalid input.',
    };
  }

  try {
    const result = await analyzeSentiment(validatedFields.data);
    return { data: result };
  } catch (e: any) {
    console.error(e);
    return {
      error: 'An error occurred during analysis. Please try again.',
    };
  }
}
