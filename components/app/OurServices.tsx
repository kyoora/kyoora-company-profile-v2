import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

export const OurServices = () => (
  <div className="w-full py-20 lg:py-20">
    <div className="container mx-auto">
      <div className="flex flex-col gap-10">
        <div className="flex gap-4 flex-col items-start">
          <div>
            <Badge>Our Services</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
              Delivering Tailored Solutions to Meet Your Needs
            </h2>
            <p className="text-lg max-w-xl lg:max-w-3xl leading-relaxed tracking-tight text-muted-foreground  text-left">
              At Kyoora, we specialize in a wide range of services to bring your ideas to life. From
              designing sleek websites to developing powerful mobile applications, we’ve got you
              covered.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col gap-2">
            <div className="bg-muted rounded-md aspect-video mb-2 max-h-[300px]">
              <Image
                className="max-h-[200px] cover"
                src="/images/services/web-dev.jpg"
                width={450}
                height={450}
                alt="Kyoora!"
              />
            </div>
            <h3 className="text-xl tracking-tight">Website Development</h3>
            <p className="text-muted-foreground text-base">
              Crafting fast, responsive, and visually stunning websites tailored to your business
              goals. Whether it’s a corporate website, e-commerce platform, or custom web solution,
              we ensure a seamless user experience.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="bg-muted rounded-md aspect-video mb-2 max-h-[300px]">
              <Image
                className="max-h-[200px] cover"
                src="/images/services/app-dev.jpg"
                width={450}
                height={450}
                alt="Kyoora!"
              />
            </div>
            <h3 className="text-xl tracking-tight">Mobile App Development</h3>
            <p className="text-muted-foreground text-base">
              Building innovative, user-friendly mobile applications for Android and iOS. We create
              apps that drive engagement and offer robust functionality for your audience.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="bg-muted rounded-md aspect-video mb-2 max-h-[300px]">
              <Image
                className="max-h-[200px] cover"
                src="/images/services/uiux.jpg"
                width={450}
                height={450}
                alt="Kyoora!"
              />
            </div>
            <h3 className="text-xl tracking-tight">UI/UX Design</h3>
            <p className="text-muted-foreground text-base">
              Designing intuitive and visually appealing user interfaces. We focus on delivering
              designs that not only look great but also enhance user satisfaction and usability.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
