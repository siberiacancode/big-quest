import React from 'react';

interface CityIconProps extends React.ComponentProps<'svg'> {
  squareClassName: string;
}

export const CityIcon = React.forwardRef<SVGSVGElement, CityIconProps>(
  ({ squareClassName, ...props }, ref) => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='current'
      {...props}
      ref={ref}
    >
      <path
        stroke='inherit'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M2 21h20'
      />
      <path
        stroke='inherit'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M7 13H5a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1Z'
      />
      <path
        stroke='inherit'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M6 17h.5'
      />
      <path
        stroke='inherit'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M19 2H9a1 1 0 0 0-1 1v17a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Z'
      />
      <path
        fill='current'
        stroke='inherit'
        strokeWidth='0.5'
        d='M11.25 6.75v-1.5h1.5v1.5h-1.5ZM15.25 6.75v-1.5h1.5v1.5h-1.5ZM11.25 10.25v-1.5h1.5v1.5h-1.5ZM15.25 10.25v-1.5h1.5v1.5h-1.5ZM15.25 13.75v-1.5h1.5v1.5h-1.5ZM15.25 17.25v-1.5h1.5v1.5h-1.5Z'
        className={squareClassName}
      />
    </svg>
  )
);
