import { ChevronDown } from 'lucide-react';

import { I18nText } from '@/components/common';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Typography
} from '@/components/ui';
import { CITIES } from '@/utils/constants';

import { FAQ } from './constants/faq';

interface FAQSectionProps {
  cityId: (typeof CITIES)[keyof typeof CITIES]['id'];
}

export const FAQSection = ({ cityId }: FAQSectionProps) => {
  const { headquarters } = CITIES[cityId.toUpperCase()];

  const formattedFaq = FAQ.map((item) => ({
    ...item,
    answer: item.answer.replace('{headquarters}', headquarters)
  }));

  return (
    <section className='bg-muted py-[72px] 2mdx:pt-0'>
      <div className='container w-full'>
        <Typography
          tag='h3'
          variant='h1'
          className='flex-grow text-center mdx:text-3xl xsx:text-[21px]'
        >
          <I18nText path='landing.faq.title' />
        </Typography>
        <Accordion
          type='single'
          collapsible
          className='mt-8 flex w-full flex-col gap-6 mdx:gap-3 md:mt-20'
        >
          {formattedFaq.map((item, index) => (
            <AccordionItem
              value={index.toString()}
              className='h-fit rounded-3xl border-none bg-white px-10 py-8 mdx:py-6'
            >
              <AccordionTrigger
                className='p-0 hover:no-underline'
                icon={
                  <ChevronDown className='ml-4 size-10 shrink-0 text-taiga transition-transform duration-200' />
                }
              >
                <Typography
                  tag='p'
                  variant='h4'
                  className='text-left font-normal text-muted-foreground hover:font-medium hover:text-taiga mdx:text-lg'
                >
                  {item.question}
                </Typography>
              </AccordionTrigger>
              <AccordionContent className='py-2'>
                <Typography tag='p' className='text-base font-normal md:text-xl'>
                  {item.answer}
                </Typography>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
