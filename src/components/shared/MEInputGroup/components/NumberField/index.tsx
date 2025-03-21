import { IconButton, InputAdornment, TextField, Typography } from '@mui/material';
import { ChangeEvent, FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import tw from 'twin.macro';
import { FormInputTextField } from '../../types';
import { isNil, merge } from 'lodash';

export const MENumberField: FC<FormInputTextField> = (props) => {
  const { name, defaultValue, label, labelCss, containerCss, startIcon, endIcon, disabledError, height, ...rest } =
    props;
  const {
    setValue,
    control,
    formState: { errors },
  } = useFormContext();

  const error = errors[name];
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setValue(name, value, { shouldValidate: true, shouldDirty: true });
    if (rest.onChange) {
      rest.onChange(event);
    }
  };

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={isNil(defaultValue) ? '' : defaultValue}
      render={({ field: { ...controlProps } }) => (
        <div css={[tw`flex flex-col gap-2 h-full`, containerCss]}>
          {label && (
            <Typography sx={{ lineHeight: '0' }}>
              <label className={labelCss}>{label}</label>
            </Typography>
          )}
          <TextField
            {...rest}
            {...controlProps}
            type="number"
            InputProps={{
              startAdornment: startIcon ? (
                <InputAdornment position="start">
                  <IconButton css={tw`hover:bg-transparent hover:cursor-default`}>{startIcon}</IconButton>
                </InputAdornment>
              ) : null,
              endAdornment: endIcon ? (
                <InputAdornment position="end">
                  <IconButton css={tw`hover:bg-transparent hover:cursor-default`}>{endIcon}</IconButton>
                </InputAdornment>
              ) : null,
            }}
            className="bg-[white] [&.MuiInputBase-root]:(rounded-0)"
            style={{ height: '100%' }}
            onChange={onChange}
            error={!!error}
            helperText={!disabledError && (error?.message as string)}
            tw="[& input]:(text-sm leading-4 font-normal px-3)"
            sx={merge(
              {},
              {
                '& .MuiInputBase-root': {
                  height: height ? height + 'px' : '100%',
                },
              },
              props.sx,
            )}
          />
        </div>
      )}
    />
  );
};
