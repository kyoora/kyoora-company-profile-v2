import { ContactUs } from '@/components/app/ContactUs';
import { FAQ } from '@/components/app/Faqs';
import { GetStarted } from '@/components/app/GetStarted';
import { Hero } from '@/components/app/Hero';
import { LearnMore } from '@/components/app/LearnMore';
import { OurServices } from '@/components/app/OurServices';

export default function Home() {
  return (
    <div className="">
      <main className="container mx-auto px-10 lg:px-20">
        <Hero />

        <GetStarted />

        <LearnMore />

        <OurServices />

        {/* <Blog /> */}

        <FAQ />

        <ContactUs />
      </main>
    </div>
  );
}
