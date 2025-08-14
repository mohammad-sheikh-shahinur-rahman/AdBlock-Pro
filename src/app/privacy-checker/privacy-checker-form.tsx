'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  DownloadCloud,
  ArrowRight,
  Zap,
  ShieldCheck,
  Ban,
  ArchiveRestore,
  ToggleRight,
  Upload,
  CheckCircle,
  Puzzle,
  Languages,
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { InstructionStep } from '@/components/instruction-step';
import { AnimatedListItem } from '@/components/animated-list-item';

const features = [
  {
    title: 'Block Annoying Ads',
    description:
      'Enjoy a cleaner web by blocking all types of ads, including pop-ups, banners, and video ads.',
    language: 'english',
    icon: <Ban />,
  },
  {
    title: 'Enhanced Privacy Protection',
    description:
      'Stop trackers from following you across the web and collecting your personal data.',
    language: 'english',
    icon: <ShieldCheck />,
  },
  {
    title: 'Faster Page Loading',
    description:
      'Experience a faster web by preventing heavy ad scripts and trackers from loading.',
    language: 'english',
    icon: <Zap />,
  },
  {
    title: 'বিরক্তিকর বিজ্ঞাপন ব্লক করুন',
    description:
      'পপ-আপ, ব্যানার এবং ভিডিও বিজ্ঞাপন সহ সব ধরণের বিজ্ঞাপন ব্লক করে একটি পরিচ্ছন্ন ওয়েব উপভোগ করুন।',
    language: 'bangla',
    icon: <Ban />,
  },
  {
    title: 'উন্নত গোপনীয়তা সুরক্ষা',
    description:
      'ট্র্যাকারদের ওয়েবে আপনাকে অনুসরণ করা এবং আপনার ব্যক্তিগত তথ্য সংগ্রহ করা থেকে বিরত রাখুন।',
    language: 'bangla',
    icon: <ShieldCheck />,
  },
  {
    title: 'দ্রুত পেজ লোডিং',
    description:
      'ভারী বিজ্ঞাপনের স্ক্রিপ্ট এবং ট্র্যাকার লোড হওয়া প্রতিরোধ করে একটি দ্রুত ওয়েব অভিজ্ঞতা অর্জন করুন।',
    language: 'bangla',
    icon: <Zap />,
  },
];

const installationSteps = [
  {
    icon: <DownloadCloud />,
    title: 'Download the Extension',
    description:
      "Click the 'Download for Chrome' button to get the AdBlockPro.zip file.",
    language: 'english',
  },
  {
    icon: <ArchiveRestore />,
    title: 'Unzip the File',
    description:
      'Extract the contents of the ZIP file to a folder on your computer.',
    language: 'english',
  },
  {
    icon: <Puzzle />,
    title: 'Open Extensions Page',
    description:
      'In Chrome, go to chrome://extensions or Menu > Extensions > Manage Extensions.',
    language: 'english',
  },
  {
    icon: <ToggleRight />,
    title: 'Enable Developer Mode',
    description:
      "Turn on the 'Developer mode' toggle, usually in the top-right corner.",
    language: 'english',
  },
  {
    icon: <Upload />,
    title: 'Load Unpacked',
    description:
      "Click 'Load unpacked' and select the folder where you extracted the extension files.",
    language: 'english',
  },
  {
    icon: <CheckCircle />,
    title: 'Installation Complete',
    description: 'AdBlock Pro is now installed and actively blocking ads.',
    language: 'english',
  },
  {
    icon: <DownloadCloud />,
    title: 'এক্সটেনশন ডাউনলোড করুন',
    description:
      "AdBlockPro.zip ফাইলটি পেতে 'Download for Chrome' বোতামে ক্লিক করুন।",
    language: 'bangla',
  },
  {
    icon: <ArchiveRestore />,
    title: 'ফাইলটি আনজিপ করুন',
    description:
      'আপনার কম্পিউটারের একটি ফোল্ডারে ZIP ফাইলের বিষয়বস্তু এক্সট্র্যাক্ট করুন।',
    language: 'bangla',
  },
  {
    icon: <Puzzle />,
    title: 'এক্সটেনশন পেজ খুলুন',
    description:
      'Chrome-এ, chrome://extensions এ যান অথবা Menu > Extensions > Manage Extensions এ যান।',
    language: 'bangla',
  },
  {
    icon: <ToggleRight />,
    title: 'ডেভেলপার মোড চালু করুন',
    description:
      "সাধারণত উপরের-ডানদিকের কোণায় থাকা 'Developer mode' টগলটি চালু করুন।",
    language: 'bangla',
  },
  {
    icon: <Upload />,
    title: 'লোড আনপ্যাকড',
    description:
      "'Load unpacked' এ ক্লিক করুন এবং যে ফোল্ডারে এক্সটেনশন ফাইলগুলো এক্সট্র্যাক্ট করেছেন তা নির্বাচন করুন।",
    language: 'bangla',
  },
  {
    icon: <CheckCircle />,
    title: 'ইনস্টলেশন সম্পন্ন',
    description: 'AdBlock Pro এখন ইনস্টল করা হয়েছে এবং সক্রিয়ভাবে বিজ্ঞাপন ব্লক করছে।',
    language: 'bangla',
  },
];

export function PrivacyCheckerForm() {
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
                  <Link href="#features">
                    Key Features
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
            <Image
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

      <section id="features" className="w-full py-12 md:py-24 lg:py-32 border-t">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                Features
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Key Features of AdBlock Pro
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover the benefits of using AdBlock Pro for a seamless
                browsing experience.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-4xl pt-12">
            <Tabs defaultValue="english" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="english" className="flex items-center gap-2">
                  <Languages /> English
                </TabsTrigger>
                <TabsTrigger value="bangla" className="flex items-center gap-2">
                  <Languages /> বাংলা (Bangla)
                </TabsTrigger>
              </TabsList>
              <TabsContent value="english">
                <Card>
                  <CardContent className="p-6">
                    <div className="grid gap-8">
                      {features
                        .filter((inst) => inst.language === 'english')
                        .map((item, index) => (
                          <AnimatedListItem key={`en-${index}`}>
                            <InstructionStep
                              title={item.title}
                              description={item.description}
                              icon={item.icon}
                              showImage={false}
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
                      {features
                        .filter((inst) => inst.language === 'bangla')
                        .map((item, index) => (
                          <AnimatedListItem key={`bn-${index}`}>
                            <InstructionStep
                              title={item.title}
                              description={item.description}
                              icon={item.icon}
                              showImage={false}
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

      <section
        id="installation-guide"
        className="w-full py-12 md:py-24 lg:py-32 bg-background border-t"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                Installation
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                AdBlock Pro — Chrome Extension Install Guide
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Follow these simple steps to install the AdBlock Pro extension
                in your Chrome browser.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-4xl pt-12">
            <Tabs defaultValue="english" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="english" className="flex items-center gap-2">
                  <Languages /> English
                </TabsTrigger>
                <TabsTrigger value="bangla" className="flex items-center gap-2">
                  <Languages /> বাংলা (Bangla)
                </TabsTrigger>
              </TabsList>
              <TabsContent value="english">
                <Card>
                  <CardContent className="p-6">
                    <div className="grid gap-8">
                      {installationSteps
                        .filter((step) => step.language === 'english')
                        .map((step, index) => (
                          <AnimatedListItem key={`install-en-${index}`}>
                            <InstructionStep
                              title={step.title}
                              description={step.description}
                              icon={step.icon}
                              showImage={false}
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
                      {installationSteps
                        .filter((step) => step.language === 'bangla')
                        .map((step, index) => (
                          <AnimatedListItem key={`install-bn-${index}`}>
                            <InstructionStep
                              title={step.title}
                              description={step.description}
                              icon={step.icon}
                              showImage={false}
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
