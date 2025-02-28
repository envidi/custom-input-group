import tw from 'twin.macro';
import { Breakpoint } from '../types';

export const convertNumberRow = (numberRow: number, breakpoint: Breakpoint) => {
  return numberRow ? `${breakpoint}:grid-rows-[repeat(${numberRow},1fr)]` : '';
};
