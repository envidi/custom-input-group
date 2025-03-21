/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo } from 'react';
import 'twin.macro';
import { InputRender, MEInputGroup } from '../shared/MEInputGroup';
import React from 'react';
import { ThemeConfig } from '~root/hooks';
import 'react-grid-layout/css/styles.css';
import './index.css';
import _ from 'lodash';
import { FormProvider } from 'react-hook-form';

import { DialogEditConfigInput, SideBar } from './components';
import { useFormPage } from './hooks/useFormPage';
export type CustomEvent = Event & { dataTransfer: DataTransfer };
interface Props {
  themeConfig: ThemeConfig;
  setThemeConfig: (config: ThemeConfig) => void;
}

export const FormPage = ({ setThemeConfig, themeConfig }: Props) => {
  const {
    formStructureCustom,
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
    formStructure,
    layouts,
    containerStyle,
    hasPendingChanges,
    currentBreakpoint,
    formHandler,
    mounted,
    ResponsiveReactGridLayout,
    newCounter,
    currentInput,
    compactType,
    saveToLocalStorage,
    isConfirmDialogOpen,
    handleToggleConfirmDialog,
    handleConfirmClear,
    handleSelectThemeConfig,
    numberRow,
  } = useFormPage({ setThemeConfig, themeConfig });
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
          <InputRender {...item} disabledError defaultValues={undefined} disabled={false} />
        </div>
      );
    });
  }, [layouts, formStructure]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  return (
    <div tw="flex h-[100vh] font-sans">
      <SideBar
        handleApply={handleApply}
        containerStyle={containerStyle}
        handleContainerStyle={handleContainerStyle}
        handleEditFormInput={handleSetThemeConfig}
        themeConfig={themeConfig}
        hasPendingChanges={hasPendingChanges}
        saveToLocalStorage={saveToLocalStorage}
        isConfirmDialogOpen={isConfirmDialogOpen}
        handleToggleConfirmDialog={handleToggleConfirmDialog}
        handleConfirmClear={handleConfirmClear}
        handleSelectThemeConfig={handleSelectThemeConfig}
      />
      <div tw="pt-[47px] w-full border border-[#ccc] border-solid">
        <div tw="flex gap-2 items-center">
          <div tw="mb-4">
            Current Breakpoint:{' '}
            <span tw="text-[green] sm:text-[#5452ee] md:text-[#5cffe4] lg:text-[#e05353]">
              {currentBreakpoint + ' ' + getBreakpointDetail}
            </span>
          </div>
          <div tw="mb-4">
            Number Row:{' '}
            {`lg:${numberRow?.lg} - md:${numberRow?.md > 0 ? numberRow?.md : 0} - sm:${numberRow?.sm > 0 ? numberRow?.sm : 0} - xs:${numberRow?.xs > 0 ? numberRow?.xs : 0}`}
          </div>
        </div>

        <FormProvider {...formHandler}>
          <ResponsiveReactGridLayout
            style={{ background: '#C9C9C9' }}
            tw="[& .react-grid-item]:(!bg-[white])"
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
            preventCollision={!compactType}
            onLayoutChange={onLayoutChange}
            onBreakpointChange={onBreakpointChange}
            onDrop={onDrop}
            isDroppable
            rowHeight={calculateRowHeight}
            margin={[containerStyle.gapX, containerStyle.gapY]}
            containerPadding={[0, 10]}
            compactType={null}
            cols={{
              lg: containerStyle?.lg,
              md: containerStyle?.md,
              sm: containerStyle?.sm,
              xs: containerStyle?.xs,
              xss: 6,
            }}
            onResizeStop={(layoutsAfterResize) => saveLayout([...layoutsAfterResize])}
          >
            {generateDOM}
          </ResponsiveReactGridLayout>
        </FormProvider>
        <div className="my-4 text-[20px] font-semibold">Preview</div>
        {Object.keys(formStructureCustom || {}).length > 0 ? (
          <MEInputGroup
            formStructure={formStructureCustom}
            formHandler={formHandler}
            spacingX={generateGapX}
            spacingY={generateGapY}
            gridCols={generateColumn}
            rows={containerStyle.row}
          />
        ) : (
          <div>Apply to show a preview.</div>
        )}
      </div>
      <DialogEditConfigInput
        item={currentInput}
        setItem={handleDialogEditInput}
        handleEditFormStructure={handleEditFormStructure}
      />
    </div>
  );
};
