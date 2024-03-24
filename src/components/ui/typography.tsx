import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const typographyVariants = cva('text-foreground', {
  variants: {
    variant: {
      h1: 'leading-10 font-medium text-[32px] text-gray-one',
      h2: 'leading-10 font-bold text-3xl text-gray-one',
      h3: 'leading-[31px] font-medium text-2xl text-gray-one',
      h4: 'leading-6 font-bold text-xl text-gray-one',
      h5: 'leading-6 font-bold text-lg text-gray-one',
      h6: 'leading-6 font-medium text-lg text-gray-one',
      h7: 'leading-5 font-bold text-base text-gray-one',
      sub1: 'leading-5 font-medium text-base text-gray-one',
      sub2: 'leading-5 font-bold text-sm text-gray-one',
      sub3: 'leading-5 font-medium text-sm text-gray-one',
      sub4: 'leading-5 font-medium text-xs text-gray-one',
      sub5: 'leading-[14px] font-medium text-[10px] text-gray-one',
      body1: 'leading-5 font-normal text-base text-muted-foreground',
      body2: 'leading-5 font-normal text-sm text-gray-one',
      body3: 'leading-4 font-normal text-xs text-muted-foreground',
      body4: 'leading-[14px] font-normal text-[10px] text-gray-one'
    }
  },
  defaultVariants: {
    variant: 'sub1'
  }
});

export interface TypographyProps extends VariantProps<typeof typographyVariants> {
  children: React.ReactNode;
  className?: string;
  tag?: keyof JSX.IntrinsicElements;
}

export const Typography = ({
  children,
  variant,
  className = '',
  tag: Tag = 'div',
  ...props
}: TypographyProps) => (
  <Tag className={cn(typographyVariants({ variant, className }))} {...props}>
    {children}
  </Tag>
);
