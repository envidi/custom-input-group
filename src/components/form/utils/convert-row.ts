import { Breakpoint } from '../types';

export const convertNumberRow = (numberRow: number, breakpoint: Breakpoint) => {
  let string = '';
  switch (numberRow) {
    case 1:
      return (string = 'grid-rows-[repeat(1,1fr)]');
    case 2:
      return (string = 'grid-rows-[repeat(2,1fr)]');
    case 3:
      return (string = 'grid-rows-[repeat(3,1fr)]');
    case 4:
      return (string = 'grid-rows-[repeat(4,1fr)]');
    case 5:
      return (string = 'grid-rows-[repeat(5,1fr)]');
    case 6:
      return (string = 'grid-rows-[repeat(6,1fr)]');
    case 7:
      return (string = 'grid-rows-[repeat(7,1fr)]');
    case 8:
      return (string = 'grid-rows-[repeat(8,1fr)]');
  }
  return breakpoint + ':' + string;
};
