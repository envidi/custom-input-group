export * from './a11y-props';
export * from './convert-column';
export * from './convert-order';
export * from './convert-col-start';
export * from './convert-row-start';
export * from './convert-row-span';
export * from './convert-row';
export * from './convert-option';
export * from './get-validate-rule';
export * from './convert-column-tailwindcss';
export * from './convert-gap';
import tw from 'twin.macro';

export const convertGapXTwinMacroCss = (gapX: number) => {
  switch (gapX) {
    case 5:
      return tw`gap-x-[.3125rem]`;
    case 10:
      return tw`gap-x-[.625rem]`;
    case 15:
      return tw`gap-x-[.9375rem]`;
    case 20:
      return tw`gap-x-[1.25rem]`;
    case 25:
      return tw`gap-x-[1.5625rem]`;
    case 30:
      return tw`gap-x-[1.875rem]`;
    case 35:
      return tw`gap-x-[2.1875rem]`;
    case 40:
      return tw`gap-x-[2.5rem]`;
    case 45:
      return tw`gap-x-[2.8125rem]`;
    case 50:
      return tw`gap-x-[3.125rem]`;
    default:
      return tw`gap-x-0`; // Giá trị mặc định nếu không match case nào
  }
};
export const convertGapYTwinMacroCss = (width: number) => {
  switch (width) {
    case 5:
      return tw`gap-y-[.3125rem]`;
    case 10:
      return tw`gap-y-[.625rem]`;
    case 15:
      return tw`gap-y-[.9375rem]`;
    case 20:
      return tw`gap-y-[1.25rem]`;
    case 25:
      return tw`gap-y-[1.5625rem]`;
    case 30:
      return tw`gap-y-[1.875rem]`;
    case 35:
      return tw`gap-y-[2.1875rem]`;
    case 40:
      return tw`gap-y-[2.5rem]`;
    case 45:
      return tw`gap-y-[2.8125rem]`;
    case 50:
      return tw`gap-y-[3.125rem]`;
    default:
      return tw`gap-y-0`; // Giá trị mặc định nếu không match case nào
  }
};
