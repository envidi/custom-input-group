import React from 'react';
import { FC } from 'react';
import { FormInputTextField } from '../../types';
import { Controller, useFormContext } from 'react-hook-form';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import 'twin.macro';
import VisibilityOff from '~root/components/shared/MEInputGroup/assets/eye-off.svg?react';
import Visibility from '~root/components/shared/MEInputGroup/assets/eye.svg?react';
import merge from 'lodash/merge';
import { twMerge } from 'tailwind-merge';
import { Typography } from '@mui/material';

export const MEPasswordField: FC<FormInputTextField> = (props) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const { name, defaultValue, label, labelCss, containerCss, disabledError, height, ...rest } = props;
  const {
    setValue,
    control,
    formState: { errors },
  } = useFormContext();

  const error = errors[name];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onChange = (event: any) => {
    const { value } = event.target;
    setValue(name, value, { shouldValidate: true, shouldDirty: true });
  };

  // Toggle show or hide password
  const handleClickShowPassword = () => {
    setShowPassword((show) => !show);
  };

  // disable show or hide password by key press when focus on hide icon password field
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue || ''}
      render={({ field: { ...controlProps } }) => (
        <div className={twMerge('flex flex-col gap-2 h-full', containerCss)}>
          {label && (
            <Typography sx={{ lineHeight: '0' }}>
              <label className={labelCss}>{label}</label>
            </Typography>
          )}
          <TextField
            {...rest}
            {...controlProps}
            InputProps={{
              ...props.InputProps,
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    style={{ zIndex: 1000 }}
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            className=" bg-[white] [&.MuiInputBase-root]:(rounded-0)"
            style={{ height: '100%' }}
            sx={merge(
              {},
              {
                '& .MuiInputBase-root': {
                  height: height ? height + 'px' : '100%',
                },
              },
              props.sx,
            )}
            type={showPassword ? 'text' : 'password'}
            onChange={onChange}
            error={!!error}
            helperText={!disabledError && (error?.message as string)}
          />
        </div>
      )}
    />
  );
};
