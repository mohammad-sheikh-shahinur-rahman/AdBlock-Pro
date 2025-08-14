
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col items-center justify-center text-center">
          <Image
            src="https://www.bangla-kobita.com/images/up/1/pp29352-dYu.png"
            alt="Mohammad Sheikh Shahinur Rahman"
            width={100}
            height={100}
            className="rounded-full border-4 border-primary shadow-lg mb-4"
          />
          <h3 className="text-xl md:text-2xl font-bold text-primary">
            মোহাম্মদ শেখ শাহিনুর রহমান
          </h3>
          <p className="text-muted-foreground mt-2 max-w-2xl text-sm md:text-base px-2">
            কবি | লেখক | সফটওয়্যার ইঞ্জিনিয়ার | প্রোগ্রামার | ডিজিটাল ফরেনসিক বিশেষজ্ঞ | প্রযুক্তি উদ্ভাবক
          </p>
          <p className="text-xs md:text-sm text-muted-foreground mt-6">
            Privacy-first • No data collection • Developed with passion
          </p>
        </div>
      </div>
    </footer>
  );
}
