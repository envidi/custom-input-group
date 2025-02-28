export * from './a11y-props';

import tw from 'twin.macro';
import { Breakpoint } from '../types';

// export const convertTwinMacroCssSm = (width: number) => {
//   switch (width) {
//     case 1:
//       return tw`sm:col-span-1`;
//     case 2:
//       return tw`sm:col-span-2`;
//     case 3:
//       return tw`sm:col-span-3`;
//     case 4:
//       return tw`sm:col-span-4`;
//     case 5:
//       return tw`sm:col-span-5`;
//     case 6:
//       return tw`sm:col-span-6`;
//     case 7:
//       return tw`sm:col-span-7`;
//     case 8:
//       return tw`sm:col-span-8`;
//     case 9:
//       return tw`sm:col-span-9`;
//     case 10:
//       return tw`sm:col-span-10`;
//     case 11:
//       return tw`sm:col-span-11`;
//     case 12:
//       return tw`sm:col-span-12`;
//     default:
//       return tw`sm:col-span-1`;
//   }
// };
// export const convertTwinMacroCssMd = (width: number) => {
//   switch (width) {
//     case 1:
//       return tw`md:col-span-1`;
//     case 2:
//       return tw`md:col-span-2`;
//     case 3:
//       return tw`md:col-span-3`;
//     case 4:
//       return tw`md:col-span-4`;
//     case 5:
//       return tw`md:col-span-5`;
//     case 6:
//       return tw`md:col-span-6`;
//     case 7:
//       return tw`md:col-span-7`;
//     case 8:
//       return tw`md:col-span-8`;
//     case 9:
//       return tw`md:col-span-9`;
//     case 10:
//       return tw`md:col-span-10`;
//     case 11:
//       return tw`md:col-span-11`;
//     case 12:
//       return tw`md:col-span-12`;
//     default:
//       return tw`md:col-span-1`;
//   }
// };
// export const convertTwinMacroCssLg = (width: number) => {
//   switch (width) {
//     case 1:
//       return tw`lg:col-span-1`;
//     case 2:
//       return tw`lg:col-span-2`;
//     case 3:
//       return tw`lg:col-span-3`;
//     case 4:
//       return tw`lg:col-span-4`;
//     case 5:
//       return tw`lg:col-span-5`;
//     case 6:
//       return tw`lg:col-span-6`;
//     case 7:
//       return tw`lg:col-span-7`;
//     case 8:
//       return tw`lg:col-span-8`;
//     case 9:
//       return tw`lg:col-span-9`;
//     case 10:
//       return tw`lg:col-span-10`;
//     case 11:
//       return tw`lg:col-span-11`;
//     case 12:
//       return tw`lg:col-span-12`;
//     default:
//       return tw`lg:col-span-1`;
//   }
// };
// export const convertTwinMacroCss = (width: number) => {
//   switch (width) {
//     case 1:
//       return tw`col-span-1`;
//     case 2:
//       return tw`col-span-2`;
//     case 3:
//       return tw`col-span-3`;
//     case 4:
//       return tw`col-span-4`;
//     case 5:
//       return tw`col-span-5`;
//     case 6:
//       return tw`col-span-6`;
//     case 7:
//       return tw`col-span-7`;
//     case 8:
//       return tw`col-span-8`;
//     case 9:
//       return tw`col-span-9`;
//     case 10:
//       return tw`col-span-10`;
//     case 11:
//       return tw`col-span-11`;
//     case 12:
//       return tw`col-span-12`;
//     default:
//       return tw`col-span-1`;
//   }
// };

// export const convertTwinMacroCssSm = (width: number) => {
//   switch (width) {
//     case 1:
//       return 'sm:col-span-1';
//     case 2:
//       return 'sm:col-span-2';
//     case 3:
//       return 'sm:col-span-3';
//     case 4:
//       return 'sm:col-span-4';
//     case 5:
//       return 'sm:col-span-5';
//     case 6:
//       return 'sm:col-span-6';
//     case 7:
//       return 'sm:col-span-7';
//     case 8:
//       return 'sm:col-span-8';
//     case 9:
//       return 'sm:col-span-9';
//     case 10:
//       return 'sm:col-span-10';
//     case 11:
//       return 'sm:col-span-11';
//     case 12:
//       return 'sm:col-span-12';
//     default:
//       return 'sm:col-span-1';
//   }
// };
// export const convertTwinMacroCssMd = (width: number) => {
//   switch (width) {
//     case 1:
//       return 'md:col-span-1';
//     case 2:
//       return 'md:col-span-2';
//     case 3:
//       return 'md:col-span-3';
//     case 4:
//       return 'md:col-span-4';
//     case 5:
//       return 'md:col-span-5';
//     case 6:
//       return 'md:col-span-6';
//     case 7:
//       return 'md:col-span-7';
//     case 8:
//       return 'md:col-span-8';
//     case 9:
//       return 'md:col-span-9';
//     case 10:
//       return 'md:col-span-10';
//     case 11:
//       return 'md:col-span-11';
//     case 12:
//       return 'md:col-span-12';
//     default:
//       return 'md:col-span-1';
//   }
// };
// export const convertTwinMacroCssLg = (width: number) => {
//   switch (width) {
//     case 1:
//       return 'lg:col-span-1';
//     case 2:
//       return 'lg:col-span-2';
//     case 3:
//       return 'lg:col-span-3';
//     case 4:
//       return 'lg:col-span-4';
//     case 5:
//       return 'lg:col-span-5';
//     case 6:
//       return 'lg:col-span-6';
//     case 7:
//       return 'lg:col-span-7';
//     case 8:
//       return 'lg:col-span-8';
//     case 9:
//       return 'lg:col-span-9';
//     case 10:
//       return 'lg:col-span-10';
//     case 11:
//       return 'lg:col-span-11';
//     case 12:
//       return 'lg:col-span-12';
//     default:
//       return 'lg:col-span-1';
//   }
// };
// export const convertTwinMacroCss = (width: number) => {
//   switch (width) {
//     case 1:
//       return 'col-span-1';
//     case 2:
//       return 'col-span-2';
//     case 3:
//       return 'col-span-3';
//     case 4:
//       return 'col-span-4';
//     case 5:
//       return 'col-span-5';
//     case 6:
//       return 'col-span-6';
//     case 7:
//       return 'col-span-7';
//     case 8:
//       return 'col-span-8';
//     case 9:
//       return 'col-span-9';
//     case 10:
//       return 'col-span-10';
//     case 11:
//       return 'col-span-11';
//     case 12:
//       return 'col-span-12';
//     default:
//       return 'col-span-1';
//   }
// };
export const convertTwinMacroCssXs = (width: number) => {
  switch (width) {
    case 1:
      return tw`xs:col-span-1`;
    case 2:
      return tw`xs:col-span-2`;
    case 3:
      return tw`xs:col-span-3`;
    case 4:
      return tw`xs:col-span-4`;
    case 5:
      return tw`xs:col-span-5`;
    case 6:
      return tw`xs:col-span-6`;
    case 7:
      return tw`xs:col-span-7`;
    case 8:
      return tw`xs:col-span-8`;
    case 9:
      return tw`xs:col-span-9`;
    case 10:
      return tw`xs:col-span-10`;
    case 11:
      return tw`xs:col-span-11`;
    case 12:
      return tw`xs:col-span-12`;
    default:
      return tw``;
  }
};
export const convertColXs = (width: number) => {
  return width ? `xs:col-span-${width || 1}` : '';
};
export const convertTwinMacroCssSm = (width: number) => {
  return width ? `sm:col-span-${width || 1}` : '';
};
export const convertTwinMacroCssMd = (width: number) => {
  return width ? `md:col-span-${width || 1}` : '';
};
export const convertTwinMacroCssLg = (width: number) => {
  return width ? `lg:col-span-${width || 1}` : '';
};
export const convertTwinMacroCss = (width: number) => {
  return width ? `col-span-${width}` : '';
};

export const convertCurrentBreakpointClass = (breakpoint: Breakpoint) => {
  const currentBreakpoint = {
    sm: 'colSpanSm',
    md: 'colSpanMd',
    lg: 'colSpanLg',
  };
  return currentBreakpoint[breakpoint] || currentBreakpoint['sm'];
};
export const convertColumn = (breakpoint: Breakpoint, width: number) => {
  const currentBreakpoint = {
    xs: convertColXs(width),
    sm: convertTwinMacroCssSm(width),
    md: convertTwinMacroCssMd(width),
    lg: convertTwinMacroCssLg(width),
  };
  return currentBreakpoint[breakpoint] || currentBreakpoint['sm'];
};
export const convertColumnXs = (breakpoint: Breakpoint, width: number) => {
  const currentBreakpoint: any = {
    xs: convertTwinMacroCssXs(width),
  };
  return currentBreakpoint[breakpoint];
};
