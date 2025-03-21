import { Breakpoint } from '../types';

export const convertColumnTailwindXs = (column: number) => {
  switch (column) {
    case 1:
      return 'xs:grid-cols-1';
    case 2:
      return 'xs:grid-cols-2';
    case 3:
      return 'xs:grid-cols-3';
    case 4:
      return 'xs:grid-cols-4';
    case 5:
      return 'xs:grid-cols-5';
    case 6:
      return 'xs:grid-cols-6';
    case 7:
      return 'xs:grid-cols-7';
    case 8:
      return 'xs:grid-cols-8';
    case 9:
      return 'xs:grid-cols-9';
    case 10:
      return 'xs:grid-cols-10';
    case 11:
      return 'xs:grid-cols-11';
    case 12:
      return 'xs:grid-cols-12';
    default:
      return 'xs:grid-cols-1';
  }
};
export const convertColumnTailwindSm = (column: number) => {
  switch (column) {
    case 1:
      return 'sm:grid-cols-1';
    case 2:
      return 'sm:grid-cols-2';
    case 3:
      return 'sm:grid-cols-3';
    case 4:
      return 'sm:grid-cols-4';
    case 5:
      return 'sm:grid-cols-5';
    case 6:
      return 'sm:grid-cols-6';
    case 7:
      return 'sm:grid-cols-7';
    case 8:
      return 'sm:grid-cols-8';
    case 9:
      return 'sm:grid-cols-9';
    case 10:
      return 'sm:grid-cols-10';
    case 11:
      return 'sm:grid-cols-11';
    case 12:
      return 'sm:grid-cols-12';
    default:
      return 'sm:grid-cols-1';
  }
};
export const convertColumnTailwindMd = (column: number) => {
  switch (column) {
    case 1:
      return 'md:grid-cols-1';
    case 2:
      return 'md:grid-cols-2';
    case 3:
      return 'md:grid-cols-3';
    case 4:
      return 'md:grid-cols-4';
    case 5:
      return 'md:grid-cols-5';
    case 6:
      return 'md:grid-cols-6';
    case 7:
      return 'md:grid-cols-7';
    case 8:
      return 'md:grid-cols-8';
    case 9:
      return 'md:grid-cols-9';
    case 10:
      return 'md:grid-cols-10';
    case 11:
      return 'md:grid-cols-11';
    case 12:
      return 'md:grid-cols-12';
    default:
      return 'md:grid-cols-1';
  }
};
export const convertColumnTailwindLg = (column: number) => {
  switch (column) {
    case 1:
      return 'lg:grid-cols-1';
    case 2:
      return 'lg:grid-cols-2';
    case 3:
      return 'lg:grid-cols-3';
    case 4:
      return 'lg:grid-cols-4';
    case 5:
      return 'lg:grid-cols-5';
    case 6:
      return 'lg:grid-cols-6';
    case 7:
      return 'lg:grid-cols-7';
    case 8:
      return 'lg:grid-cols-8';
    case 9:
      return 'lg:grid-cols-9';
    case 10:
      return 'lg:grid-cols-10';
    case 11:
      return 'lg:grid-cols-11';
    case 12:
      return 'lg:grid-cols-12';
    default:
      return 'lg:grid-cols-1';
  }
};

export const convertColumnByBreakpoint = (breakpoint: Breakpoint, column: number) => {
  const breakpointObj = {
    xs: convertColumnTailwindXs(column),
    sm: convertColumnTailwindSm(column),
    md: convertColumnTailwindMd(column),
    lg: convertColumnTailwindLg(column),
  };
  return breakpointObj?.[breakpoint as keyof typeof breakpointObj] || breakpointObj['xs'];
};
