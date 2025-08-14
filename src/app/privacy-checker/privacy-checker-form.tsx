'use client';

import React, { useEffect } from 'react';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { checkPrivacyAction, type PrivacyCheckerState } from './actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { ShieldCheck, Loader2, AlertTriangle } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const initialState: PrivacyCheckerState = {};

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
         <ShieldCheck className="mr-2 h-5 w-5" />
          Check Privacy
        </>
      )}
    </Button>
  );
}

export function PrivacyCheckerForm() {
  const [state, formAction] = useActionState(checkPrivacyAction, initialState);
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

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'bg-green-500';
    if (score >= 60) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <Card className="shadow-lg">
      <CardContent className="pt-6">
        <form action={formAction} className="space-y-4">
          <div className="space-y-2">
              <Label htmlFor="url" className="text-lg font-headline">Website URL</Label>
              <Input
                id="url"
                name="url"
                placeholder="https://example.com"
                required
                type="url"
                className="text-base"
              />
            </div>
          <SubmitButton />
        </form>

        {state.data && (
          <div className="mt-8 pt-6 border-t">
            <h2 className="text-2xl font-bold font-headline text-center mb-6">Analysis Results</h2>
            <div className="space-y-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Privacy Score: {state.data.privacyScore} / 100</CardTitle>
                        <CardDescription>A higher score indicates better privacy practices.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Progress value={state.data.privacyScore} className="h-4" />
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                      <CardTitle>AI Summary</CardTitle>
                      <CardDescription>An easy-to-understand summary of the privacy policy.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-base leading-relaxed">{state.data.summary}</p>
                    </CardContent>
                </Card>
                {state.data.concerns && state.data.concerns.length > 0 && (
                    <Card>
                        <CardHeader>
                        <CardTitle className="flex items-center gap-2"><AlertTriangle className="text-destructive" /> Potential Concerns</CardTitle>
                        <CardDescription>Key issues or red flags found in the analysis.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="list-disc pl-5 space-y-2">
                                {state.data.concerns.map((concern, index) => (
                                    <li key={index} className="text-base">{concern}</li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
