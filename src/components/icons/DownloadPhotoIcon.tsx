import React from 'react';

export const DownloadPhotoIcon = React.forwardRef<SVGSVGElement, React.ComponentProps<'svg'>>(
  (props, ref) => (
    <svg
      width='38'
      height='38'
      viewBox='0 0 38 38'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
      ref={ref}
    >
      <rect x='3' y='3' width='32' height='32' rx='16' fill='#E0E0E0' />
      <rect x='3' y='3' width='32' height='32' rx='16' stroke='#F2F2F2' strokeWidth='6' />
      <path
        d='M13.6667 20.9326C13.1714 20.4265 12.7977 19.8144 12.574 19.1426C12.3504 18.4707 12.2825 17.7568 12.3756 17.0548C12.4687 16.3528 12.7203 15.6813 13.1114 15.091C13.5025 14.5006 14.0228 14.0071 14.6329 13.6476C15.243 13.2882 15.9269 13.0723 16.6328 13.0163C17.3387 12.9603 18.0481 13.0657 18.7072 13.3245C19.3663 13.5833 19.9579 13.9887 20.4372 14.51C20.9164 15.0312 21.2708 15.6548 21.4734 16.3333H22.6667C23.3104 16.3332 23.937 16.5401 24.454 16.9236C24.971 17.307 25.351 17.8465 25.5379 18.4625C25.7247 19.0784 25.7085 19.7382 25.4916 20.3442C25.2747 20.9502 24.8686 21.4704 24.3334 21.8279'
        stroke='#333333'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path d='M19 19V25' stroke='#333333' strokeLinecap='round' strokeLinejoin='round' />
      <path
        d='M21.6667 21.6667L19 19L16.3334 21.6667'
        stroke='#333333'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
);
