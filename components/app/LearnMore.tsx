import { Check } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export const LearnMore = () => (
  <section id="learn-more" className="w-full py-20 lg:py-20">
    <div className="container mx-auto">
      <div className="flex gap-4 py-20 lg:py-40 flex-col items-start">
        <div>
          <Badge>Learn More</Badge>
        </div>
        <div className="flex gap-2 flex-col">
          <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
            Why Choose Kyoora?
          </h2>
          <p className="text-lg max-w-xl lg:max-w-3xl leading-relaxed tracking-tight text-muted-foreground">
            We`re more than just a development team - we`re your partner in innovation. At Kyoora,
            we prioritize:
          </p>
        </div>
        <div className="flex gap-10 pt-12 flex-col w-full">
          <div className="grid grid-cols-2 items-start lg:grid-cols-3 gap-10">
            <div className="flex flex-row gap-6 w-full items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Custom Solutions</p>
                <p className="text-muted-foreground text-sm">
                  Each project is uniquely crafted to suit your needs.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Expertise You Can Trust</p>
                <p className="text-muted-foreground text-sm">
                  Our skilled team has years of experience in web and mobile development.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Collaborative Process</p>
                <p className="text-muted-foreground text-sm">
                  Your feedback matters, and we’ll keep you involved from start to finish.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 w-full items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Commitment to Quality</p>
                <p className="text-muted-foreground text-sm">
                  From concept to launch, we deliver nothing less than excellence.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Cutting-Edge Technologies</p>
                <p className="text-muted-foreground text-sm">
                  We stay ahead of the curve by using the latest tools and frameworks to ensure your
                  project is modern and scalable.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Post-Launch Support</p>
                <p className="text-muted-foreground text-sm">
                  Our partnership doesnt end with delivery. We provide ongoing support to keep your
                  product optimized and running smoothly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
