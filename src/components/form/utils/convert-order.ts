import { Breakpoint } from '../types';

export const convertOrderClassXs = (order: number | undefined) => {
  switch (order) {
    case 1:
      return 'xs:order-1';
    case 2:
      return 'xs:order-2';
    case 3:
      return 'xs:order-3';
    case 4:
      return 'xs:order-4';
    case 5:
      return 'xs:order-5';
    case 6:
      return 'xs:order-6';
    case 7:
      return 'xs:order-7';
    case 8:
      return 'xs:order-8';
    case 9:
      return 'xs:order-9';
    case 10:
      return 'xs:order-10';
    case 11:
      return 'xs:order-11';
    case 12:
      return 'xs:order-12';
    default:
      return '';
  }
};
export const convertOrderCssSm = (order: number | undefined) => {
  switch (order) {
    case 1:
      return 'sm:order-1';
    case 2:
      return 'sm:order-2';
    case 3:
      return 'sm:order-3';
    case 4:
      return 'sm:order-4';
    case 5:
      return 'sm:order-5';
    case 6:
      return 'sm:order-6';
    case 7:
      return 'sm:order-7';
    case 8:
      return 'sm:order-8';
    case 9:
      return 'sm:order-9';
    case 10:
      return 'sm:order-10';
    case 11:
      return 'sm:order-11';
    case 12:
      return 'sm:order-12';
    default:
      return '';
  }
};
export const convertOrderCssMd = (order: number | undefined) => {
  switch (order) {
    case 1:
      return 'md:order-1';
    case 2:
      return 'md:order-2';
    case 3:
      return 'md:order-3';
    case 4:
      return 'md:order-4';
    case 5:
      return 'md:order-5';
    case 6:
      return 'md:order-6';
    case 7:
      return 'md:order-7';
    case 8:
      return 'md:order-8';
    case 9:
      return 'md:order-9';
    case 10:
      return 'md:order-10';
    case 11:
      return 'md:order-11';
    case 12:
      return 'md:order-12';
    default:
      return '';
  }
};
export const convertOrderCssLg = (order: number | undefined) => {
  switch (order) {
    case 1:
      return 'lg:order-1';
    case 2:
      return 'lg:order-2';
    case 3:
      return 'lg:order-3';
    case 4:
      return 'lg:order-4';
    case 5:
      return 'lg:order-5';
    case 6:
      return 'lg:order-6';
    case 7:
      return 'lg:order-7';
    case 8:
      return 'lg:order-8';
    case 9:
      return 'lg:order-9';
    case 10:
      return 'lg:order-10';
    case 11:
      return 'lg:order-11';
    case 12:
      return 'lg:order-12';
    default:
      return '';
  }
};

export const convertOrder = (breakpoint: Breakpoint, width: number | undefined) => {
  const currentOrder = {
    xs: convertOrderClassXs(width),
    sm: convertOrderCssSm(width),
    md: convertOrderCssMd(width),
    lg: convertOrderCssLg(width),
  };
  return currentOrder[breakpoint] || currentOrder['sm'];
};
