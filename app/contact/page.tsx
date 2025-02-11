import { ContactUs } from '@/components/app/ContactUs';

export default function Home() {
  return (
    <div className="">
      <main className="container mx-auto px-10 lg:px-20">
        <div className="w-full">
          <div className="container mx-auto">
            <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
              <div className="flex gap-4 flex-col">
                <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
                  Contact
                </h1>
              </div>
              <ContactUs />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
