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
    <section className='bg-muted py-12'>
      <div className='container w-full'>
        <Typography tag='h2' variant='h1' className='text-center text-[21px] lg:text-3xl'>
          <I18nText path='landing.faq.title' />
        </Typography>

        <Accordion
          type='single'
          collapsible
          className='mt-8 flex w-full flex-col gap-3 lg:mt-20 lg:gap-6'
        >
          {formattedFaq.map((item, index) => (
            <AccordionItem
              value={index.toString()}
              className='h-fit rounded-3xl border-none bg-white p-6'
            >
              <AccordionTrigger
                className='p-0 hover:no-underline'
                icon={
                  <ChevronDown className='ml-4 size-8 shrink-0 text-taiga transition-transform duration-200 lg:size-10' />
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
                <Typography tag='p' className='text-base font-normal lg:text-xl'>
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
