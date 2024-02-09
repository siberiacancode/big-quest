import React from 'react';

export const LogoIcon = React.forwardRef<SVGSVGElement, React.ComponentProps<'svg'>>(
  (props, ref) => (
    <svg xmlns='http://www.w3.org/2000/svg' width='20' height='38' fill='none' {...props} ref={ref}>
      <g clipPath='url(#a)'>
        <path d='M8.282 1.758 0 9.965l2.316 2.294L8.282 6.36v6.51L0 21.077l2.316 2.294 5.966-5.899v6.51L0 32.188l2.316 2.295 5.966-5.899V38h3.285v-9.703l6.117 6.061L20 32.064l-7.615-7.546-.818-.798v-6.535l6.117 6.062L20 20.952l-7.615-7.545-.818-.811V6.074l6.117 6.06L20 9.84l-7.615-7.545-.818-.81L10.057 0 8.282 1.758Z' />
      </g>
      <defs>
        <clipPath>
          <path d='M0 38V0h20v38z' />
        </clipPath>
      </defs>
    </svg>
  )
);
