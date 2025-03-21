/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import 'twin.macro';
import 'react-grid-layout/css/styles.css';
import { Button, MenuItem, Select } from '@mui/material';
import { ContainerStyle } from '~root/components/form/types';
import { triggerCustomEvent } from '~root/components/form/hooks';

interface Props {
  containerStyle: ContainerStyle;
  handleContainerStyle: (value: string | number, gapType: keyof ContainerStyle) => void;
}

export const Styles = ({ containerStyle, handleContainerStyle }: Props) => {
  const handleOpenModal = () => {
    triggerCustomEvent('modal-event', { action: 'open' });
  };
  return (
    <>
      <div className="flex flex-col mt-5 ">
        <div tw="mt-2 border-b border-solid border-[#ccc] pb-2">Gap</div>
        <div className="flex flex-row gap-2 mt-4">
          <div tw="flex flex-col w-[100px]">
            <label htmlFor="demo-simple-select">Column</label>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={containerStyle.gapX}
              sx={{
                '& .MuiInputBase-input': {
                  padding: '10px',
                },
              }}
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
            <label htmlFor="demo-simple-select">Row</label>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={containerStyle.gapY}
              sx={{
                '& .MuiInputBase-input': {
                  padding: '10px',
                },
              }}
              onChange={(e) => handleContainerStyle(e.target.value, 'gapY')}
            >
              <MenuItem value={0}>0</MenuItem>
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={20}>20</MenuItem>
              <MenuItem value={30}>30</MenuItem>
            </Select>
          </div>
        </div>
      </div>

      <div tw="mt-5 border-b border-solid border-[#ccc] border-r-[0px] border-l-[0px] border-t-[0px] pb-[5px] mb-3">
        Breakpoint
      </div>
      <div tw="flex flex-col gap-y-3">
        <div className="grid grid-cols-2 gap-2">
          <div tw="flex flex-col ">
            <label htmlFor="demo-simple-select">Xs</label>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={containerStyle.xs}
              sx={{
                '& .MuiInputBase-input': {
                  padding: '10px',
                },
              }}
              onChange={(e) => handleContainerStyle(e.target.value, 'xs')}
            >
              {Array.from({ length: 12 }, (_, index) => index + 1).map((number) => (
                <MenuItem key={number} value={number}>
                  {number}
                </MenuItem>
              ))}
            </Select>
          </div>
          <div tw="flex flex-col ">
            <label htmlFor="demo-simple-select">Sm</label>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={containerStyle.sm}
              sx={{
                '& .MuiInputBase-input': {
                  padding: '10px',
                },
              }}
              onChange={(e) => handleContainerStyle(e.target.value, 'sm')}
            >
              {Array.from({ length: 12 }, (_, index) => index + 1).map((number) => (
                <MenuItem key={number} value={number}>
                  {number}
                </MenuItem>
              ))}
            </Select>
          </div>
          <div tw="flex flex-col ">
            <label htmlFor="demo-simple-select">Md</label>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={containerStyle.md}
              sx={{
                '& .MuiInputBase-input': {
                  padding: '10px',
                },
              }}
              onChange={(e) => handleContainerStyle(e.target.value, 'md')}
            >
              {Array.from({ length: 12 }, (_, index) => index + 1).map((number) => (
                <MenuItem key={number} value={number}>
                  {number}
                </MenuItem>
              ))}
            </Select>
          </div>
          <div tw="flex flex-col ">
            <label htmlFor="demo-simple-select">Lg</label>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={containerStyle.lg}
              sx={{
                '& .MuiInputBase-input': {
                  padding: '10px',
                },
              }}
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
      </div>
      <Button tw="mt-4 w-full" variant="outlined" onClick={handleOpenModal}>
        Edit global style input
      </Button>
    </>
  );
};
