import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';
import Image from 'next/image';

export const GetStarted = () => (
  <section className="w-full py-20 lg:py-20" id="get-started">
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row gap-10 lg:items-center">
        <div className="flex gap-4 flex-col flex-1">
          <div>
            <Badge>Get Started</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-xl md:text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular text-left">
              Ready to Transform Your Idea Into Reality?
            </h2>
            <p className="text-lg max-w-xl lg:max-w-sm leading-relaxed tracking-tight text-muted-foreground text-left">
              Let’s take the first step together. Share your vision with us, and our team will work
              closely with you to craft a tailored solution that meets your needs. Whether it’s a
              custom website or a mobile app, we’re here to turn your goals into a successful
              product.
            </p>
            <div className="grid lg:pl-6 grid-cols-1 sm:grid-cols-3 items-start lg:grid-cols-1 gap-6 mt-3 max-w-xl lg:max-w-sm ">
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Contact Us</p>
                  <p className="text-muted-foreground text-sm">
                    Reach out today to discuss your project.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Flexible Solutions</p>
                  <p className="text-muted-foreground text-sm">
                    No matter the size or scope, we’ll adapt to your requirements.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Dedicated Support</p>
                  <p className="text-muted-foreground text-sm">
                    Stay involved at every step with a team that values transparency and
                    collaboration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-md w-full aspect-video h-full flex-1">
          <Image src="/images/logo.png" width={450} height={450} alt="Kyoora!" />
        </div>
      </div>
    </div>
  </section>
);
