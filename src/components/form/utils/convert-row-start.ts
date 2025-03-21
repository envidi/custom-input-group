import { Breakpoint } from '../types';

export const convertRowStartClassXs = (order: number) => {
  switch (order) {
    case 1:
      return 'xs:row-start-1';
    case 2:
      return 'xs:row-start-2';
    case 3:
      return 'xs:row-start-3';
    case 4:
      return 'xs:row-start-4';
    case 5:
      return 'xs:row-start-5';
    case 6:
      return 'xs:row-start-6';
    case 7:
      return 'xs:row-start-7';
    case 8:
      return 'xs:row-start-8';
    case 9:
      return 'xs:row-start-9';
    case 10:
      return 'xs:row-start-10';
    case 11:
      return 'xs:row-start-11';
    case 12:
      return 'xs:row-start-12';
    default:
      return '';
  }
};
export const convertRowStartCssSm = (order: number) => {
  switch (order) {
    case 1:
      return 'sm:row-start-1';
    case 2:
      return 'sm:row-start-2';
    case 3:
      return 'sm:row-start-3';
    case 4:
      return 'sm:row-start-4';
    case 5:
      return 'sm:row-start-5';
    case 6:
      return 'sm:row-start-6';
    case 7:
      return 'sm:row-start-7';
    case 8:
      return 'sm:row-start-8';
    case 9:
      return 'sm:row-start-9';
    case 10:
      return 'sm:row-start-10';
    case 11:
      return 'sm:row-start-11';
    case 12:
      return 'sm:row-start-12';
    default:
      return '';
  }
};
export const convertRowStartCssMd = (order: number) => {
  switch (order) {
    case 1:
      return 'md:row-start-1';
    case 2:
      return 'md:row-start-2';
    case 3:
      return 'md:row-start-3';
    case 4:
      return 'md:row-start-4';
    case 5:
      return 'md:row-start-5';
    case 6:
      return 'md:row-start-6';
    case 7:
      return 'md:row-start-7';
    case 8:
      return 'md:row-start-8';
    case 9:
      return 'md:row-start-9';
    case 10:
      return 'md:row-start-10';
    case 11:
      return 'md:row-start-11';
    case 12:
      return 'md:row-start-12';
    default:
      return '';
  }
};
export const convertRowStartCssLg = (order: number) => {
  switch (order) {
    case 1:
      return 'lg:row-start-1';
    case 2:
      return 'lg:row-start-2';
    case 3:
      return 'lg:row-start-3';
    case 4:
      return 'lg:row-start-4';
    case 5:
      return 'lg:row-start-5';
    case 6:
      return 'lg:row-start-6';
    case 7:
      return 'lg:row-start-7';
    case 8:
      return 'lg:row-start-8';
    case 9:
      return 'lg:row-start-9';
    case 10:
      return 'lg:row-start-10';
    case 11:
      return 'lg:row-start-11';
    case 12:
      return 'lg:row-start-12';
    default:
      return '';
  }
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
