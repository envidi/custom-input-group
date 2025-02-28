/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useMemo, useState } from 'react';
import tw from 'twin.macro';
import { InputRender, MEInputGroup } from '../shared/MEInputGroup';
import React from 'react';
// import { MEInputGroup } from '../shared/MEInputGroup';
import { useFormHandler } from '~root/hooks';
import * as yup from 'yup';
import { Layout, Responsive, WidthProvider } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import './index.css';
// import 'react-resizable/css/styles.css';
import _ from 'lodash';
import { FormProvider } from 'react-hook-form';
import {
  convertColStart,
  convertColStartXs,
  convertColumn,
  convertColumnTailwind,
  convertColumnXs,
  convertGapXTwinMacroCss,
  convertGapYTwinMacroCss,
  convertNumberRow,
  convertOrder,
  convertOrderXs,
  convertRow,
  convertRowStart,
  convertRowStartXs,
  convertTwinMacroCss,
  fillGaps,
} from './utils';
import { DialogEditConfigInput, Resizable, SideBar } from './components';
import { Breakpoint, ContainerStyle } from './types';
export type CustomEvent = Event & { dataTransfer: DataTransfer };

export const FormPage = () => {
  const ResponsiveReactGridLayout = useMemo(() => WidthProvider(Responsive), []);
  const [formStructure, setFormStructure] = useState<any>([]);

  const {
    formHandler,
    formStructure: formStructureCustom,
    setFormStructure: setFormStructureCustom,
  } = useFormHandler<any>([
    // {
    //   label: <div tw="text-[0.9375rem] text-[black] font-normal leading-[1rem]">Old Password1</div>,
    //   name: 'oldPassword',
    //   inputType: 'PasswordField',
    //   validate: yup.string().required('require'),
    //   colSpan: 'col-span-1 lg:order-1 lg:col-start-1 lg:col-end-2 lg:row-1 lg:row-3',
    //   fullWidth: true,
    //   size: 'small',
    // },
    // {
    //   label: <div tw="text-[0.9375rem] text-[black] font-normal leading-[1rem]">Old Password1</div>,
    //   name: 'oldPassword',
    //   inputType: 'PasswordField',
    //   validate: yup.string().required('require'),
    //   colSpan: 'col-span-1 lg:order-2 lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-span-1',
    //   fullWidth: true,
    //   size: 'small',
    // },
    // {
    //   label: <div tw="text-[0.9375rem] text-[black] font-normal leading-[1rem]">Old Password</div>,
    //   name: 'oldPassword',
    //   inputType: 'PasswordField',
    //   validate: yup.string().required('require'),
    //   colSpan: 'col-span-2  lg:order-5 lg:col-start-5 lg:row-start-3 lg:row-span-1',
    //   fullWidth: true,
    //   size: 'small',
    // },
    // {
    //   label: <div tw="text-[0.9375rem] text-[black] font-normal leading-[1rem]">Old Password</div>,
    //   name: 'oldPassword',
    //   inputType: 'PasswordField',
    //   validate: yup.string().required('require'),
    //   colSpan: tw`col-span-2 lg:order-2 lg:col-start-2`,
    //   fullWidth: true,
    //   size: 'small',
    // },
  ]);
  const [newCounter, setNewCounter] = useState(0);
  const [containerStyle, setContainerStyle] = useState<ContainerStyle>({
    gapX: 0,
    gapY: 0,
    column: 12,
    sm: 12,
    md: 12,
    lg: 12,
  });
  const [isColumnChange, setIsColumnChange] = useState<boolean>(false);
  const [row, setRow] = useState({ numberRow: { lg: 1, md: 1, sm: 1 }, css: '' });
  const [isBreakpointChange, setIsBreakpointChange] = useState<boolean>(false);
  const [currentInput, setCurrentInput] = useState<any>();

  const [layouts, setLayouts] = useState<{ [index: string]: any[] }>({
    lg: [],
    md: [],
    sm: [],
    xs: [],
  });
  const [currentBreakpoint, setCurrentBreakpoint] = useState<Breakpoint>('lg');
  const [compactType] = useState<string | null>('vertical');
  const [mounted, setMounted] = useState(false);
  const [toolbox, setToolbox] = useState<{ [index: string]: any[] }>({
    lg: [],
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const onBreakpointChange = (breakpoint: Breakpoint) => {
    setCurrentBreakpoint(breakpoint);
    setIsBreakpointChange(true);
  };

  // const onCompactTypeChange = () => {
  //   const oldCompactType = '';

  //   const compactType =
  //     oldCompactType === 'horizontal' ? 'vertical' : oldCompactType === 'vertical' ? null : 'horizontal';
  //   setCompactType(compactType);
  // };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onDrop = (__: any, layoutItem: any, _ev: CustomEvent) => {
    onAddItem(layoutItem, _ev?.dataTransfer.getData('text/plain'), currentBreakpoint);
  };
  const transformBreakpoint = () => {
    const breakpoints: Breakpoint[] = Object.keys(layouts || {}) as Breakpoint[];
    const array: any = [];

    breakpoints.map((breakpoint: Breakpoint) => {
      layouts[breakpoint].map((layout) => {
        const indexArr = array.findIndex((item: any) => item.i === layout.i);
        if (indexArr !== -1) {
          array[indexArr][breakpoint] = convertColumn(breakpoint, layout.w);
          array[indexArr][breakpoint] = {
            x: layout.x,
            y: layout.y,
            h: layout.h,
            w: layout.w,
            // css: convertColumn(breakpoint, layout.w),
          };
        } else {
          array.push({
            i: layout.i,
            [breakpoint]: {
              // css: convertColumn(breakpoint, layout.w),
              x: layout.x,
              y: layout.y,
              w: layout.w,
              h: layout.h,
            },
          });
        }
      });
    });
    return array;
  };
  const handleNumberRow = () => {
    let maxRow = '';
    let numberRow: any = {};
    const breakpoints = Object.keys(layouts || {});
    breakpoints.forEach((breakpoint: any) => {
      maxRow =
        maxRow +
        ' ' +
        convertNumberRow(Math.max(...layouts?.[breakpoint]?.map((layout) => layout?.y + layout?.h)), breakpoint);
      numberRow[breakpoint] = Math.max(...layouts?.[breakpoint]?.map((layout) => layout?.y + layout?.h));
    });
    setRow({ css: maxRow, numberRow });
  };
  const handleApply = () => {
    // console.log(transformBreakpoint());
    handleNumberRow();
    const result = transformBreakpoint().map((item: any) => {
      const structure = formStructure.find((structure: any) => structure.i === item.i);
      const breakpoints = ['md', 'lg', 'sm', 'xs'];
      let stringCss = '';
      const allCss = breakpoints.reduce((acc: any, breakpoint: any) => {
        // numberRow = numberRow + convertNumberRow(breakpoint);

        stringCss =
          stringCss +
          ' ' +
          convertColumn(breakpoint, item?.[breakpoint]?.w) +
          ' ' +
          convertOrder(breakpoint, item[breakpoint]?.x + 1) +
          ' ' +
          convertRowStart(breakpoint, item[breakpoint]?.y + 1) +
          ' ' +
          convertColStart(breakpoint, item[breakpoint]?.x + 1) +
          ' ' +
          convertRow(breakpoint, item[breakpoint]?.h);

        acc['colSpan'] = stringCss.trim();
        // acc['colSpanXs'] = convertColumnXs(breakpoint, item?.[breakpoint]?.w);
        // acc['orderXs'] = convertOrderXs(breakpoint, item[breakpoint]?.x + 1);
        // acc['rowStartXs'] = convertRowStartXs(breakpoint, item[breakpoint]?.y + 1);
        // acc['colStartXs'] = convertColStartXs(breakpoint, item[breakpoint]?.x + 1);

        return acc;
      }, {});

      return {
        ...structure,
        ...allCss,
      };
    });
    setFormStructureCustom(result);
    console.log('formStructureCustom', formStructureCustom);
    console.log('transformBreakpoint()', transformBreakpoint());
  };
  const handleContainerStyle = (value: string | number, gapType: keyof ContainerStyle) => {
    setContainerStyle((prev) => ({
      ...prev,
      [gapType]: value,
    }));
    gapType === 'column' && setIsColumnChange(true);
  };
  const onLayoutChange = (curLayout: any, layout: any) => {
    if (isColumnChange) {
      setLayouts({ ...layout });
      setIsColumnChange(false);
      return;
    }
    // if (isBreakpointChange) {
    //   setIsBreakpointChange(false);
    // }
    // console.log('layouts in', layout);
    // console.log('layouts out', layouts);
    // if (isRemove) {
    //   setLayouts({ ...layout });
    //   setIsRemove(false);
    // }
    // setLayouts({ ...layout });
  };

  const onAddItem = useCallback(
    (layoutItem: any, type: string, breakpoint: 'sm' | 'md' | 'lg') => {
      layoutItem.i = newCounter.toString();
      setFormStructure((prev: any) => {
        return [
          ...prev,
          {
            i: newCounter.toString(),
            label: <div tw="text-[0.9375rem] text-[black] font-normal leading-[1rem]">{newCounter.toString()}</div>,
            name: newCounter.toString(),
            inputType: type,
            validate: yup.string().required('require'),
            colSpan: tw`col-span-2`,
            fullWidth: true,
            size: 'small',
            labelCss: tw`text-[0.9375rem] font-normal leading-[1rem]`,
          },
        ];
      });

      setLayouts((prevItems) => {
        return {
          ...prevItems,
          [breakpoint]: [
            ...(prevItems?.[breakpoint] || []),
            {
              ...layoutItem,
            },
          ],
        };
      });

      setNewCounter(newCounter + 1);
    },
    [newCounter],
  );
  const handleRemoveInput = (i: any) => {
    setFormStructure((prev: any) => {
      const newArray = [...prev].filter((item: any) => item.i !== i);
      return newArray.map((item, index) => ({
        ...item,
        i: index + '',
      }));
    });
    setNewCounter(newCounter - 1);
    const breakpoints = Object.keys(layouts);
    setLayouts((prev) => {
      const result = breakpoints.reduce((acc: any, breakpoint: any) => {
        const newArray = [...prev[breakpoint]].filter((item) => item.i !== i);
        acc[breakpoint] = [...newArray].map((item, index) => ({
          ...item,
          i: index + '',
        }));
        return acc;
      }, {});

      return result;
    });
    // setIsRemove(true);
  };
  const handleDialogEditInput = (item: any) => {
    // const
    setCurrentInput(item);
  };
  // console.log('layouts', layouts);
  // const generateDOM = () => {
  //   return formStructure.map((field, i) => {
  //     return (
  //       <div key={i} style={{ background: '#ccc' }}>
  //         <InputRender {...field} defaultValues={'defaultValues'} disabled={false} />
  //       </div>
  //     );
  //   });
  // };
  const generateDOM = useMemo(() => {
    return _.map(formStructure, function (item, i) {
      return (
        <div key={i} style={{ background: '#ccc', position: 'relative' }} className="group">
          <div tw="absolute top-[-20px]  w-[100px] h-[20px] bg-slate-200  hidden gap-3 group-hover:flex z-[1000]">
            <div tw="cursor-pointer" onClick={() => handleRemoveInput(item.i)}>
              Remove
            </div>
            <div tw="cursor-pointer" onClick={() => handleDialogEditInput(item)}>
              Edit
            </div>
          </div>
          <InputRender {...(item as any)} defaultValues={''} disabled={false} />
        </div>
      );
    });
  }, [layouts]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const saveLayout = (newItem: Layout[]) => {
    setLayouts((prev) => {
      return {
        ...prev,
        [currentBreakpoint]: newItem,
      };
    });
  };
  const generateGapX = useMemo(() => {
    return convertGapXTwinMacroCss(containerStyle.gapX);
  }, [formStructureCustom]);
  const generateGapY = useMemo(() => {
    return convertGapYTwinMacroCss(containerStyle.gapY);
  }, [formStructureCustom]);
  const generateColumn = useMemo(() => {
    return convertColumnTailwind(containerStyle.column);
  }, [formStructureCustom]);
  const getBreakpointDetail = useMemo(() => {
    const breakpointDetail = {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
    };
    return breakpointDetail?.[currentBreakpoint] || 'This breakpoint is not exist';
  }, [currentBreakpoint]);
  // console.log('layouts out', layouts);

  // console.log('layouts, formStructureCustom', layouts, formStructureCustom);
  // console.log(fillGaps(layouts.lg, containerStyle.column));
  console.log(row);

  return (
    <div tw="flex h-[100vh] font-sans">
      <SideBar handleApply={handleApply} containerStyle={containerStyle} handleContainerStyle={handleContainerStyle} />
      {/* <div tw="w-full h-full"> */}
      {/* <Resizable> */}
      {/* <div className="playground_view "> */}
      <div tw=" pt-[47px] w-full border border-[#ccc] border-solid ">
        {/* <button onClick={handleApply}>Apply</button> */}
        <div tw="flex gap-2">
          <div tw="mb-4 ">
            Current Breakpoint:{' '}
            <span tw="text-[green] sm:text-[#5452ee] md:text-[#5cffe4] lg:text-[#e05353]">
              {currentBreakpoint + ' ' + getBreakpointDetail}
            </span>
          </div>
          <div tw="mb-4 ">
            Number Row: <span tw="text-[green] sm:text-[#5452ee] md:text-[#5cffe4] lg:text-[#e05353]">{row.css}</span>
          </div>
        </div>
        <MEInputGroup
          formStructure={formStructureCustom}
          formHandler={formHandler}
          spacingX={generateGapX}
          spacingY={generateGapY}
          gridCols={generateColumn}
          rows={row.css}
          // height={`h-[${row.numberRow?.[currentBreakpoint] * 64}px]`}
        />

        <FormProvider {...formHandler}>
          <ResponsiveReactGridLayout
            style={{ background: '#f0f0f0' }}
            layouts={layouts}
            measureBeforeMount={false}
            useCSSTransforms={mounted}
            droppingItem={{ i: newCounter.toString(), w: 2, h: 1 }}
            // breakpoints={{
            //   lg: 790,
            //   md: 667,
            //   sm: 576,
            //   xs: 480,
            //   xss: 320,
            // }}
            breakpoints={{
              lg: 1021 - 200,
              md: 765 - 200,
              sm: 637 - 200,
              xs: 480 - 200,
            }}
            onDragStop={(layoutsAfterResize) => {
              saveLayout([...layoutsAfterResize]);
            }}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            // compactType={compactType as any}
            preventCollision={!compactType}
            onLayoutChange={onLayoutChange}
            onBreakpointChange={onBreakpointChange}
            onDrop={onDrop}
            isDroppable
            rowHeight={64}
            margin={[containerStyle.gapX, containerStyle.gapY]}
            containerPadding={[0, 10]}
            // maxRows={1}
            compactType={null}
            cols={{
              lg: containerStyle.column,
              md: containerStyle.column,
              sm: containerStyle.column,
              xs: containerStyle.column,
              xss: 6,
            }}
            onResizeStop={(layoutsAfterResize) => saveLayout([...layoutsAfterResize])}
          >
            {generateDOM}
          </ResponsiveReactGridLayout>
        </FormProvider>
      </div>
      {/* </div> */}
      {/* </Resizable> */}
      <DialogEditConfigInput open={currentInput} setOpen={} />
    </div>
    // </div>
  );
};
