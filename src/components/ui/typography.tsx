import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const typographyVariants = cva('text-foreground', {
  variants: {
    variant: {
      h1: 'leading-10 font-medium text-[36px]',
      h2: 'leading-10 font-bold text-4xl',
      h3: 'leading-[31px] font-medium text-3xl',
      h4: 'leading-6 font-bold text-2xl',
      h5: 'leading-6 font-bold text-xl',
      h6: 'leading-6 font-medium text-xl',
      h7: 'leading-5 font-bold text-lg',
      sub1: 'leading-5 font-medium text-lg',
      sub2: 'leading-5 font-bold text-base',
      sub3: 'leading-5 font-medium text-base',
      sub4: 'leading-5 font-medium text-sm',
      sub5: 'leading-4 font-medium text-sm text-taiga',
      sub6: 'leading-5 font-medium text-base text-muted-foreground',
      body1: 'leading-5 font-normal text-lg text-muted-foreground',
      body2: 'leading-5 font-normal text-base',
      body3: 'leading-4 font-normal text-sm text-muted-foreground',
      body4: 'leading-[14px] font-normal text-[12px] text-muted-foreground',
      body5: 'leading-5 font-normal text-base text-muted-foreground'
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
