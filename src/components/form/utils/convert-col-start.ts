import tw from 'twin.macro';
import { Breakpoint } from '../types';
// export const convertColStartCssSm = (order: number) => {
//   switch (order) {
//     case 1:
//       return tw`sm:col-start-1`;
//     case 2:
//       return tw`sm:col-start-2`;
//     case 3:
//       return tw`sm:col-start-3`;
//     case 4:
//       return tw`sm:col-start-4`;
//     case 5:
//       return tw`sm:col-start-5`;
//     case 6:
//       return tw`sm:col-start-6`;
//     case 7:
//       return tw`sm:col-start-7`;
//     case 8:
//       return tw`sm:col-start-8`;
//     case 9:
//       return tw`sm:col-start-9`;
//     case 10:
//       return tw`sm:col-start-10`;
//     case 11:
//       return tw`sm:col-start-11`;
//     case 12:
//       return tw`sm:col-start-12`;
//     default:
//       return tw`sm:col-start-1`;
//   }
// };
// export const convertColStartCssMd = (order: number) => {
//   switch (order) {
//     case 1:
//       return tw`md:col-start-1`;
//     case 2:
//       return tw`md:col-start-2`;
//     case 3:
//       return tw`md:col-start-3`;
//     case 4:
//       return tw`md:col-start-4`;
//     case 5:
//       return tw`md:col-start-5`;
//     case 6:
//       return tw`md:col-start-6`;
//     case 7:
//       return tw`md:col-start-7`;
//     case 8:
//       return tw`md:col-start-8`;
//     case 9:
//       return tw`md:col-start-9`;
//     case 10:
//       return tw`md:col-start-10`;
//     case 11:
//       return tw`md:col-start-11`;
//     case 12:
//       return tw`md:col-start-12`;
//     default:
//       return tw`md:col-start-1`;
//   }
// };
// export const convertColStartCssLg = (order: number) => {
//   switch (order) {
//     case 1:
//       return tw`lg:col-start-1`;
//     case 2:
//       return tw`lg:col-start-2`;
//     case 3:
//       return tw`lg:col-start-3`;
//     case 4:
//       return tw`lg:col-start-4`;
//     case 5:
//       return tw`lg:col-start-5`;
//     case 6:
//       return tw`lg:col-start-6`;
//     case 7:
//       return tw`lg:col-start-7`;
//     case 8:
//       return tw`lg:col-start-8`;
//     case 9:
//       return tw`lg:col-start-9`;
//     case 10:
//       return tw`lg:col-start-10`;
//     case 11:
//       return tw`lg:col-start-11`;
//     case 12:
//       return tw`lg:col-start-12`;
//     default:
//       return tw`lg:col-start-1`;
//   }
// };

export const convertColStartCssXs = (order: number) => {
  switch (order) {
    case 1:
      return tw`xs:col-start-1`;
    case 2:
      return tw`xs:col-start-2`;
    case 3:
      return tw`xs:col-start-3`;
    case 4:
      return tw`xs:col-start-4`;
    case 5:
      return tw`xs:col-start-5`;
    case 6:
      return tw`xs:col-start-6`;
    case 7:
      return tw`xs:col-start-7`;
    case 8:
      return tw`xs:col-start-8`;
    case 9:
      return tw`xs:col-start-9`;
    case 10:
      return tw`xs:col-start-10`;
    case 11:
      return tw`xs:col-start-11`;
    case 12:
      return tw`xs:col-start-12`;
    default:
      return tw``;
  }
};
export const convertColStartClassXS = (order: number) => {
  return order ? `xs:col-start-${order || 1}` : '';
};
export const convertColStartCssSm = (order: number) => {
  return order ? `sm:col-start-${order || 1}` : '';
};
export const convertColStartCssMd = (order: number) => {
  return order ? `md:col-start-${order || 1}` : '';
};
export const convertColStartCssLg = (order: number) => {
  return order ? `lg:col-start-${order || 1}` : '';
};
export const convertCurrentColStartClass = (breakpoint: Breakpoint) => {
  const currentColStart = {
    sm: 'colStartSm',
    md: 'colStartMd',
    lg: 'colStartLg',
  };
  return currentColStart[breakpoint] || currentColStart['sm'];
};

export const convertColStart = (breakpoint: Breakpoint, width: number) => {
  const currentColStart = {
    xs: convertColStartClassXS(width),
    sm: convertColStartCssSm(width),
    md: convertColStartCssMd(width),
    lg: convertColStartCssLg(width),
  };
  return currentColStart[breakpoint] || currentColStart['sm'];
};
export const convertColStartXs = (breakpoint: Breakpoint, width: number) => {
  const currentColStart: any = {
    xs: convertColStartCssXs(width),
  };
  return currentColStart[breakpoint];
};
