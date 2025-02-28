/* eslint-disable @typescript-eslint/no-explicit-any */
import 'twin.macro';
import 'react-grid-layout/css/styles.css';
// import 'react-resizable/css/styles.css';
import React from 'react';
import { MenuItem, Select } from '@mui/material';
import { ContainerStyle } from '~root/components/form/types';

interface Props {
  containerStyle: ContainerStyle;
  handleContainerStyle: (value: string | number, gapType: keyof ContainerStyle) => void;
}

export const Styles = ({ containerStyle, handleContainerStyle }: Props) => {
  return (
    <>
      <div tw="flex flex-col w-[100px]">
        <label htmlFor="demo-simple-select">Gap column</label>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={containerStyle.gapX}
          onChange={(e) => handleContainerStyle(e.target.value, 'gapX')}
        >
          <MenuItem value={0}>0</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={30}>30</MenuItem>
          <MenuItem value={50}>50</MenuItem>
        </Select>
      </div>
      <div tw="flex flex-col w-[100px]">
        <label htmlFor="demo-simple-select">Gap row</label>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={containerStyle.gapY}
          onChange={(e) => handleContainerStyle(e.target.value, 'gapY')}
        >
          <MenuItem value={0}>0</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={30}>30</MenuItem>
        </Select>
      </div>
      <div tw="flex flex-col w-[100px]">
        <label htmlFor="demo-simple-select">Number column</label>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={containerStyle.column}
          onChange={(e) => handleContainerStyle(e.target.value, 'column')}
        >
          {Array.from({ length: 12 }, (_, index) => index + 1).map((number) => (
            <MenuItem key={number} value={number}>
              {number}
            </MenuItem>
          ))}
        </Select>
      </div>
      <div tw="mt-5 border-b border-solid border-[#ccc] border-r-[0px] border-l-[0px] border-t-[0px] pb-[5px] mb-3">
        Breakpoint
      </div>
      <div tw="flex flex-col gap-y-3">
        <div tw="flex flex-col w-[100px]">
          <label htmlFor="demo-simple-select">Sm</label>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={containerStyle.sm}
            onChange={(e) => handleContainerStyle(e.target.value, 'sm')}
          >
            {Array.from({ length: 12 }, (_, index) => index + 1).map((number) => (
              <MenuItem key={number} value={number}>
                {number}
              </MenuItem>
            ))}
          </Select>
        </div>
        <div tw="flex flex-col w-[100px]">
          <label htmlFor="demo-simple-select">Md</label>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={containerStyle.md}
            onChange={(e) => handleContainerStyle(e.target.value, 'md')}
          >
            {Array.from({ length: 12 }, (_, index) => index + 1).map((number) => (
              <MenuItem key={number} value={number}>
                {number}
              </MenuItem>
            ))}
          </Select>
        </div>
        <div tw="flex flex-col w-[100px]">
          <label htmlFor="demo-simple-select">Lg</label>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={containerStyle.lg}
            onChange={(e) => handleContainerStyle(e.target.value, 'lg')}
          >
            {Array.from({ length: 12 }, (_, index) => index + 1).map((number) => (
              <MenuItem key={number} value={number}>
                {number}
              </MenuItem>
            ))}
          </Select>
        </div>
      </div>
    </>
  );
};
