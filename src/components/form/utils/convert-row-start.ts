import tw from 'twin.macro';
import { Breakpoint } from '../types';
// export const convertRowStartCssSm = (order: number) => {
//   switch (order) {
//     case 1:
//       return tw`sm:row-start-1`;
//     case 2:
//       return tw`sm:row-start-2`;
//     case 3:
//       return tw`sm:row-start-3`;
//     case 4:
//       return tw`sm:row-start-4`;
//     case 5:
//       return tw`sm:row-start-5`;
//     case 6:
//       return tw`sm:row-start-6`;
//     case 7:
//       return tw`sm:row-start-7`;
//     case 8:
//       return tw`sm:row-start-8`;
//     case 9:
//       return tw`sm:row-start-9`;
//     case 10:
//       return tw`sm:row-start-10`;
//     case 11:
//       return tw`sm:row-start-11`;
//     case 12:
//       return tw`sm:row-start-12`;
//     default:
//       return tw`sm:row-start-1`;
//   }
// };
// export const convertRowStartCssMd = (order: number) => {
//   switch (order) {
//     case 1:
//       return tw`md:row-start-1`;
//     case 2:
//       return tw`md:row-start-2`;
//     case 3:
//       return tw`md:row-start-3`;
//     case 4:
//       return tw`md:row-start-4`;
//     case 5:
//       return tw`md:row-start-5`;
//     case 6:
//       return tw`md:row-start-6`;
//     case 7:
//       return tw`md:row-start-7`;
//     case 8:
//       return tw`md:row-start-8`;
//     case 9:
//       return tw`md:row-start-9`;
//     case 10:
//       return tw`md:row-start-10`;
//     case 11:
//       return tw`md:row-start-11`;
//     case 12:
//       return tw`md:row-start-12`;
//     default:
//       return tw`md:row-start-1`;
//   }
// };
// export const convertRowStartCssLg = (order: number) => {
//   switch (order) {
//     case 1:
//       return tw`lg:row-start-1`;
//     case 2:
//       return tw`lg:row-start-2`;
//     case 3:
//       return tw`lg:row-start-3`;
//     case 4:
//       return tw`lg:row-start-4`;
//     case 5:
//       return tw`lg:row-start-5`;
//     case 6:
//       return tw`lg:row-start-6`;
//     case 7:
//       return tw`lg:row-start-7`;
//     case 8:
//       return tw`lg:row-start-8`;
//     case 9:
//       return tw`lg:row-start-9`;
//     case 10:
//       return tw`lg:row-start-10`;
//     case 11:
//       return tw`lg:row-start-11`;
//     case 12:
//       return tw`lg:row-start-12`;
//     default:
//       return tw`lg:row-start-1`;
//   }
// };
export const convertRowStartCssXs = (order: number) => {
  switch (order) {
    case 1:
      return tw`xs:row-start-1`;
    case 2:
      return tw`xs:row-start-2`;
    case 3:
      return tw`xs:row-start-3`;
    case 4:
      return tw`xs:row-start-4`;
    case 5:
      return tw`xs:row-start-5`;
    case 6:
      return tw`xs:row-start-6`;
    case 7:
      return tw`xs:row-start-7`;
    case 8:
      return tw`xs:row-start-8`;
    case 9:
      return tw`xs:row-start-9`;
    case 10:
      return tw`xs:row-start-10`;
    case 11:
      return tw`xs:row-start-11`;
    case 12:
      return tw`xs:row-start-12`;
    default:
      return tw``;
  }
  // return order ? `row-start-${order || 1}` : '';
};
export const convertRowStartClassXs = (order: number) => {
  return order ? `xs:row-start-${order || 1}` : '';
};
export const convertRowStartCssSm = (order: number) => {
  return order ? `sm:row-start-${order || 1}` : '';
};
export const convertRowStartCssMd = (order: number) => {
  return order ? `md:row-start-${order || 1}` : '';
};
export const convertRowStartCssLg = (order: number) => {
  return order ? `lg:row-start-${order || 1}` : '';
};

export const convertCurrentRowStartClass = (breakpoint: Breakpoint) => {
  const currentRowStart = {
    sm: 'rowStartSm',
    md: 'rowStartMd',
    lg: 'rowStartLg',
  };
  return currentRowStart[breakpoint] || currentRowStart['sm'];
};

export const convertRowStart = (breakpoint: Breakpoint, width: number) => {
  const currentRowStart = {
    xs: convertRowStartClassXs(width),
    sm: convertRowStartCssSm(width),
    md: convertRowStartCssMd(width),
    lg: convertRowStartCssLg(width),
  };
  return currentRowStart[breakpoint] || currentRowStart['sm'];
};
export const convertRowStartXs = (breakpoint: Breakpoint, width: number) => {
  const currentRowStart: any = {
    xs: convertRowStartCssXs(width),
  };
  return currentRowStart[breakpoint];
};
