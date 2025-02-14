import React from 'react';

export const RhombIcon = React.forwardRef<SVGSVGElement, React.ComponentProps<'svg'>>(
  (props, ref) => (
    <svg xmlns='http://www.w3.org/2000/svg' width='26' height='32' fill='none' {...props} ref={ref}>
      <path
        stroke='#F2C94C'
        strokeWidth='3'
        d='M3 21.86C6.556 16.502 7.074 7.72 6.889 4 11.778 8.912 19.667 13.116 23 14.605 18.556 18.623 18.185 25.209 18.556 28 12.333 23.088 5.593 21.86 3 21.86Z'
        opacity='.5'
      />
    </svg>
  )
);
