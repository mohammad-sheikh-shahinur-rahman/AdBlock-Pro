'use server';
import {ai} from '@/ai/genkit';
import {z} from 'genkit/zod';

export const PrivacyCheckerInputSchema = z.object({
  url: z.string().url(),
});

export const PrivacyCheckerOutputSchema = z.object({
  privacyScore: z.number().min(0).max(100).describe("A score from 0-100 indicating how privacy-friendly the site is. Higher is better."),
  summary: z.string().describe("A concise, easy-to-understand summary of the website's privacy policy and practices."),
  concerns: z.array(z.string()).describe("A list of potential privacy concerns or red flags."),
});

export type PrivacyCheckerOutput = z.infer<typeof PrivacyCheckerOutputSchema>;

const privacyCheckPrompt = ai.definePrompt({
    name: 'privacyCheckPrompt',
    input: { schema: PrivacyCheckerInputSchema },
    output: { schema: PrivacyCheckerOutputSchema },
    prompt: `
      You are a privacy expert. Analyze the privacy policy and general privacy practices of the website at the given URL: {{{url}}}.

      Based on your analysis, provide a privacy score from 0 to 100, where 100 is excellent privacy and 0 is very poor privacy.

      Then, write a clear, concise summary that a non-technical user can understand. Highlight the key points about what data is collected, how it's used, and who it's shared with.

      Finally, list any specific concerns or red flags you've identified, such as vague language, extensive data collection, or sharing with third parties for advertising. If there are no major concerns, you can return an empty array.
    `,
    config: {
        temperature: 0.2,
    }
});

const privacyCheckerFlow = ai.defineFlow(
  {
    name: 'privacyCheckerFlow',
    inputSchema: PrivacyCheckerInputSchema,
    outputSchema: PrivacyCheckerOutputSchema,
  },
  async (input) => {
    const { output } = await privacyCheckPrompt(input);
    if (!output) {
      throw new Error('Analysis failed. The model did not return an output.');
    }
    return output;
  }
);

export async function checkPrivacy(url: string): Promise<PrivacyCheckerOutput> {
  return await privacyCheckerFlow({ url });
}
