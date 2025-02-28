export * from './a11y-props';

import tw from 'twin.macro';
import { Breakpoint } from '../types';

// export const convertTwinMacroCssSm = (height: number) => {
//   switch (height) {
//     case 1:
//       return tw`sm:row-span-1`;
//     case 2:
//       return tw`sm:row-span-2`;
//     case 3:
//       return tw`sm:row-span-3`;
//     case 4:
//       return tw`sm:row-span-4`;
//     case 5:
//       return tw`sm:row-span-5`;
//     case 6:
//       return tw`sm:row-span-6`;
//     case 7:
//       return tw`sm:row-span-7`;
//     case 8:
//       return tw`sm:row-span-8`;
//     case 9:
//       return tw`sm:row-span-9`;
//     case 10:
//       return tw`sm:row-span-10`;
//     case 11:
//       return tw`sm:row-span-11`;
//     case 12:
//       return tw`sm:row-span-12`;
//     default:
//       return tw`sm:row-span-1`;
//   }
// };
// export const convertTwinMacroCssMd = (height: number) => {
//   switch (height) {
//     case 1:
//       return tw`md:row-span-1`;
//     case 2:
//       return tw`md:row-span-2`;
//     case 3:
//       return tw`md:row-span-3`;
//     case 4:
//       return tw`md:row-span-4`;
//     case 5:
//       return tw`md:row-span-5`;
//     case 6:
//       return tw`md:row-span-6`;
//     case 7:
//       return tw`md:row-span-7`;
//     case 8:
//       return tw`md:row-span-8`;
//     case 9:
//       return tw`md:row-span-9`;
//     case 10:
//       return tw`md:row-span-10`;
//     case 11:
//       return tw`md:row-span-11`;
//     case 12:
//       return tw`md:row-span-12`;
//     default:
//       return tw`md:row-span-1`;
//   }
// };
// export const convertTwinMacroCssLg = (height: number) => {
//   switch (height) {
//     case 1:
//       return tw`lg:row-span-1`;
//     case 2:
//       return tw`lg:row-span-2`;
//     case 3:
//       return tw`lg:row-span-3`;
//     case 4:
//       return tw`lg:row-span-4`;
//     case 5:
//       return tw`lg:row-span-5`;
//     case 6:
//       return tw`lg:row-span-6`;
//     case 7:
//       return tw`lg:row-span-7`;
//     case 8:
//       return tw`lg:row-span-8`;
//     case 9:
//       return tw`lg:row-span-9`;
//     case 10:
//       return tw`lg:row-span-10`;
//     case 11:
//       return tw`lg:row-span-11`;
//     case 12:
//       return tw`lg:row-span-12`;
//     default:
//       return tw`lg:row-span-1`;
//   }
// };
// export const convertTwinMacroCss = (height: number) => {
//   switch (height) {
//     case 1:
//       return tw`row-span-1`;
//     case 2:
//       return tw`row-span-2`;
//     case 3:
//       return tw`row-span-3`;
//     case 4:
//       return tw`row-span-4`;
//     case 5:
//       return tw`row-span-5`;
//     case 6:
//       return tw`row-span-6`;
//     case 7:
//       return tw`row-span-7`;
//     case 8:
//       return tw`row-span-8`;
//     case 9:
//       return tw`row-span-9`;
//     case 10:
//       return tw`row-span-10`;
//     case 11:
//       return tw`row-span-11`;
//     case 12:
//       return tw`row-span-12`;
//     default:
//       return tw`row-span-1`;
//   }
// };

// export const convertTwinMacroCssSm = (height: number) => {
//   switch (height) {
//     case 1:
//       return 'sm:row-span-1';
//     case 2:
//       return 'sm:row-span-2';
//     case 3:
//       return 'sm:row-span-3';
//     case 4:
//       return 'sm:row-span-4';
//     case 5:
//       return 'sm:row-span-5';
//     case 6:
//       return 'sm:row-span-6';
//     case 7:
//       return 'sm:row-span-7';
//     case 8:
//       return 'sm:row-span-8';
//     case 9:
//       return 'sm:row-span-9';
//     case 10:
//       return 'sm:row-span-10';
//     case 11:
//       return 'sm:row-span-11';
//     case 12:
//       return 'sm:row-span-12';
//     default:
//       return 'sm:row-span-1';
//   }
// };
// export const convertTwinMacroCssMd = (height: number) => {
//   switch (height) {
//     case 1:
//       return 'md:row-span-1';
//     case 2:
//       return 'md:row-span-2';
//     case 3:
//       return 'md:row-span-3';
//     case 4:
//       return 'md:row-span-4';
//     case 5:
//       return 'md:row-span-5';
//     case 6:
//       return 'md:row-span-6';
//     case 7:
//       return 'md:row-span-7';
//     case 8:
//       return 'md:row-span-8';
//     case 9:
//       return 'md:row-span-9';
//     case 10:
//       return 'md:row-span-10';
//     case 11:
//       return 'md:row-span-11';
//     case 12:
//       return 'md:row-span-12';
//     default:
//       return 'md:row-span-1';
//   }
// };
// export const convertTwinMacroCssLg = (height: number) => {
//   switch (height) {
//     case 1:
//       return 'lg:row-span-1';
//     case 2:
//       return 'lg:row-span-2';
//     case 3:
//       return 'lg:row-span-3';
//     case 4:
//       return 'lg:row-span-4';
//     case 5:
//       return 'lg:row-span-5';
//     case 6:
//       return 'lg:row-span-6';
//     case 7:
//       return 'lg:row-span-7';
//     case 8:
//       return 'lg:row-span-8';
//     case 9:
//       return 'lg:row-span-9';
//     case 10:
//       return 'lg:row-span-10';
//     case 11:
//       return 'lg:row-span-11';
//     case 12:
//       return 'lg:row-span-12';
//     default:
//       return 'lg:row-span-1';
//   }
// };
// export const convertTwinMacroCss = (height: number) => {
//   switch (height) {
//     case 1:
//       return 'row-span-1';
//     case 2:
//       return 'row-span-2';
//     case 3:
//       return 'row-span-3';
//     case 4:
//       return 'row-span-4';
//     case 5:
//       return 'row-span-5';
//     case 6:
//       return 'row-span-6';
//     case 7:
//       return 'row-span-7';
//     case 8:
//       return 'row-span-8';
//     case 9:
//       return 'row-span-9';
//     case 10:
//       return 'row-span-10';
//     case 11:
//       return 'row-span-11';
//     case 12:
//       return 'row-span-12';
//     default:
//       return 'row-span-1';
//   }
// };

export const convertRowCssXs = (height: number) => {
  return height ? `xs:row-span-${height || 1}` : '';
};
export const convertRowCssSm = (height: number) => {
  return height ? `sm:row-span-${height || 1}` : '';
};
export const convertRowCssMd = (height: number) => {
  return height ? `md:row-span-${height || 1}` : '';
};
export const convertRowCssLg = (height: number) => {
  return height ? `lg:row-span-${height || 1}` : '';
};
export const convertRowCss = (height: number) => {
  return height ? `row-span-${height}` : '';
};

export const convertRow = (breakpoint: Breakpoint, height: number) => {
  const currentBreakpoint = {
    xs: convertRowCssXs(height),
    sm: convertRowCssSm(height),
    md: convertRowCssMd(height),
    lg: convertRowCssLg(height),
  };
  return currentBreakpoint[breakpoint] || currentBreakpoint['sm'];
};
