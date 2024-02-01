import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const typographyVariants = cva('color-[#333333]', {
  variants: {
    variant: {
      default: '',
      h1: 'lg:text-[30px] leading-9 font-bold text-3xl'
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
  tag: Wrapper = 'div',
  ...props
}: TypographyProps) => (
  <Wrapper className={cn(typographyVariants({ variant, className }))} {...props}>
    {children}
  </Wrapper>
);
