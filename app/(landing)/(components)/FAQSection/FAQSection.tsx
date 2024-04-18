import { I18nText } from '@/components/common';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionPlusTrigger,
  Typography
} from '@/components/ui';
import { CITIES } from '@/utils/constants';

import { FAQ } from './constants/questions';

interface FAQSectionProps {
  cityId: (typeof CITIES)[keyof typeof CITIES]['id'];
}

export const FAQSection = ({ cityId }: FAQSectionProps) => {
  const { headquarters } = CITIES[cityId.toUpperCase()];
  return (
    <section className='container mt-28 w-full'>
      <Typography
        tag='h3'
        variant='h1'
        className='flex flex-col items-center mdx:text-3xl xsx:text-[21px]'
      >
        <I18nText path='landing.questions.title' />
      </Typography>
      <Accordion type='single' collapsible className='mt-16 w-full mdx:mt-8'>
        {FAQ.map((item, index) => (
          <AccordionItem
            value={`item-${index}`}
            className='mb-6 rounded-lg border-none bg-neutral-100 px-8'
          >
            <AccordionPlusTrigger className='py-8 mdx:py-4'>
              <Typography
                tag='p'
                className='text-left text-2xl font-normal mdx:text-xl xsx:text-lg'
              >
                {item.question}
              </Typography>
            </AccordionPlusTrigger>
            <AccordionContent>
              <Typography tag='p' className='text-xl font-normal mdx:text-lg xsx:text-base'>
                {item.answer.replace(/{указанному адресу}/g, headquarters)}
              </Typography>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
