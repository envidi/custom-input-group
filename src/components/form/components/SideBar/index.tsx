/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { a11yProps } from '../../utils';
import { Box, Tab, Tabs } from '@mui/material';
import { CustomTabPanel } from '../CustomTabPanel';
import { ListInput, Styles } from './components';
import { ContainerStyle } from '../../types';
import 'twin.macro';
import { ThemeConfig } from '~root/hooks';
import { DialogEditConfigInputs } from '../DialogEditConfigInputs';
import { useEventListener } from '../../hooks';

interface Props {
  handleApply: () => void;
  containerStyle: ContainerStyle;
  handleContainerStyle: (value: string | number, gapType: keyof ContainerStyle) => void;
  handleEditFormInput: (config: ThemeConfig) => void;
  themeConfig: ThemeConfig;
  hasPendingChanges: boolean;
  saveToLocalStorage: () => void;
  isConfirmDialogOpen: boolean;
  handleToggleConfirmDialog: () => void;
  handleConfirmClear: () => void;
  handleSelectThemeConfig: (args: ThemeConfig) => void;
}

export const SideBar = ({
  handleApply,
  containerStyle,
  handleContainerStyle,
  handleEditFormInput,
  themeConfig,
  hasPendingChanges,
  saveToLocalStorage,
  isConfirmDialogOpen,
  handleToggleConfirmDialog,
  handleConfirmClear,
  handleSelectThemeConfig,
}: Props) => {
  const [value, setValue] = React.useState(0);
  const [isOpen, setIsOpen] = React.useState(false);

  useEventListener('modal-event', ({ action }) => {
    switch (action) {
      case 'open':
        setIsOpen(true);
        break;
      case 'close':
        setIsOpen(false);
        break;
    }
  });

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <div tw="w-[200px] border-r-[.0625rem] border-l-0 border-t-0 border-r-[black]/20 h-full bg-slate-100 border-solid flex px-3 flex-col">
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Inputs" {...a11yProps(0)} />
          <Tab label="Option" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <ListInput
          handleApply={handleApply}
          hasPendingChanges={hasPendingChanges}
          saveToLocalStorage={saveToLocalStorage}
          isConfirmDialogOpen={isConfirmDialogOpen}
          handleToggleConfirmDialog={handleToggleConfirmDialog}
          handleConfirmClear={handleConfirmClear}
          handleSelectThemeConfig={handleSelectThemeConfig}
          themeConfig={themeConfig}
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Styles containerStyle={containerStyle} handleContainerStyle={handleContainerStyle} />
      </CustomTabPanel>
      <DialogEditConfigInputs
        open={isOpen}
        setOpen={setIsOpen}
        handleEditFormInput={handleEditFormInput}
        themeConfig={themeConfig}
      />
    </div>
  );
};
