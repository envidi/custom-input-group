export * from './a11y-props';

import { Breakpoint } from '../types';

export const convertColXs = (width: number | undefined) => {
  switch (width) {
    case 1:
      return 'xs:col-span-1';
    case 2:
      return 'xs:col-span-2';
    case 3:
      return 'xs:col-span-3';
    case 4:
      return 'xs:col-span-4';
    case 5:
      return 'xs:col-span-5';
    case 6:
      return 'xs:col-span-6';
    case 7:
      return 'xs:col-span-7';
    case 8:
      return 'xs:col-span-8';
    case 9:
      return 'xs:col-span-9';
    case 10:
      return 'xs:col-span-10';
    case 11:
      return 'xs:col-span-11';
    case 12:
      return 'xs:col-span-12';
    default:
      return '';
  }
};
export const convertTwinMacroCssSm = (width: number | undefined) => {
  switch (width) {
    case 1:
      return 'sm:col-span-1';
    case 2:
      return 'sm:col-span-2';
    case 3:
      return 'sm:col-span-3';
    case 4:
      return 'sm:col-span-4';
    case 5:
      return 'sm:col-span-5';
    case 6:
      return 'sm:col-span-6';
    case 7:
      return 'sm:col-span-7';
    case 8:
      return 'sm:col-span-8';
    case 9:
      return 'sm:col-span-9';
    case 10:
      return 'sm:col-span-10';
    case 11:
      return 'sm:col-span-11';
    case 12:
      return 'sm:col-span-12';
    default:
      return '';
  }
};
export const convertTwinMacroCssMd = (width: number | undefined) => {
  switch (width) {
    case 1:
      return 'md:col-span-1';
    case 2:
      return 'md:col-span-2';
    case 3:
      return 'md:col-span-3';
    case 4:
      return 'md:col-span-4';
    case 5:
      return 'md:col-span-5';
    case 6:
      return 'md:col-span-6';
    case 7:
      return 'md:col-span-7';
    case 8:
      return 'md:col-span-8';
    case 9:
      return 'md:col-span-9';
    case 10:
      return 'md:col-span-10';
    case 11:
      return 'md:col-span-11';
    case 12:
      return 'md:col-span-12';
    default:
      return '';
  }
};
export const convertTwinMacroCssLg = (width: number | undefined) => {
  switch (width) {
    case 1:
      return 'lg:col-span-1';
    case 2:
      return 'lg:col-span-2';
    case 3:
      return 'lg:col-span-3';
    case 4:
      return 'lg:col-span-4';
    case 5:
      return 'lg:col-span-5';
    case 6:
      return 'lg:col-span-6';
    case 7:
      return 'lg:col-span-7';
    case 8:
      return 'lg:col-span-8';
    case 9:
      return 'lg:col-span-9';
    case 10:
      return 'lg:col-span-10';
    case 11:
      return 'lg:col-span-11';
    case 12:
      return 'lg:col-span-12';
    default:
      return '';
  }
};
export const convertTwinMacroCss = (width: number) => {
  return width ? `col-span-${width}` : '';
};

export const convertColumn = (breakpoint: Breakpoint, width: number | undefined) => {
  const currentBreakpoint = {
    xs: convertColXs(width),
    sm: convertTwinMacroCssSm(width),
    md: convertTwinMacroCssMd(width),
    lg: convertTwinMacroCssLg(width),
  };
  return currentBreakpoint[breakpoint] || currentBreakpoint['sm'];
};
