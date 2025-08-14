'use client';

import { useFormState, useFormStatus } from 'react-dom';
import React, { useEffect } from 'react';
import { analyzeSentimentAction, type SentimentState } from './actions';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Wand2, Loader2 } from 'lucide-react';

const initialState: SentimentState = {};

const englishPlaceholder = `Step 1: Download the ZIP file from the button above.
Step 2: Unzip the file to a folder on your computer.
Step 3: Open Chrome and go to chrome://extensions/
Step 4: Enable Developer mode (top-right toggle).
Step 5: Click 'Load unpacked' and select the folder with manifest.json.
Step 6: Your extension is installed and ready to use.`;

const banglaPlaceholder = `ধাপ ১: উপরের বাটন থেকে ZIP ফাইলটি ডাউনলোড করুন।
ধাপ ২: ZIP ফাইলটি একটি ফোল্ডারে আনজিপ করুন।
ধাপ ৩: Chrome ব্রাউজারে যান: chrome://extensions/
ধাপ ৪: ডানদিকে উপরের দিকে Developer mode চালু করুন।
ধাপ ৫: 'Load unpacked' বাটনে ক্লিক করুন এবং manifest.json ফাইল সহ ফোল্ডারটি সিলেক্ট করুন।
ধাপ ৬: আপনার এক্সটেনশন ইনস্টল হয়েছে এবং ব্যবহার করতে প্রস্তুত।`;


function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} size="lg" className="w-full bg-primary hover:bg-primary/90 font-bold">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          Analyzing...
        </>
      ) : (
        <>
         <Wand2 className="mr-2 h-5 w-5" />
          Analyze Sentiment
        </>
      )}
    </Button>
  );
}

export function SentimentForm() {
  const [state, formAction] = useFormState(analyzeSentimentAction, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: state.error,
      });
    }
  }, [state.error, toast]);

  return (
    <Card className="shadow-lg">
      <CardContent className="pt-6">
        <form action={formAction} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="englishText" className="text-lg font-headline">English Instructions</Label>
              <Textarea
                id="englishText"
                name="englishText"
                placeholder="Enter English instructions here..."
                rows={10}
                required
                defaultValue={englishPlaceholder}
                className="text-base"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="banglaText" className="text-lg font-headline">Bangla Instructions</Label>
              <Textarea
                id="banglaText"
                name="banglaText"
                placeholder="Enter Bangla instructions here..."
                rows={10}
                required
                defaultValue={banglaPlaceholder}
                className="text-base"
              />
            </div>
          </div>
          <SubmitButton />
        </form>

        {state.data && (
          <div className="mt-8 pt-6 border-t">
            <h2 className="text-2xl font-bold font-headline text-center mb-6">Analysis Results</h2>
            <div className="space-y-4">
                 <Card>
                    <CardHeader>
                      <CardTitle>Adjustment Suggestion</CardTitle>
                      <CardDescription>AI-powered recommendation to improve your text.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg">{state.data.adjustmentSuggestion}</p>
                    </CardContent>
                </Card>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card>
                        <CardHeader>
                        <CardTitle>English Sentiment</CardTitle>
                        </CardHeader>
                        <CardContent>
                        <p>{state.data.englishSentiment}</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                        <CardTitle>Bangla Sentiment</CardTitle>
                        </CardHeader>
                        <CardContent>
                        <p>{state.data.banglaSentiment}</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
