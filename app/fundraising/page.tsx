export default function Home() {
  return (
    <div className="">
      <main className="container mx-auto px-10 lg:px-20">
        <div className="w-full">
          <div className="container mx-auto">
            <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
              <div className="flex gap-4 flex-col">
                <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
                  Fundraising
                </h1>

                <h3 className="text-2xl md:text-3xl max-w-2xl tracking-wide text-center font-regular mt-8">
                  {/* Fundraising Page */}
                  Our Fundraising Campaign is Coming Soon
                </h3>
                <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
                  We are excited to announce our upcoming fundraising campaign. Your support will
                  play a crucial role in shaping the future of our organization. Join us in making a
                  difference and be a part of this incredible journey. Thank you for your interest
                  in our fundraising campaign. Your support will be greatly appreciated.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
