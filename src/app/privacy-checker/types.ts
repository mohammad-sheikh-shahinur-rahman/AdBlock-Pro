import { z } from 'zod';

export const PrivacyCheckerInputSchema = z.object({
  url: z.string().url(),
});
export type PrivacyCheckerInput = z.infer<typeof PrivacyCheckerInputSchema>;


export const PrivacyCheckerOutputSchema = z.object({
  privacyScore: z.number().min(0).max(100).describe("A score from 0-100 indicating how privacy-friendly the site is. Higher is better."),
  summary: z.string().describe("A concise, easy-to-understand summary of the website's privacy policy and practices."),
  concerns: z.array(z.string()).describe("A list of potential privacy concerns or red flags."),
});

export type PrivacyCheckerOutput = z.infer<typeof PrivacyCheckerOutputSchema>;


export interface PrivacyCheckerState {
  data?: PrivacyCheckerOutput;
  error?: string;
}
