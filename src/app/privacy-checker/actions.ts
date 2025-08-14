'use server';

import { z } from 'zod';
import { checkPrivacy, type PrivacyCheckerOutput } from '@/ai/flows/privacy-checker';

const privacySchema = z.object({
  url: z.string().url({ message: 'Please enter a valid URL.' }),
});

export interface PrivacyCheckerState {
  data?: PrivacyCheckerOutput;
  error?: string;
}

export async function checkPrivacyAction(
  prevState: PrivacyCheckerState,
  formData: FormData
): Promise<PrivacyCheckerState> {
  const validatedFields = privacySchema.safeParse({
    url: formData.get('url'),
  });

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors.url?.join(' ') || 'Invalid URL.',
    };
  }

  try {
    const result = await checkPrivacy(validatedFields.data.url);
    return { data: result };
  } catch (e: any) {
    console.error(e);
    return {
      error: 'An error occurred during analysis. The website may be inaccessible or have a non-standard privacy policy.',
    };
  }
}
