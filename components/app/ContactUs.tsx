'use client';

import { CalendarIcon, MoveRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { useState } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

export const ContactUs = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

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
                  Have questions or ready to start your project? Get in touch with us today!
                </p>
              </div>
            </div>
          </div>

          <div className="justify-center flex items-center">
            <div className="rounded-md min-w-[300px] flex flex-col border p-8 gap-4">
              <p>Book a meeting</p>
              <div className="grid w-full items-center gap-1">
                <Label htmlFor="picture">Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={'outline'}
                      className={cn(
                        'w-full max-w-[300px] justify-start text-left font-normal',
                        !date && 'text-muted-foreground'
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, 'PPP') : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="grid w-full max-w-sm items-center gap-1">
                <Label htmlFor="name">Your Name</Label>
                <Input id="name" type="text" />
              </div>

              <div className="grid w-full max-w-sm items-center gap-1">
                <Label htmlFor="email">Your email</Label>
                <Input id="email" type="email" />
              </div>

              <div className="grid w-full max-w-sm items-center gap-1">
                <Label htmlFor="phone_number">Your Phone Number</Label>
                <Input id="phone_number" type="phone" />
              </div>

              <Button className="gap-4 w-full">
                Book the meeting <MoveRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
