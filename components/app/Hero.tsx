import { InfoIcon, MoveRight } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';

export const Hero = () => (
  <div className="w-full">
    <div className="container mx-auto">
      <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
        <div className="flex gap-4 flex-col">
          <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
            Innovative Solutions for Websites and Mobile Apps
          </h1>
          <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
            At Kyoora, we bring your ideas to life with cutting-edge technology and a passion for
            problem-solving. Whether it’s a custom website or a mobile app, our expert team is ready
            to deliver solutions that make a difference.
          </p>
        </div>
        <div className="flex flex-row gap-3">
          <Button asChild size="lg" className="gap-4" variant="outline">
            <Link href="#get-started">
              Get Started <InfoIcon className="w-4 h-4" />
            </Link>
          </Button>
          <Button asChild size="lg" className="gap-4">
            <Link href="#learn-more">
              Learn More <MoveRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  </div>
);
