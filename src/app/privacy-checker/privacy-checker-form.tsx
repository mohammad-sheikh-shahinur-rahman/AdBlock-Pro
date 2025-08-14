'use client';

import React, { useEffect } from 'react';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import Link from 'next/link';
import { checkPrivacyAction } from './actions';
import type { PrivacyCheckerState } from './types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import {
  Loader2,
  AlertTriangle,
  DownloadCloud,
  Chrome,
  ToggleRight,
  FolderUp,
  CheckCircle,
  Archive,
  ArrowRight,
  Shield,
  FileText,
   Languages,
} from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { InstructionStep } from '@/components/instruction-step';
import { AnimatedListItem } from '@/components/animated-list-item';

const instructions = [
  {
    icon: <DownloadCloud />,
    title: 'Download the Extension',
    description: 'Click the button above to download the AdBlockPro.zip file.',
    language: 'english',
  },
  {
    icon: <Archive />,
    title: 'Unzip the File',
    description:
      'Extract the contents of the ZIP file to a dedicated folder on your computer.',
    language: 'english',
  },
  {
    icon: <Chrome />,
    title: 'Open Extensions Page',
    description: (
      <>
        Launch Chrome and navigate to{' '}
        <code className="font-bold bg-muted p-1 rounded-sm">
          chrome://extensions/
        </code>
      </>
    ),
    language: 'english',
  },
  {
    icon: <ToggleRight />,
    title: 'Enable Developer Mode',
    description:
      'Find the "Developer mode" toggle in the top-right corner and switch it on.',
    language: 'english',
  },
  {
    icon: <FolderUp />,
    title: 'Load the Extension',
    description:
      "Click 'Load unpacked' and select the folder where you extracted the extension files.",
    language: 'english',
  },
  {
    icon: <CheckCircle />,
    title: 'Installation Complete',
    description:
      'AdBlock Pro is now installed and actively blocking ads for a cleaner web experience.',
    language: 'english',
  },
  {
    icon: <DownloadCloud />,
    title: 'এক্সটেনশন ডাউনলোড করুন',
    description: 'AdBlockPro.zip ফাইলটি ডাউনলোড করতে উপরের বাটনে ক্লিক করুন।',
    language: 'bangla',
  },
  {
    icon: <Archive />,
    title: 'ফাইলটি আনজিপ করুন',
    description:
      'ZIP ফাইলের বিষয়বস্তু আপনার কম্পিউটারের একটি ডেডিকেটেড ফোল্ডারে এক্সট্র্যাক্ট করুন।',
    language: 'bangla',
  },
  {
    icon: <Chrome />,
    title: 'এক্সটেনশন পেজ খুলুন',
    description: (
      <>
        Chrome চালু করুন এবং এখানে নেভিগেট করুন{' '}
        <code className="font-bold bg-muted p-1 rounded-sm">
          chrome://extensions/
        </code>
      </>
    ),
    language: 'bangla',
  },
  {
    icon: <ToggleRight />,
    title: 'ডেভেলপার মোড চালু করুন',
    description:
      'উপরের-ডান দিকের কোণায় "ডেভেলপার মোড" টগলটি খুঁজুন এবং এটি চালু করুন।',
    language: 'bangla',
  },
  {
    icon: <FolderUp />,
    title: 'এক্সটেনশন লোড করুন',
    description:
      "'লোড আনপ্যাকড'-এ ক্লিক করুন এবং যেখানে আপনি এক্সটেনশন ফাইলগুলো এক্সট্র্যাক্ট করেছেন সেই ফোল্ডারটি সিলেক্ট করুন।",
    language: 'bangla',
  },
  {
    icon: <CheckCircle />,
    title: 'ইনস্টলেশন সম্পন্ন',
    description:
      'AdBlock Pro এখন ইনস্টল করা হয়েছে এবং একটি ক্লিনার ওয়েব অভিজ্ঞতার জন্য সক্রিয়ভাবে বিজ্ঞাপন ব্লক করছে।',
    language: 'bangla',
  },
];

const initialState: PrivacyCheckerState = {};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      disabled={pending}
      size="lg"
      className="w-full sm:w-auto bg-primary hover:bg-primary/90 font-bold"
    >
      {pending ? (
        <>
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          Analyzing...
        </>
      ) : (
        <>
          Check Privacy
          <ArrowRight className="ml-2 h-5 w-5" />
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

  return (
    <>
      <section className="w-full py-20 md:py-32 lg:py-40 bg-card border-b">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-primary">
                  Browse Freely with AdBlock Pro
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Take control of your online experience. Download our free
                  Chrome extension to block ads, stop trackers, and enjoy a
                  faster, cleaner web.
                </p>
              </div>
              <div className="flex flex-col gap-4 min-[400px]:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg py-6 px-10 shadow-lg transition-transform transform hover:scale-105"
                >
                  <a
                    href="https://minhazul-islam-santo.github.io/adblockpro/AdBlockPro.zip"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <DownloadCloud className="mr-2 h-6 w-6" />
                    Download for Chrome
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="#instructions">
                    Installation Guide
                  </Link>
                </Button>
              </div>
            </div>
            <img
              src="https://i.ibb.co/rGx3s29b/Ad-Block-Pro.png"
              width="600"
              height="400"
              alt="Hero"
              data-ai-hint="abstract privacy"
              className="mx-auto aspect-[4/3] overflow-hidden rounded-xl object-cover"
            />
          </div>
        </div>
      </section>

      <section id="privacy-checker" className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-4">
               <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                AI-Powered Tool
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Check Any Website's Privacy
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Enter a website URL to get an instant, AI-powered analysis of its privacy policy. Understand how your data is being used.
              </p>
            </div>
          </div>
          <div className="mx-auto w-full max-w-2xl pt-12">
             <Card className="shadow-lg">
                <CardContent className="pt-6">
                  <form action={formAction} className="flex flex-col sm:flex-row items-center gap-4">
                    <div className="w-full flex-1">
                      <Input
                        id="url"
                        name="url"
                        placeholder="https://example.com"
                        required
                        type="url"
                        className="text-base h-12"
                      />
                    </div>
                    <SubmitButton />
                  </form>

                  {state.data && (
                    <div className="mt-8 pt-6 border-t">
                      <h2 className="text-2xl font-bold text-center mb-6">
                        Analysis Results
                      </h2>
                      <div className="grid gap-6">
                        <Card>
                          <CardHeader className="flex flex-row items-center justify-between pb-2">
                             <CardTitle className="flex items-center gap-2"><Shield /> Privacy Score</CardTitle>
                              <span className="text-2xl font-bold text-primary">{state.data.privacyScore}/100</span>
                          </CardHeader>
                          <CardContent>
                            <Progress
                              value={state.data.privacyScore}
                              className="h-3"
                            />
                            <p className="text-xs text-muted-foreground mt-2">A higher score indicates better privacy practices.</p>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardHeader>
                            <CardTitle  className="flex items-center gap-2"><FileText /> AI Summary</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-base leading-relaxed">
                              {state.data.summary}
                            </p>
                          </CardContent>
                        </Card>
                        {state.data.concerns &&
                          state.data.concerns.length > 0 && (
                            <Card>
                              <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                  <AlertTriangle className="text-destructive" />{' '}
                                  Potential Concerns
                                </CardTitle>
                              </CardHeader>
                              <CardContent>
                                <ul className="list-disc pl-5 space-y-2">
                                  {state.data.concerns.map((concern, index) => (
                                    <li key={index} className="text-base">
                                      {concern}
                                    </li>
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
          </div>
        </div>
      </section>
      
      <section id="instructions" className="w-full py-12 md:py-24 lg:py-32 border-t">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                Installation
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Easy 6-Step Installation
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Get AdBlock Pro up and running in minutes. Follow our simple
                guide for Chrome.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-4xl pt-12">
            <Tabs defaultValue="english" className="w-full">
               <TabsList className="grid w-full grid-cols-2">
                 <TabsTrigger value="english" className="flex items-center gap-2"><Languages /> English</TabsTrigger>
                 <TabsTrigger value="bangla" className="flex items-center gap-2"><Languages /> বাংলা (Bangla)</TabsTrigger>
              </TabsList>
              <TabsContent value="english">
                <Card>
                  <CardContent className="p-6">
                    <div className="grid gap-8">
                      {instructions
                        .filter((inst) => inst.language === 'english')
                        .map((item, index) => (
                          <AnimatedListItem key={`en-${index}`}>
                            <InstructionStep
                              icon={item.icon}
                              title={item.title}
                              description={item.description}
                              step={index + 1}
                            />
                          </AnimatedListItem>
                        ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="bangla">
                <Card>
                  <CardContent className="p-6">
                    <div className="grid gap-8">
                      {instructions
                        .filter((inst) => inst.language === 'bangla')
                        .map((item, index) => (
                          <AnimatedListItem key={`bn-${index}`}>
                            <InstructionStep
                              icon={item.icon}
                              title={item.title}
                              description={item.description}
                              step={index + 1}
                            />
                          </AnimatedListItem>
                        ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </>
  );
}
