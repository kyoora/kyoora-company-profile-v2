"use client";

import { Badge } from "@/components/ui/badge";
import BookMeeting from "../ui/book-meeting";

export const ContactUs = () => {

  return (
    <div className="w-full py-20 lg:py-20">
      <div className="container max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <div>
                <Badge>Contact</Badge>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-left font-regular">
                  Set up meeting schedule with us
                </h4>
                <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-sm text-left">
                  Have questions or ready to start your project? Get in touch
                  with us today!
                </p>
              </div>
            </div>
          </div>

          <div className="justify-center flex items-center">
            <BookMeeting />
          </div>
        </div>
      </div>
    </div>
  );
};
