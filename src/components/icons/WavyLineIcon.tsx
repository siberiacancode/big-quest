import React from 'react';

export const WavyLineIcon = React.forwardRef<SVGSVGElement, React.ComponentProps<'svg'>>(
  (props, ref) => (
    <svg
      width='280'
      height='18'
      viewBox='0 0 280 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
      ref={ref}
    >
      <path
        d='M2.269 11.1003C21.676 12.503 63.8965 15.8471 100.777 6.43784C171.989 -11.7303 253.849 34.4838 277.127 7.04382'
        stroke='#F2C94C'
        strokeWidth='4'
        strokeLinecap='round'
      />
    </svg>
  )
);
