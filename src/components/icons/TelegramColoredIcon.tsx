import React from 'react';

export const TelegramColoredIcon = React.forwardRef<SVGSVGElement, React.ComponentProps<'svg'>>(
  (props, ref) => (
    <svg
      width='32'
      height='32'
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
      ref={ref}
    >
      <g clipPath='url(#clip0_2088_11590)'>
        <path
          d='M27.2 0H4.8A4.8 4.8 0 0 0 0 4.8v22.4C0 29.9 2.1 32 4.8 32h22.4c2.7 0 4.8-2.1 4.8-4.8V4.8C32 2.1 29.9 0 27.2 0Z'
          fill='#currentColor'
        />
        <path d='M12.4 25.3c-.7 0-.6-.3-.8-1l-2-6.5 15.3-9' fill='#C8DAEA' />
        <path d='M12.4 25.3c.5 0 .7-.3 1-.6l2.8-2.6-3.4-2.2' fill='#A9C9DD' />
        <path
          d='m12.8 20 8.4 6.1c.9.6 1.6.3 1.9-.9l3.4-16c.3-1.4-.6-2-1.5-1.6L5 15.3c-1.4.5-1.4 1.3-.3 1.6l5.2 1.7L21.7 11c.6-.3 1.1-.2.7.3'
          fill='#F6FBFE'
        />
      </g>
      <defs>
        <clipPath id='clip0_2088_11590'>
          <path fill='#fff' d='M0 0h32v32H0z' />
        </clipPath>
      </defs>
    </svg>
  )
);
