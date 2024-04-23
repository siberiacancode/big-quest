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
    <section className='container mt-28 w-full'>
      <Typography tag='h2' variant='h1' className='text-center text-3xl lg:text-3xl'>
        <I18nText path='landing.faq.title' />
      </Typography>
      <Accordion type='single' collapsible className='mt-8 w-full md:mt-16'>
        {formattedFaq.map((item, index) => (
          <AccordionItem
            value={index.toString()}
            className='mb-6 rounded-lg border-none bg-neutral-100 px-8'
          >
            <AccordionTrigger
              className='py-4 md:py-8'
              icon={<ChevronDown className='size-10 shrink-0 transition-transform duration-200' />}
            >
              <Typography tag='p' className='text-left text-lg font-normal md:text-2xl'>
                {item.question}
              </Typography>
            </AccordionTrigger>
            <AccordionContent>
              <Typography tag='p' className='text-base font-normal md:text-xl'>
                {item.answer}
              </Typography>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
