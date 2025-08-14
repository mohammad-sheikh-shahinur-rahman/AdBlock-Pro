import { Button } from '@/components/ui/button';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import {
  DownloadCloud,
  Archive,
  Chrome,
  ToggleRight,
  FolderUp,
  CheckCircle,
} from 'lucide-react';
import { InstructionStep } from '@/components/instruction-step';

const englishInstructions = [
  {
    icon: <DownloadCloud className="h-6 w-6" />,
    text: 'Download the ZIP file from the button above.',
  },
  {
    icon: <Archive className="h-6 w-6" />,
    text: 'Unzip the file to a folder on your computer.',
  },
  {
    icon: <Chrome className="h-6 w-6" />,
    text: (
      <>
        Open Chrome and go to{' '}
        <code className="font-bold">chrome://extensions/</code>
      </>
    ),
  },
  {
    icon: <ToggleRight className="h-6 w-6" />,
    text: 'Enable Developer mode (top-right toggle).',
  },
  {
    icon: <FolderUp className="h-6 w-6" />,
    text: "Click 'Load unpacked' and select the folder with manifest.json.",
  },
  {
    icon: <CheckCircle className="h-6 w-6" />,
    text: 'Your extension is installed and ready to use.',
  },
];

const banglaInstructions = [
  {
    icon: <DownloadCloud className="h-6 w-6" />,
    text: 'উপরের বাটন থেকে ZIP ফাইলটি ডাউনলোড করুন।',
  },
  {
    icon: <Archive className="h-6 w-6" />,
    text: 'ZIP ফাইলটি একটি ফোল্ডারে আনজিপ করুন।',
  },
  {
    icon: <Chrome className="h-6 w-6" />,
    text: (
      <>
        Chrome ব্রাউজারে যান:{' '}
        <code className="font-bold">chrome://extensions/</code>
      </>
    ),
  },
  {
    icon: <ToggleRight className="h-6 w-6" />,
    text: 'ডানদিকে উপরের দিকে Developer mode চালু করুন।',
  },
  {
    icon: <FolderUp className="h-6 w-6" />,
    text: "'Load unpacked' বাটনে ক্লিক করুন এবং manifest.json ফাইল সহ ফোল্ডারটি সিলেক্ট করুন।",
  },
  {
    icon: <CheckCircle className="h-6 w-6" />,
    text: 'আপনার এক্সটেনশন ইনস্টল হয়েছে এবং ব্যবহার করতে প্রস্তুত।',
  },
];

export default function Home() {
  return (
    <div className="container mx-auto max-w-4xl py-12 px-4">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">
          AdBlock Pro
        </h1>
        <p className="mt-2 text-xl text-muted-foreground">
          Chrome Extension Install Guide
        </p>
        <p className="mt-6 max-w-2xl mx-auto">
          Follow these simple steps to install the AdBlock Pro extension and enjoy a cleaner, faster browsing experience.
        </p>

        <Button asChild size="lg" className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg py-6 px-10 shadow-lg transition-transform transform hover:scale-105">
          <a
            href="https://drive.google.com/file/d/1NmdH7pVy57C10ImLD49otvIa_mVkVcS9/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <DownloadCloud className="mr-2 h-6 w-6" />
            Download AdBlockPro.zip
          </a>
        </Button>
      </div>

      <Tabs defaultValue="english" className="w-full mt-12">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="english">English</TabsTrigger>
          <TabsTrigger value="bangla">বাংলা (Bangla)</TabsTrigger>
        </TabsList>
        <TabsContent value="english">
            <ul className="space-y-8 mt-8">
              {englishInstructions.map((item, index) => (
                <InstructionStep
                  key={index}
                  step={index + 1}
                  icon={item.icon}
                  text={item.text}
                />
              ))}
            </ul>
        </TabsContent>
        <TabsContent value="bangla">
            <ul className="space-y-8 mt-8">
              {banglaInstructions.map((item, index) => (
                <InstructionStep
                  key={index}
                  step={index + 1}
                  icon={item.icon}
                  text={item.text}
                />
              ))}
            </ul>
        </TabsContent>
      </Tabs>
    </div>
  );
}
