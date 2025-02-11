import { PhoneCall } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';

export type FaqType = {
  question: string;
  answer: string;
};

export const FAQ = () => {
  const faqs: FaqType[] = [
    {
      question: 'What services does Kyoora offer?',
      answer:
        'We specialize in website development, mobile app development, UI/UX design, and post-launch maintenance and support.',
    },
    {
      question: 'Who can benefit from Kyoora’s services?',
      answer:
        'Our services are ideal for businesses, startups, entrepreneurs, and individuals who need tailored software solutions to achieve their goals.',
    },
    {
      question: 'How do I get started with Kyoora?',
      answer:
        'It’s simple! Reach out to us via the Contact Us form or email. Share your project idea, and we’ll guide you through the next steps.',
    },
    {
      question: 'How long does it take to complete a project?',
      answer:
        'The timeline depends on the scope and complexity of your project. We’ll provide an estimated delivery time after discussing your requirements.',
    },
    {
      question: 'What is Kyoora’s development process?',
      answer:
        'We follow a clear and collaborative process: Discovery & Planning, Design & Prototyping, Development, Testing & Quality Assurance, and Launch & Post-Launch Support.',
    },
    {
      question: 'Can Kyoora handle revisions during development?',
      answer:
        'Absolutely! We value your feedback and will accommodate revisions to ensure the final product aligns with your vision.',
    },
    {
      question: 'How much does it cost to develop a website or app?',
      answer:
        'Costs vary based on the project’s size, complexity, and features. Contact us for a detailed quote tailored to your requirements.',
    },
    {
      question: 'What payment methods do you accept?',
      answer:
        'We accept payments via bank transfer, PayPal, or other secure methods as agreed during the project discussion.',
    },
    {
      question: 'Are there any hidden fees?',
      answer:
        'No, we believe in transparent pricing. We’ll provide a detailed breakdown of costs upfront.',
    },
    {
      question: 'Do you provide maintenance after the project is completed?',
      answer:
        'Yes! We offer ongoing maintenance and support to ensure your product remains optimized and runs smoothly.',
    },
    {
      question: 'Can Kyoora help with updates or adding new features later?',
      answer:
        'Of course! We’re happy to help you scale and improve your project as your needs evolve.',
    },
  ];

  return (
    <div className="w-full py-20 lg:py-20">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="flex gap-10 flex-col">
            <div className="flex gap-4 flex-col">
              <div>
                <Badge variant="outline">FAQ</Badge>
              </div>
              <div className="flex gap-2 flex-col">
                <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-left font-regular">
                  Frequently Asked Questions (FAQ)
                </h4>
                <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground  text-left">
                  Everything You Need to Know About Kyoora
                </p>
              </div>
              <div className="">
                <Button className="gap-4" variant="outline">
                  Any questions? Contact Us <PhoneCall className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((_, index) => (
              <AccordionItem key={index} value={'index-' + index}>
                <AccordionTrigger>{_.question}</AccordionTrigger>
                <AccordionContent>{_.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};
