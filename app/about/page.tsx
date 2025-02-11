export default function Home() {
  return (
    <div className="">
      <main className="container mx-auto px-10 lg:px-20">
        <div className="w-full">
          <div className="container mx-auto">
            <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
              <div className="flex gap-4 flex-col">
                <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
                  About Us
                </h1>

                <h3 className="text-2xl md:text-3xl max-w-2xl tracking-wide text-center font-regular mt-8">
                  Introduction
                </h3>
                <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
                  Kyoora is a passionate team of technology enthusiasts dedicated to transforming
                  bold ideas into impactful digital products. From sleek websites to powerful mobile
                  applications, our mission is to empower businesses and individuals with
                  cutting-edge solutions that drive growth and success.
                </p>

                <h3 className="text-2xl md:text-3xl max-w-2xl tracking-wide text-center font-regular mt-8">
                  Our Story
                </h3>
                <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
                  Founded by a group of highly motivated developers, Kyoora began with a simple
                  belief: technology can be a catalyst for positive change. Over the years, we’ve
                  expanded our expertise, collaborated with diverse clients, and refined our
                  processes to ensure we deliver excellence in every project we undertake.
                </p>

                <h3 className="text-2xl md:text-3xl max-w-2xl tracking-wide text-center font-regular mt-8">
                  Our Mission
                </h3>
                <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
                  To build high-quality, innovative, and user-centric digital experiences that help
                  our clients thrive in today’s fast-paced world. We believe in the power of
                  partnership, transparency, and expertise to bring lasting value.
                </p>

                <h3 className="text-2xl md:text-3xl max-w-2xl tracking-wide text-center font-regular mt-8">
                  Our Vision
                </h3>
                <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
                  To become a trusted global partner for businesses of all sizes—recognized for our
                  dedication to innovation, collaboration, and uncompromising quality in every
                  solution we deliver.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
