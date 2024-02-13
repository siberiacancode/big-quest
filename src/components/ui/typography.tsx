import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const typographyVariants = cva('text-foreground', {
  variants: {
    variant: {
      default: '',
      h1: 'leading-10 font-medium text-[32px]',
      h2: 'leading-10 font-bold text-3xl',
      h3: 'leading-[31px] font-medium text-2xl',
      h4: 'leading-6 font-bold text-xl',
      h5: 'leading-6 font-bold text-lg',
      h6: 'leading-6 font-medium text-lg',
      h7: 'leading-5 font-bold text-base',
      sub1: 'leading-5 font-medium text-base',
      sub2: 'leading-5 font-bold text-sm',
      sub3: 'leading-5 font-medium text-sm',
      sub4: 'leading-5 font-medium text-xs',
      sub5: 'leading-[14px] font-medium text-[10px]',
      body1: 'leading-5 font-normal text-base text-muted-foreground',
      body2: 'leading-5 font-normal text-sm',
      body3: 'leading-4 font-normal text-xs text-muted-foreground',
      body4: 'leading-[14px] font-normal text-[10px]'
    }
  },
  defaultVariants: {
    variant: 'default'
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
