import { Button } from '@/components/ui/button';
import {
  DownloadCloud,
  Archive,
  Chrome,
  ToggleRight,
  FolderUp,
  CheckCircle,
  MousePointerClick,
  ChevronRight,
} from 'lucide-react';
import { InstructionStep } from '@/components/instruction-step';
import Link from 'next/link';
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
    description: 'Extract the contents of the ZIP file to a dedicated folder on your computer.',
    language: 'english',
  },
  {
    icon: <Chrome />,
    title: 'Open Extensions Page',
    description: (
      <>
        Launch Chrome and navigate to{' '}
        <code className="font-bold bg-muted p-1 rounded-sm">chrome://extensions/</code>
      </>
    ),
    language: 'english',
  },
  {
    icon: <ToggleRight />,
    title: 'Enable Developer Mode',
    description: 'Find the "Developer mode" toggle in the top-right corner and switch it on.',
    language: 'english',
  },
  {
    icon: <FolderUp />,
    title: 'Load the Extension',
    description: "Click 'Load unpacked' and select the folder where you extracted the extension files.",
    language: 'english',
  },
  {
    icon: <CheckCircle />,
    title: 'Installation Complete',
    description: 'AdBlock Pro is now installed and actively blocking ads for a cleaner web experience.',
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
    description: 'ZIP ফাইলের বিষয়বস্তু আপনার কম্পিউটারের একটি ডেডিকেটেড ফোল্ডারে এক্সট্র্যাক্ট করুন।',
    language: 'bangla',
  },
  {
    icon: <Chrome />,
    title: 'এক্সটেনশন পেজ খুলুন',
    description: (
      <>
        Chrome চালু করুন এবং এখানে নেভিগেট করুন{' '}
        <code className="font-bold bg-muted p-1 rounded-sm">chrome://extensions/</code>
      </>
    ),
    language: 'bangla',
  },
  {
    icon: <ToggleRight />,
    title: 'ডেভেলপার মোড চালু করুন',
    description: 'উপরের-ডান দিকের কোণায় "ডেভেলপার মোড" টগলটি খুঁজুন এবং এটি চালু করুন।',
    language: 'bangla',
  },
  {
    icon: <FolderUp />,
    title: 'এক্সটেনশন লোড করুন',
    description: "'লোড আনপ্যাকড'-এ ক্লিক করুন এবং যেখানে আপনি এক্সটেনশন ফাইলগুলো এক্সট্র্যাক্ট করেছেন সেই ফোল্ডারটি সিলেক্ট করুন।",
    language: 'bangla',
  },
  {
    icon: <CheckCircle />,
    title: 'ইনস্টলেশন সম্পন্ন',
    description: 'AdBlock Pro এখন ইনস্টল করা হয়েছে এবং একটি ক্লিনার ওয়েব অভিজ্ঞতার জন্য সক্রিয়ভাবে বিজ্ঞাপন ব্লক করছে।',
    language: 'bangla',
  },
];


export default function Home() {
  return (
    <>
    <section className="w-full py-20 md:py-32 lg:py-40 bg-card border-b">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-primary">
                  Experience a Cleaner, Faster Web with AdBlock Pro
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Follow our simple installation guide to block intrusive ads and enjoy a seamless browsing experience. It's free, fast, and easy.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                 <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg py-6 px-10 shadow-lg transition-transform transform hover:scale-105">
                    <a
                        href="https://drive.google.com/file/d/1NmdH7pVy57C10ImLD49otvIa_mVkVcS9/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <DownloadCloud className="mr-2 h-6 w-6" />
                        Download AdBlockPro.zip
                    </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                    <Link href="#instructions">
                        Installation Guide
                        <ChevronRight className="ml-2 h-5 w-5" />
                    </Link>
                </Button>
              </div>
            </div>
             <img
                src="https://placehold.co/600x400.png"
                width="600"
                height="400"
                alt="Hero"
                data-ai-hint="abstract geometric"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
            />
          </div>
        </div>
      </section>

    <section id="instructions" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                Installation Steps
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                How to Install AdBlock Pro
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Choose your preferred language and follow the step-by-step guide to get AdBlock Pro running in your Chrome browser.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-12 py-12 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">English</h3>
              <div className="grid gap-6">
                {instructions
                  .filter((inst) => inst.language === 'english')
                  .map((item, index) => (
                    <AnimatedListItem key={`en-${index}`}>
                      <InstructionStep
                        icon={item.icon}
                        title={item.title}
                        description={item.description}
                      />
                    </AnimatedListItem>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">বাংলা (Bangla)</h3>
                <div className="grid gap-6">
                    {instructions
                    .filter((inst) => inst.language === 'bangla')
                    .map((item, index) => (
                        <AnimatedListItem key={`bn-${index}`}>
                            <InstructionStep
                                icon={item.icon}
                                title={item.title}
                                description={item.description}
                            />
                        </AnimatedListItem>
                    ))}
                </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-card border-t">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Optimize Your Instructions
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Use our AI-powered tool to analyze and improve your instructional text for different languages and cultures.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <Button asChild size="lg">
              <Link href="/sentiment-analysis">
                Go to Sentiment Analysis Tool
                <MousePointerClick className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
