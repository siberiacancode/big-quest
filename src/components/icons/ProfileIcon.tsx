import React from 'react';

export const ProfileIcon = React.forwardRef<SVGSVGElement, React.ComponentProps<'svg'>>(
  (props, ref) => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='16'
      height='18'
      viewBox='0 0 16 18'
      fill='current'
      {...props}
      ref={ref}
    >
      <path
        fill='inherit'
        d='M8 .75a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5Zm-4 9.5A3.75 3.75 0 0 0 .25 14v1.188c0 .754.546 1.396 1.29 1.517 4.278.699 8.642.699 12.92 0a1.537 1.537 0 0 0 1.29-1.517V14A3.75 3.75 0 0 0 12 10.25h-.34c-.185 0-.369.03-.544.086l-.866.283a7.251 7.251 0 0 1-4.5 0l-.866-.283a1.75 1.75 0 0 0-.543-.086H4Z'
      />
    </svg>
  )
);
