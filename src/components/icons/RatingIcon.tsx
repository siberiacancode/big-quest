import React from 'react';

export const RatingIcon = React.forwardRef<SVGSVGElement, React.ComponentProps<'svg'>>(
  (props, ref) => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='22'
      height='20'
      fill='current'
      {...props}
      ref={ref}
    >
      <path
        fill='inherit'
        d='M11.865.996a1 1 0 0 0-1.73 0L7.421 5.674a1.25 1.25 0 0 1-.894.608L1.44 7.05C.586 7.18.286 8.258.952 8.81l3.79 3.138c.35.291.514.75.43 1.197L4.18 18.35a1 1 0 0 0 1.448 1.072l4.79-2.522a1.25 1.25 0 0 1 1.164 0l4.79 2.522a1 1 0 0 0 1.448-1.072l-.99-5.205a1.25 1.25 0 0 1 .43-1.197l3.79-3.139c.664-.55.364-1.63-.49-1.759l-5.086-.768a1.25 1.25 0 0 1-.895-.608L11.865.996Z'
      />
    </svg>
  )
);
