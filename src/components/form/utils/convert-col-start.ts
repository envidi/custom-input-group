import tw from 'twin.macro';
import { Breakpoint } from '../types';

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
  switch (order) {
    case 1:
      return 'xs:col-start-1';
    case 2:
      return 'xs:col-start-2';
    case 3:
      return 'xs:col-start-3';
    case 4:
      return 'xs:col-start-4';
    case 5:
      return 'xs:col-start-5';
    case 6:
      return 'xs:col-start-6';
    case 7:
      return 'xs:col-start-7';
    case 8:
      return 'xs:col-start-8';
    case 9:
      return 'xs:col-start-9';
    case 10:
      return 'xs:col-start-10';
    case 11:
      return 'xs:col-start-11';
    case 12:
      return 'xs:col-start-12';
    default:
      return '';
  }
};
export const convertColStartCssSm = (order: number) => {
  switch (order) {
    case 1:
      return 'sm:col-start-1';
    case 2:
      return 'sm:col-start-2';
    case 3:
      return 'sm:col-start-3';
    case 4:
      return 'sm:col-start-4';
    case 5:
      return 'sm:col-start-5';
    case 6:
      return 'sm:col-start-6';
    case 7:
      return 'sm:col-start-7';
    case 8:
      return 'sm:col-start-8';
    case 9:
      return 'sm:col-start-9';
    case 10:
      return 'sm:col-start-10';
    case 11:
      return 'sm:col-start-11';
    case 12:
      return 'sm:col-start-12';
    default:
      return '';
  }
};
export const convertColStartCssMd = (order: number) => {
  switch (order) {
    case 1:
      return 'md:col-start-1';
    case 2:
      return 'md:col-start-2';
    case 3:
      return 'md:col-start-3';
    case 4:
      return 'md:col-start-4';
    case 5:
      return 'md:col-start-5';
    case 6:
      return 'md:col-start-6';
    case 7:
      return 'md:col-start-7';
    case 8:
      return 'md:col-start-8';
    case 9:
      return 'md:col-start-9';
    case 10:
      return 'md:col-start-10';
    case 11:
      return 'md:col-start-11';
    case 12:
      return 'md:col-start-12';
    default:
      return '';
  }
};
export const convertColStartCssLg = (order: number) => {
  switch (order) {
    case 1:
      return 'lg:col-start-1';
    case 2:
      return 'lg:col-start-2';
    case 3:
      return 'lg:col-start-3';
    case 4:
      return 'lg:col-start-4';
    case 5:
      return 'lg:col-start-5';
    case 6:
      return 'lg:col-start-6';
    case 7:
      return 'lg:col-start-7';
    case 8:
      return 'lg:col-start-8';
    case 9:
      return 'lg:col-start-9';
    case 10:
      return 'lg:col-start-10';
    case 11:
      return 'lg:col-start-11';
    case 12:
      return 'lg:col-start-12';
    default:
      return '';
  }
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
