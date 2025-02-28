// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { useCallback, useEffect, useMemo, useState } from 'react';
// import tw from 'twin.macro';
// import { InputRender, MEInputGroup } from '../shared/MEInputGroup';
// import React from 'react';
// // import { MEInputGroup } from '../shared/MEInputGroup';
// import { useFormHandler } from '~root/hooks';
// import * as yup from 'yup';
// import { Layout, Responsive, WidthProvider } from 'react-grid-layout';
// import 'react-grid-layout/css/styles.css';
// import './index.css';
// // import 'react-resizable/css/styles.css';
// import _ from 'lodash';
// import { FormProvider } from 'react-hook-form';
// import {
//   convertColumn,
//   convertColumnTailwind,
//   convertCurrentBreakpointClass,
//   convertGapXTwinMacroCss,
//   convertGapYTwinMacroCss,
//   convertTwinMacroCss,
//   fillGaps,
// } from './utils';
// import { Resizable, SideBar } from './components';
// import { Breakpoint, ContainerStyle, GridItem } from './types';
// export type CustomEvent = Event & { dataTransfer: DataTransfer };

// export const FormPage = () => {
//   const ResponsiveReactGridLayout = useMemo(() => WidthProvider(Responsive), []);
//   const [formStructure, setFormStructure] = useState([
//     {
//       label: <div tw="text-[0.9375rem] text-[black] font-normal leading-[1rem]">Old Password</div>,
//       name: 'oldPassword',
//       inputType: 'PasswordField',
//       validate: yup.string().required('require'),
//       colSpan: tw`col-span-1`,
//       fullWidth: true,
//       size: 'small',
//     },
//   ]);

//   const {
//     formHandler,
//     formStructure: formStructureCustom,
//     setFormStructure: setFormStructureCustom,
//   } = useFormHandler<any>([]);
//   const [newCounter, setNewCounter] = useState(1);
//   const [containerStyle, setContainerStyle] = useState<ContainerStyle>({
//     gapX: 0,
//     gapY: 0,
//     column: 12,
//     sm: 12,
//     md: 12,
//     lg: 12,
//   });
//   const [isColumnChange, setIsColumnChange] = useState<boolean>(false);

//   const [layouts, setLayouts] = useState<{ [index: string]: any[] }>({
//     lg: [
//       {
//         x: 0,
//         y: 0,
//         w: 1,
//         h: 1,
//         i: '0',
//         // config: {
//         //   label: <div tw="text-[0.9375rem] text-[black] font-normal leading-[1rem]">Old Password</div>,
//         //   name: 'oldPassword',
//         //   inputType: 'PasswordField',
//         //   validate: yup.string().required('require'),
//         //   colSpan: tw`col-span-1`,
//         //   fullWidth: true,
//         //   size: 'small',
//         // },
//       },
//     ],
//   });
//   const [currentBreakpoint, setCurrentBreakpoint] = useState<Breakpoint>('lg');
//   const [compactType] = useState<string | null>('vertical');
//   const [mounted, setMounted] = useState(false);
//   const [toolbox, setToolbox] = useState<{ [index: string]: any[] }>({
//     lg: [],
//   });

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   const onBreakpointChange = (breakpoint: Breakpoint) => {
//     setCurrentBreakpoint(breakpoint);
//   };

//   // const onCompactTypeChange = () => {
//   //   const oldCompactType = '';

//   //   const compactType =
//   //     oldCompactType === 'horizontal' ? 'vertical' : oldCompactType === 'vertical' ? null : 'horizontal';
//   //   setCompactType(compactType);
//   // };

//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   const onDrop = (__: any, layoutItem: any, _ev: CustomEvent) => {
//     console.log('onAddItem', currentBreakpoint);
//     onAddItem(layoutItem, _ev?.dataTransfer.getData('text/plain'), currentBreakpoint);
//   };
//   const handleApply = () => {
//     setFormStructureCustom((prev) => {
//       console.log('prev', [...prev]);
//       console.log('current', [
//         ...fillGaps(layouts.lg, containerStyle.column)
//           .sort((a: GridItem, b: GridItem) => a.y * 10 + a.x - (b.y * 10 + b.x))
//           .map((item: GridItem) => item.config),
//       ]);
//       return [
//         ...fillGaps(layouts.lg, containerStyle.column)
//           .sort((a: GridItem, b: GridItem) => a.y * 10 + a.x - (b.y * 10 + b.x))
//           .map((item: GridItem) => item.config),
//       ];
//     });
//   };
//   const handleContainerStyle = (value: string | number, gapType: keyof ContainerStyle) => {
//     setContainerStyle((prev) => ({
//       ...prev,
//       [gapType]: value,
//     }));
//     gapType === 'column' && setIsColumnChange(true);
//   };
//   const onLayoutChange = (curLayout: any, layout: any) => {
//     // if (isColumnChange) {
//     //   saveLayout([
//     //     ...curLayout.map((item: GridItem, index: number) => ({
//     //       ...item,
//     //       config: {
//     //         ...layouts.lg?.[index]?.config,
//     //         lg: convertTwinMacroCss(item.w),
//     //         // [convertCurrentBreakpointClass(currentBreakpoint)]: convertColumn(currentBreakpoint, item.w),
//     //       },
//     //     })),
//     //   ]);
//     //   setIsColumnChange(false);
//     // }
//     setLayouts({ ...layout });
//   };

//   const onAddItem = useCallback(
//     (layoutItem: any, type: string, breakpoint: 'sm' | 'md' | 'lg') => {
//       layoutItem.i = newCounter.toString();
//       setFormStructure((prev) => {
//         return [
//           ...prev,
//           {
//             label: <div tw="text-[0.9375rem] text-[black] font-normal leading-[1rem]">Empty</div>,
//             name: newCounter.toString(),
//             inputType: type,
//             validate: yup.string().required('require'),
//             colSpan: tw`col-span-2`,
//             fullWidth: true,
//             size: 'small',
//             labelCss: tw`text-[0.9375rem] font-normal leading-[1rem]`,
//           },
//         ];
//       });
//       // setLayouts((prevItems) => {
//       //   return {
//       //     ...prevItems,
//       //     [breakpoint]: [
//       //       ...prevItems.lg,
//       //       {
//       //         ...layoutItem,
//       //         // config: {
//       //         //   label: <div tw="text-[0.9375rem] text-[black] font-normal leading-[1rem]">Empty</div>,
//       //         //   name: newCounter.toString(),
//       //         //   inputType: type,
//       //         //   validate: yup.string().required('require'),
//       //         //   colSpan: tw`col-span-2`,
//       //         //   fullWidth: true,
//       //         //   size: 'small',
//       //         //   labelCss: tw`text-[0.9375rem] font-normal leading-[1rem]`,
//       //         // },
//       //       },
//       //     ],
//       //   };
//       // });

//       // setLayouts((prevItems) => {
//       //   return {
//       //     ...prevItems,
//       //     [breakpoint]: [
//       //       ...prevItems.lg,
//       //       {
//       //         ...layoutItem,
//       //         // config: {
//       //         //   label: <div tw="text-[0.9375rem] text-[black] font-normal leading-[1rem]">Empty</div>,
//       //         //   name: newCounter.toString(),
//       //         //   inputType: type,
//       //         //   validate: yup.string().required('require'),
//       //         //   colSpan: tw`col-span-2`,
//       //         //   fullWidth: true,
//       //         //   size: 'small',
//       //         //   labelCss: tw`text-[0.9375rem] font-normal leading-[1rem]`,
//       //         // },
//       //       },
//       //     ],
//       //   };
//       // });

//       setNewCounter(newCounter + 1);
//     },
//     [newCounter],
//   );
//   // console.log('formStructureCustom', formStructureCustom);
//   // console.log('layouts', layouts);
//   // const generateDOM = () => {
//   //   return formStructure.map((field, i) => {
//   //     return (
//   //       <div key={i} style={{ background: '#ccc' }}>
//   //         <InputRender {...field} defaultValues={'defaultValues'} disabled={false} />
//   //       </div>
//   //     );
//   //   });
//   // };
//   const generateDOM = useMemo(() => {
//     return _.map(formStructure, function (l, i) {
//       return (
//         <div key={i} style={{ background: '#ccc' }}>
//           <InputRender {...l} defaultValues={''} disabled={false} />
//         </div>
//       );
//     });
//   }, [layouts]);

//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   const saveLayout = (newItem: Layout[]) => {
//     console.log('test');
//     setLayouts((prev) => {
//       return {
//         ...prev,
//         [currentBreakpoint]: newItem,
//       };
//     });
//   };
//   const generateGapX = useMemo(() => {
//     return convertGapXTwinMacroCss(containerStyle.gapX);
//   }, [formStructureCustom]);
//   const generateGapY = useMemo(() => {
//     return convertGapYTwinMacroCss(containerStyle.gapY);
//   }, [formStructureCustom]);
//   const generateColumn = useMemo(() => {
//     return convertColumnTailwind(containerStyle.column);
//   }, [formStructureCustom]);
//   console.log(layouts, currentBreakpoint);

//   // console.log('layouts, formStructureCustom', layouts, formStructureCustom);
//   // console.log(fillGaps(layouts.lg, containerStyle.column));

//   return (
//     <div tw="flex h-[100vh] font-sans">
//       <SideBar handleApply={handleApply} containerStyle={containerStyle} handleContainerStyle={handleContainerStyle} />
//       {/* <div tw="w-full h-full"> */}
//       {/* <Resizable> */}
//       {/* <div className="playground_view "> */}
//       <div tw="p-4 pt-[47px] w-full border border-[#ccc] border-solid ">
//         {/* <button onClick={handleApply}>Apply</button> */}
//         <div tw="mb-4 sm:text-[red] md:text-[black] lg:text-[pink]">Current Breakpoint: {currentBreakpoint}</div>
//         <MEInputGroup
//           formStructure={formStructureCustom}
//           formHandler={formHandler}
//           spacingX={generateGapX}
//           spacingY={generateGapY}
//           gridCols={generateColumn}
//         />

//         <FormProvider {...formHandler}>
//           <ResponsiveReactGridLayout
//             // {...props}
//             style={{ background: '#f0f0f0' }}
//             layouts={layouts}
//             measureBeforeMount={false}
//             useCSSTransforms={mounted}
//             droppingItem={{ i: 'droppingItem', w: 2, h: 1 }}
//             // breakpoints={{
//             //   lg: 1800,
//             //   md: 1568,
//             //   sm: 1376,
//             //   xs: 480,
//             //   xss: 320,
//             // }}
//             onDragStop={(layoutsAfterResize) =>
//               saveLayout([
//                 ...layoutsAfterResize.map((item, index) => ({
//                   ...item,
//                   config: {
//                     // ...layouts?.[currentBreakpoint]?.[index].config,
//                     ...layouts?.lg?.[index].config,
//                   },
//                 })),
//               ])
//             }
//             // eslint-disable-next-line @typescript-eslint/no-explicit-any
//             // compactType={compactType as any}
//             preventCollision={!compactType}
//             onLayoutChange={onLayoutChange}
//             onBreakpointChange={onBreakpointChange}
//             onDrop={onDrop}
//             isDroppable
//             rowHeight={64}
//             margin={[containerStyle.gapX, containerStyle.gapY]}
//             containerPadding={[0, 10]}
//             // maxRows={1}
//             // compactType={'horizontal'}
//             cols={{
//               lg: containerStyle.column,
//               md: containerStyle.column,
//               sm: containerStyle.column,
//               xs: containerStyle.column,
//               xss: 6,
//             }}
//             onResizeStop={(layoutsAfterResize) =>
//               saveLayout([
//                 ...layoutsAfterResize.map((item, index) => ({
//                   ...item,
//                   config: {
//                     // ...layouts?.['lg']?.[index].config,
//                     // ...layouts?.['sm']?.[index].config,
//                     // ...layouts?.['md']?.[index].config,
//                     ...layouts.lg?.[index].config,
//                     colSpan: convertTwinMacroCss(item.w),
//                     // convertColumn(currentBreakpoint, item.w),
//                   },
//                 })),
//               ])
//             }
//           >
//             {generateDOM}
//           </ResponsiveReactGridLayout>
//         </FormProvider>
//       </div>
//       {/* </div> */}
//       {/* </Resizable> */}
//     </div>
//     // </div>
//   );
// };
