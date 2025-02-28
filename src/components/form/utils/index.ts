export * from './a11y-props';
export * from './convert-column';
export * from './convert-order';
export * from './convert-col-start';
export * from './convert-row-start';
export * from './convert-row-span';
export * from './convert-row';
import tw from 'twin.macro';
import { Breakpoint, GridItem } from '../types';
import { convertColumn, convertCurrentBreakpointClass, convertTwinMacroCss } from './convert-column';

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
// export const convertColumnTailwind = (column: number) => {
//   switch (column) {
//     case 1:
//       return tw`grid-cols-1`;
//     case 2:
//       return tw`grid-cols-2`;
//     case 3:
//       return tw`grid-cols-3`;
//     case 4:
//       return tw`grid-cols-4`;
//     case 5:
//       return tw`grid-cols-5`;
//     case 6:
//       return tw`grid-cols-6`;
//     case 7:
//       return tw`grid-cols-7`;
//     case 8:
//       return tw`grid-cols-8`;
//     case 9:
//       return tw`grid-cols-9`;
//     case 10:
//       return tw`grid-cols-10`;
//     case 11:
//       return tw`grid-cols-11`;
//     case 12:
//       return tw`grid-cols-12`;
//     default:
//       return tw`grid-cols-1`;
//   }
// };
export const convertColumnTailwind = (column: number) => {
  switch (column) {
    case 1:
      return 'grid-cols-1';
    case 2:
      return 'grid-cols-2';
    case 3:
      return 'grid-cols-3';
    case 4:
      return 'grid-cols-4';
    case 5:
      return 'grid-cols-5';
    case 6:
      return 'grid-cols-6';
    case 7:
      return 'grid-cols-7';
    case 8:
      return 'grid-cols-8';
    case 9:
      return 'grid-cols-9';
    case 10:
      return 'grid-cols-10';
    case 11:
      return 'grid-cols-11';
    case 12:
      return 'grid-cols-12';
    default:
      return 'grid-cols-1';
  }
};
function groupByRow(objects: GridItem[]) {
  let rows: any = {};
  objects.forEach((obj) => {
    if (!rows[obj.y]) {
      rows[obj.y] = [];
    }
    rows[obj.y].push(obj);
  });
  return rows;
}
// export function fillGaps(objects: GridItem[], rowWidth: number) {
//   // export function fillGaps(objects: GridItem[], rowWidth: number, breakpoint: Breakpoint) {
//   let rows = groupByRow(objects);
//   let filledObjects: any = [];

//   Object.keys(rows).forEach((yKey) => {
//     let row = rows[yKey];
//     console.log(row);
//     row.sort((a: GridItem, b: GridItem) => a.x - b.x);

//     let currentX = 0;
//     const breakpoints = ['lg', 'md'];

//     for (let obj of row) {
//       // for (let breakpoint of breakpoints) {
//       if (obj.x > currentX) {
//         filledObjects.push({
//           ...obj,
//           x: currentX,
//           y: obj.y,
//           w: obj.x - currentX,
//           h: obj.h,
//         });
//       }
//       // }

//       filledObjects.push(obj);
//       currentX = obj.x + obj.w;
//     }

//     if (currentX < rowWidth) {
//       filledObjects.push({
//         ...objects[0],
//         x: currentX,
//         y: parseInt(yKey),
//         w: rowWidth - currentX,
//         h: row[0].h,
//         config: {
//           ...objects[0]?.config,
//           name: 'unknown',
//           inputType: 'unknown',
//           colSpan: convertTwinMacroCss(rowWidth - currentX),
//           // [convertCurrentBreakpointClass(breakpoint)]: convertColumn(breakpoint, rowWidth - currentX),
//         },
//       });
//     }
//   });

//   return filledObjects;
// }

export function fillGaps(objects: any[], rowWidth: number) {
  let rows = groupByRow(objects);
  let filledObjects: any = [];

  Object.keys(rows).forEach((yKey) => {
    let row = rows[yKey];
    row.sort((a: any, b: any) => a.md.x - b.md.x); // Sort based on x position in 'md'

    let currentX = 0;

    // Loop through each object in the row
    for (let obj of row) {
      let md = obj.md;
      let lg = obj.lg; // Get lg data as well

      // Handle medium (md) breakpoint
      if (md.x > currentX) {
        filledObjects.push({
          ...obj,
          md: {
            ...md,
            x: currentX,
            w: md.x - currentX, // Adjust the width to fill the gap
            h: md.h,
          },
        });
      }

      // Handle large (lg) breakpoint (same logic as md but for lg)
      if (lg && lg.x > currentX) {
        filledObjects.push({
          ...obj,
          lg: {
            ...lg,
            x: currentX,
            w: lg.x - currentX, // Adjust the width for the large breakpoint
            h: lg.h,
          },
        });
      }

      // Add the current object to the result array for both breakpoints
      filledObjects.push(obj);

      // Update the currentX position after placing the object (consider both md and lg)
      currentX = Math.max(md.x + md.w, lg ? lg.x + lg.w : 0);
    }

    // If there's still remaining space after the last object in the row, fill it
    if (currentX < rowWidth) {
      filledObjects.push({
        ...row[0], // Use the first object as a base to fill the remaining space
        md: {
          ...row[0].md,
          x: currentX,
          w: rowWidth - currentX, // Fill the remaining space
          h: row[0].md.h,
          css: {
            ...row[0].md.css,
            '@media (min-width: 768px)': {
              gridColumn: `span ${(rowWidth - currentX) / 2} / span ${(rowWidth - currentX) / 2}`,
            },
          },
        },
        lg: {
          ...row[0].lg,
          x: currentX,
          w: rowWidth - currentX,
          h: row[0].lg.h,
          css: {
            ...row[0].lg.css,
            '@media (min-width: 1024px)': {
              gridColumn: `span ${rowWidth - currentX} / span ${rowWidth - currentX}`,
            },
          },
        },
      });
    }
  });

  return filledObjects;
}

// export function fillGaps(objects: GridItem[], rowWidth: number) {
//   // export function fillGaps(objects: GridItem[], rowWidth: number, breakpoint: Breakpoint) {
//   let rows = groupByRow(objects);
//   console.log(rows);
//   let filledObjects: any = [];

//   Object.keys(rows).forEach((yKey) => {
//     let row = rows[yKey];
//     row.sort((a: GridItem, b: GridItem) => a.x - b.x);

//     let currentX = 0;

//     for (let obj of row) {
//       if (obj.x > currentX) {
//         console.log('in', obj.x, currentX, obj);
//         filledObjects.push({
//           ...obj,
//           x: currentX,
//           y: obj.y,
//           w: obj.x - currentX,
//           h: obj.h,
//           config: {
//             ...obj?.config,
//             name: 'unknown',
//             inputType: 'unknown',
//             // [convertCurrentBreakpointClass(breakpoint)]: convertColumn(breakpoint, obj.x - currentX),
//             colSpan: convertTwinMacroCss(obj.x - currentX),
//           },
//         });
//       }
//       console.log('out', obj.x, currentX, obj);
//       filledObjects.push(obj);
//       currentX = obj.x + obj.w;
//     }

//     if (currentX < rowWidth) {
//       filledObjects.push({
//         ...objects[0],
//         x: currentX,
//         y: parseInt(yKey),
//         w: rowWidth - currentX,
//         h: row[0].h,
//         config: {
//           ...objects[0]?.config,
//           name: 'unknown',
//           inputType: 'unknown',
//           colSpan: convertTwinMacroCss(rowWidth - currentX),
//           // [convertCurrentBreakpointClass(breakpoint)]: convertColumn(breakpoint, rowWidth - currentX),
//         },
//       });
//     }
//   });

//   return filledObjects;
// }
