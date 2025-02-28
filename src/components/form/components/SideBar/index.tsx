/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { a11yProps } from '../../utils';
import { Box, Tab, Tabs } from '@mui/material';
import { CustomTabPanel } from '../CustomTabPanel';
import { ListInput, Styles } from './components';
import { ContainerStyle } from '../../types';
import 'twin.macro';
import { DialogEditConfigInput } from '../DialogEditConfigInput';

interface Props {
  handleApply: () => void;
  containerStyle: ContainerStyle;
  handleContainerStyle: (value: string | number, gapType: keyof ContainerStyle) => void;
}

export const SideBar = ({ handleApply, containerStyle, handleContainerStyle }: Props) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (_: any, newValue: number) => {
    setValue(newValue);
  };
  return (
    <div tw="w-[200px]  border-r-[.0625rem] border-l-0 border-t-0 border-r-[black]/20 h-full bg-slate-100 border-solid flex px-3 flex-col">
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Inputs" {...a11yProps(0)} />
          <Tab label="Option" {...a11yProps(2)} />
          {/* <Tab label="Style" {...a11yProps(1)} /> */}
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <ListInput handleApply={handleApply} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Styles containerStyle={containerStyle} handleContainerStyle={handleContainerStyle} />
      </CustomTabPanel>
      {/* <CustomTabPanel value={value} index={2}>
        Select input
      </CustomTabPanel> */}
    </div>
  );
};
