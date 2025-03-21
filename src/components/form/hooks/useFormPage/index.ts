import { useCallback, useEffect, useMemo, useState } from 'react';
import { Layout, Layouts, Responsive, WidthProvider } from 'react-grid-layout';
import { ThemeConfig, useFormHandler } from '~root/hooks';
import { Breakpoint, BreakpointEnum, ContainerStyle, TypeInput } from '../../types';
import {
  convertColStart,
  convertColumn,
  convertColumnByBreakpoint,
  convertGap,
  convertGapXTwinMacroCss,
  convertGapYTwinMacroCss,
  convertNumberRow,
  convertOrder,
  convertRow,
  convertRowStart,
} from '../../utils';
import { toast } from 'react-toastify';
import { FormInputGenericProps } from '~root/components/shared/MEInputGroup/types';

export type CustomEvent = Event & { dataTransfer: DataTransfer };

interface UseFormPageProps {
  themeConfig: ThemeConfig;
  setThemeConfig: (config: ThemeConfig) => void;
}
export type FormInputGenericLayoutProps = FormInputGenericProps & {
  i: string;
  height?: number;
};
export interface LayoutTransform {
  x: number;
  y: number;
  w: number;
  h: number;
}
export interface TransformBreakpointArray {
  i: string;
  lg?: LayoutTransform;
  md?: LayoutTransform;
  sm?: LayoutTransform;
  xs?: LayoutTransform;
}

const STORAGE_KEY = 'form_page_state';

export const useFormPage = ({ setThemeConfig, themeConfig }: UseFormPageProps) => {
  const ResponsiveReactGridLayout = useMemo(() => WidthProvider(Responsive), []);

  const initContainerStyle = { gapX: 0, gapY: 0, column: 12, xs: 12, sm: 12, md: 12, lg: 12, row: '' };
  const initLayouts = { lg: [], md: [], sm: [], xs: [] };
  // Load initial state from localStorage
  const loadInitialState = (): {
    formStructure: FormInputGenericLayoutProps[];
    layouts: { [index: string]: Layout[] };
    containerStyle: ContainerStyle;
    formStructureCustom: FormInputGenericProps[];
  } => {
    const savedState = localStorage.getItem(STORAGE_KEY);
    if (savedState) {
      const {
        formStructure: savedFormStructure,
        layouts: savedLayouts,
        containerStyle: savedContainerStyle,
        formStructureCustom: savedFormStructureCustom,
      } = JSON.parse(savedState);
      return {
        formStructure: savedFormStructure || [],
        layouts: savedLayouts || initLayouts,
        containerStyle: savedContainerStyle || initContainerStyle,
        formStructureCustom: savedFormStructureCustom || [],
      };
    }
    return {
      formStructure: [],
      layouts: initLayouts,
      containerStyle: initContainerStyle,
      formStructureCustom: [],
    };
  };

  const initialState = loadInitialState();
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [formStructure, setFormStructure] = useState<FormInputGenericLayoutProps[]>(initialState.formStructure);
  const [layouts, setLayouts] = useState<{ [index: string]: Layout[] }>(initialState.layouts);
  const [hasPendingChanges, setHasPendingChanges] = useState(false);
  const [newCounter, setNewCounter] = useState(0);
  const [containerStyle, setContainerStyle] = useState<ContainerStyle>(initialState.containerStyle);
  const [isColumnChange, setIsColumnChange] = useState<boolean>(false);
  const [, setIsBreakpointChange] = useState<boolean>(false);
  const [currentInput, setCurrentInput] = useState<FormInputGenericLayoutProps>();
  const [currentBreakpoint, setCurrentBreakpoint] = useState<Breakpoint>('lg');
  const [compactType] = useState<string | null>('vertical');
  const [mounted, setMounted] = useState(false);
  const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false);
  const [numberRow, setNumberRow] = useState<{ [index: string]: number }>({ lg: 0, md: 0, sm: 0, xs: 0 });

  const {
    formHandler,
    formStructure: formStructureCustom,
    setFormStructure: setFormStructureCustom,
  } = useFormHandler<FormInputGenericProps[]>(initialState.formStructureCustom);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSetHasPendingChange = (value: boolean) => {
    setHasPendingChanges(value);
  };

  const onBreakpointChange = (breakpoint: Breakpoint) => {
    setCurrentBreakpoint(breakpoint);
    setIsBreakpointChange(true);
  };

  const onDrop = (_: Layout[], layoutItem: Layout, _ev: CustomEvent) => {
    onAddItem(layoutItem, _ev?.dataTransfer.getData('text/plain') as TypeInput, currentBreakpoint);
  };

  const transformBreakpoint = () => {
    const breakpoints: Breakpoint[] = Object.keys(layouts || {}) as Breakpoint[];
    const array: TransformBreakpointArray[] = [];

    breakpoints.map((breakpoint: Breakpoint) => {
      layouts[breakpoint].map((layout: Layout) => {
        const indexArr = array.findIndex((item: TransformBreakpointArray) => item.i === layout.i);
        if (indexArr !== -1) {
          // array[indexArr][breakpoint] = convertColumn(breakpoint, layout.w);
          array[indexArr][breakpoint] = {
            x: layout.x,
            y: layout.y,
            h: layout.h,
            w: layout.w,
          };
        } else {
          array.push({
            i: layout.i,
            [breakpoint]: {
              x: layout.x,
              y: layout.y,
              w: layout.w,
              h: layout.h,
            },
          });
        }
      });
    });
    console.log(array);
    return array;
  };

  const handleNumberRow = () => {
    let maxRow = '';
    const breakpoints: Breakpoint[] = Object.keys(layouts || {}) as Breakpoint[];
    breakpoints.forEach((breakpoint: Breakpoint) => {
      maxRow =
        maxRow +
        ' ' +
        convertNumberRow(
          layouts?.[breakpoint]?.length > 0
            ? Math.max(...layouts[breakpoint].map((layout: Layout) => layout?.y + layout?.h))
            : 0,
          breakpoint,
        );
    });

    handleContainerStyle(maxRow, 'row');
  };

  const handleApply = () => {
    handleNumberRow();
    const result = transformBreakpoint().map((item: TransformBreakpointArray) => {
      const structure: FormInputGenericLayoutProps =
        formStructure.find((structure: FormInputGenericLayoutProps) => structure.i === item.i) ??
        ({} as FormInputGenericLayoutProps);
      const breakpoints: Breakpoint[] = ['md', 'lg', 'sm', 'xs'];
      let stringCss = '';
      const allCss = breakpoints.reduce((acc: { colSpan?: string }, breakpoint: Breakpoint) => {
        stringCss =
          stringCss +
          ' ' +
          convertColumn(breakpoint, item?.[breakpoint]?.w) +
          ' ' +
          convertOrder(breakpoint, (item?.[breakpoint]?.x || 0) + 1) +
          ' ' +
          convertRowStart(breakpoint, (item?.[breakpoint]?.y || 0) + 1) +
          ' ' +
          convertColStart(breakpoint, (item?.[breakpoint]?.x || 0) + 1) +
          ' ' +
          convertRow(breakpoint, item?.[breakpoint]?.h);

        acc['colSpan'] = stringCss.trim();

        return acc;
      }, {});
      const rowHeight = themeConfig?.containerCss?.rowHeight;

      return {
        ...structure,
        ...allCss,
        label: themeConfig?.label?.clear ? structure?.label : undefined,
        height: rowHeight,
      };
    });
    setFormStructureCustom(result);
    handleSetHasPendingChange(false);
  };

  const handleContainerStyle = (value: string | number, type: keyof ContainerStyle) => {
    setContainerStyle((prev) => ({
      ...prev,
      [type]: value,
    }));
    handleSetIsPendingChange();
    if ([(BreakpointEnum.XS, BreakpointEnum.SM, BreakpointEnum.MD, BreakpointEnum.LG)].includes(type as BreakpointEnum))
      setIsColumnChange(true);
  };
  const handleSetIsPendingChange = () => {
    if (!hasPendingChanges) {
      handleSetHasPendingChange(true);
    }
  };

  const onLayoutChange = (_: Layout[], layout: Layouts) => {
    if (isColumnChange) {
      setLayouts({ ...layout });
      setIsColumnChange(false);
      return;
    }
    if (isFirstRender) {
      setIsFirstRender(false);
    }
    const breakpoints = Object.keys(layout || {});
    const max = breakpoints.reduce((acc: { [index: string]: number }, breakpoint) => {
      acc[breakpoint] = layout[breakpoint]?.length > 0 ? Math.max(...layout[breakpoint].map((l) => l.y + l.h)) : 1;
      return acc;
    }, {});
    setNumberRow(max);
    if (!isFirstRender) handleSetIsPendingChange();
  };

  const onAddItem = useCallback(
    (layoutItem: Layout, type: TypeInput, breakpoint: Breakpoint) => {
      layoutItem.i = newCounter.toString();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      setFormStructure((prev: any) => {
        return [
          ...prev,
          {
            i: newCounter.toString(),
            label: themeConfig?.label?.clear ? newCounter.toString() : undefined,
            name: newCounter.toString(),
            inputType: type,
            colSpan: 'col-span-2',
            fullWidth: true,
            size: 'small',
            labelCss: 'text-[0.9375rem] font-normal leading-[1rem]',
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
    [newCounter, themeConfig?.label?.clear],
  );

  const handleEditFormStructure = (newFormStructure: FormInputGenericLayoutProps) => {
    setFormStructure((prev: FormInputGenericLayoutProps[]) => {
      const spreadNewFormStructure = [...prev];
      const index = spreadNewFormStructure.findIndex((item) => item.i === newFormStructure.i);
      spreadNewFormStructure[index] = newFormStructure;
      return spreadNewFormStructure;
    });
    handleSetIsPendingChange();
  };

  const handleRemoveInput = (i: string) => {
    setFormStructure((prev: FormInputGenericLayoutProps[]) => {
      const newArray = [...prev].filter((item: FormInputGenericLayoutProps) => item.i !== i);
      return newArray.map((item, index) => ({
        ...item,
        i: index + '',
      }));
    });
    setNewCounter(newCounter - 1);
    const breakpoints: Breakpoint[] = Object.keys(layouts) as Breakpoint[];
    setLayouts((prev) => {
      const result = breakpoints.reduce((acc: { [index: string]: Layout[] }, breakpoint: Breakpoint) => {
        const newArray = [...prev[breakpoint]].filter((item) => item.i !== i);
        acc[breakpoint] = [...newArray].map((item, index) => ({
          ...item,
          i: index + '',
        }));
        return acc;
      }, {});

      return result;
    });
  };

  const handleDialogEditInput = (item: FormInputGenericLayoutProps | undefined) => {
    setCurrentInput(item);
  };

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
    let string = '';
    Object.entries({
      xs: containerStyle?.xs,
      sm: containerStyle?.sm,
      md: containerStyle?.md,
      lg: containerStyle?.lg,
    }).forEach(([key, value]) => {
      string = string + ' ' + convertColumnByBreakpoint(key as Breakpoint, value);
    });
    return string;
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

  const handleSetThemeConfig = (themeConfigValue: ThemeConfig) => {
    setThemeConfig(themeConfigValue);
    const containerCss = Object.entries(themeConfigValue.containerCss).reduce((acc: string, [key, value]) => {
      acc = acc + ' ' + convertGap(key, value as string);
      return acc;
    }, '');
    setFormStructure((prev: FormInputGenericLayoutProps[]) => {
      const spreadNewFormStructure = [...prev].map((item) => {
        return {
          ...item,
          label: themeConfigValue?.label?.clear ? item?.label || 'Empty' : undefined,
          containerCss,
        };
      });
      return spreadNewFormStructure;
    });
  };
  const handleSelectThemeConfig = (themeConfigValue: ThemeConfig) => {
    setThemeConfig({ ...themeConfigValue });
  };

  const calculateRowHeight = useMemo(() => {
    return (
      themeConfig?.containerCss?.rowHeight +
      (themeConfig.label.clear ? Number(themeConfig?.label?.lineHeight) + Number(themeConfig?.containerCss?.gapY) : 0)
    );
  }, [
    themeConfig?.label?.clear,
    themeConfig?.label?.lineHeight,
    themeConfig?.containerCss?.gapY,
    themeConfig?.containerCss?.rowHeight,
  ]);

  const saveToLocalStorage = () => {
    const stateToSave = {
      formStructure,
      layouts,
      containerStyle,
      formStructureCustom,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stateToSave));
    toast.success('Save to local storage successfully');
  };

  const handleToggleConfirmDialog = useCallback(() => {
    setIsConfirmDialogOpen((prev) => !prev);
  }, [isConfirmDialogOpen]);

  const handleConfirmClear = useCallback(() => {
    // Clear localStorage
    localStorage.removeItem(STORAGE_KEY);

    // Reset states to initial empty values
    setFormStructure([]);
    setLayouts({
      lg: [],
      md: [],
      sm: [],
      xs: [],
    });
    setFormStructureCustom([]);
    setNewCounter(0);

    // Close dialog
    setIsConfirmDialogOpen(false);

    // Reload the page to ensure clean state
    window.location.reload();
  }, [setFormStructureCustom]);

  return {
    ResponsiveReactGridLayout,
    formStructure,
    hasPendingChanges,
    containerStyle,
    currentInput,
    layouts,
    currentBreakpoint,
    compactType,
    mounted,
    formHandler,
    formStructureCustom,
    handleSetHasPendingChange,
    onBreakpointChange,
    onDrop,
    handleApply,
    handleContainerStyle,
    onLayoutChange,
    handleEditFormStructure,
    handleRemoveInput,
    handleDialogEditInput,
    saveLayout,
    generateGapX,
    generateGapY,
    generateColumn,
    getBreakpointDetail,
    handleSetThemeConfig,
    calculateRowHeight,
    newCounter,
    saveToLocalStorage,
    isConfirmDialogOpen,
    handleToggleConfirmDialog,
    handleConfirmClear,
    handleSelectThemeConfig,
    numberRow,
  };
};
