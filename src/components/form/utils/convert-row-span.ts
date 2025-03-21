export * from './a11y-props';

import { Breakpoint } from '../types';

export const convertRowCssXs = (height: number | undefined) => {
  switch (height) {
    case 1:
      return 'xs:row-span-1';
    case 2:
      return 'xs:row-span-2';
    case 3:
      return 'xs:row-span-3';
    case 4:
      return 'xs:row-span-4';
    case 5:
      return 'xs:row-span-5';
    case 6:
      return 'xs:row-span-6';
    case 7:
      return 'xs:row-span-7';
    case 8:
      return 'xs:row-span-8';
    case 9:
      return 'xs:row-span-9';
    case 10:
      return 'xs:row-span-10';
    case 11:
      return 'xs:row-span-11';
    case 12:
      return 'xs:row-span-12';
    default:
      return '';
  }
};
export const convertRowCssSm = (height: number | undefined) => {
  switch (height) {
    case 1:
      return 'sm:row-span-1';
    case 2:
      return 'sm:row-span-2';
    case 3:
      return 'sm:row-span-3';
    case 4:
      return 'sm:row-span-4';
    case 5:
      return 'sm:row-span-5';
    case 6:
      return 'sm:row-span-6';
    case 7:
      return 'sm:row-span-7';
    case 8:
      return 'sm:row-span-8';
    case 9:
      return 'sm:row-span-9';
    case 10:
      return 'sm:row-span-10';
    case 11:
      return 'sm:row-span-11';
    case 12:
      return 'sm:row-span-12';
    default:
      return '';
  }
};
export const convertRowCssMd = (height: number | undefined) => {
  switch (height) {
    case 1:
      return 'md:row-span-1';
    case 2:
      return 'md:row-span-2';
    case 3:
      return 'md:row-span-3';
    case 4:
      return 'md:row-span-4';
    case 5:
      return 'md:row-span-5';
    case 6:
      return 'md:row-span-6';
    case 7:
      return 'md:row-span-7';
    case 8:
      return 'md:row-span-8';
    case 9:
      return 'md:row-span-9';
    case 10:
      return 'md:row-span-10';
    case 11:
      return 'md:row-span-11';
    case 12:
      return 'md:row-span-12';
    default:
      return '';
  }
};
export const convertRowCssLg = (height: number | undefined) => {
  switch (height) {
    case 1:
      return 'lg:row-span-1';
    case 2:
      return 'lg:row-span-2';
    case 3:
      return 'lg:row-span-3';
    case 4:
      return 'lg:row-span-4';
    case 5:
      return 'lg:row-span-5';
    case 6:
      return 'lg:row-span-6';
    case 7:
      return 'lg:row-span-7';
    case 8:
      return 'lg:row-span-8';
    case 9:
      return 'lg:row-span-9';
    case 10:
      return 'lg:row-span-10';
    case 11:
      return 'lg:row-span-11';
    case 12:
      return 'lg:row-span-12';
    default:
      return '';
  }
};
export const convertRowCss = (height: number) => {
  return height ? `row-span-${height}` : '';
};

export const convertRow = (breakpoint: Breakpoint, height: number | undefined) => {
  const currentBreakpoint = {
    xs: convertRowCssXs(height),
    sm: convertRowCssSm(height),
    md: convertRowCssMd(height),
    lg: convertRowCssLg(height),
  };
  return currentBreakpoint[breakpoint] || currentBreakpoint['sm'];
};
