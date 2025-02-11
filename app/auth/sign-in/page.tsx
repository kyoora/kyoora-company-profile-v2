import Link from 'next/link';

export default function Home() {
  return (
    <div className="">
      <main className="container mx-auto px-10 lg:px-20">
        <div className="w-full">
          <div className="container mx-auto">
            <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
              <div className="flex gap-4 flex-col">
                <h1 className="text-5xl md:text-7xl tracking-tighter text-center font-regular">
                  This page is on working
                </h1>
                <p>
                  <Link href="/">Go back</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
