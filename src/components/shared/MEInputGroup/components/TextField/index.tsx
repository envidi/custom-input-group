import { IconButton, InputAdornment, TextField, Typography } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import tw from 'twin.macro';
import { FormInputTextField } from '../../types';
import { merge } from 'lodash';
import { Cancel } from '@mui/icons-material';

export const METextField: FC<FormInputTextField> = (props) => {
  const {
    name,
    defaultValue,
    label,
    labelCss,
    containerCss,
    startIcon,
    startAdornment,
    editable,
    endIcon,
    maxLength,
    focused: focusedState,
    onFocus,
    onBlur,
    clearable,
    disabledError,
    height,
    ...rest
  } = props;
  /** Define the 'focused' state to handle the focusing of the input field.
   *  This state can be externally controlled based on the 'focusedState' prop if it is provided. */
  const [focused, setFocused] = useState(focusedState);
  const {
    setValue,
    control,
    formState: { errors },
    watch,
  } = useFormContext();

  const [isPasting, setIsPasting] = useState(false);

  const error = errors[name];
  const value = watch(name);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onChange = (event: any) => {
    const { value } = event.target;
    if (maxLength && value?.length > maxLength && !isPasting) {
      setValue(name, value.slice(0, maxLength), { shouldValidate: true, shouldDirty: true });
    } else {
      setValue(name, value, { shouldValidate: true, shouldDirty: true });
    }
    if (isPasting && maxLength && value?.length < maxLength) {
      setIsPasting(false);
    }
  };

  const handlePaste = () => {
    setIsPasting(true);
  };

  useEffect(() => {
    // Update 'focused' based on 'focusedState' prop if it's provided and different from the current state
    if (focusedState != null && focusedState !== focused) {
      setFocused(focusedState);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [focusedState]);

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue || ''}
      render={({ field: { ...controlProps } }) => (
        <div className={`flex flex-col gap-2 h-full ${containerCss}`}>
          <div tw="flex justify-between items-end">
            {label && (
              <Typography sx={{ lineHeight: '0' }}>
                <label className={labelCss}>{label}</label>
              </Typography>
            )}
            {maxLength && (
              <Typography variant="caption" color="textSecondary">
                {value?.length || 0}/{maxLength}
              </Typography>
            )}
          </div>
          <TextField
            {...rest}
            {...controlProps}
            inputRef={(input) => input && focused && input.focus()}
            InputProps={{
              ...props.InputProps,
              startAdornment: startIcon ? (
                <InputAdornment position="start">
                  <IconButton>{startIcon}</IconButton>
                </InputAdornment>
              ) : (
                startAdornment && (
                  <InputAdornment position="start" css={!focused && !value ? tw`!hidden` : ''}>
                    <IconButton>
                      {focused ? startAdornment.typingIcon : value ? startAdornment.checkedIcon : ''}
                    </IconButton>
                  </InputAdornment>
                )
              ),
              endAdornment:
                endIcon && editable && value && !focused ? (
                  <InputAdornment
                    position="end"
                    onClick={() => {
                      setFocused(true);
                    }}
                  >
                    <IconButton>{endIcon}</IconButton>
                  </InputAdornment>
                ) : (
                  clearable &&
                  value && (
                    <InputAdornment
                      position="end"
                      tw="mt-[-0.15rem]"
                      onClick={() => {
                        setFocused(true);
                      }}
                    >
                      <div onClick={() => setValue(name, '')}>
                        <Cancel tw="text-xl text-[black] cursor-pointer hover:(text-[black])" />
                      </div>
                    </InputAdornment>
                  )
                ),
            }}
            style={{ height: '100%' }}
            onChange={onChange}
            onPaste={handlePaste}
            onFocus={(e) => {
              setFocused(true);
              if (onFocus) onFocus(e);
            }}
            onBlur={(e) => {
              setFocused(false);
              if (onBlur) onBlur(e);
            }}
            error={!disabledError && !!error}
            helperText={error?.message as string}
            tw="[& input]:(text-sm leading-4 font-normal px-3) bg-[white]"
            className={value && !focused && 'hasValue'}
            sx={merge(
              {},
              {
                '& .MuiOutlinedInput-root': {
                  '& .MuiInputBase-input': {
                    ...tw`py-[0.577rem] text-[.9375rem] font-normal leading-4`,
                  },
                },
                '& .MuiInputBase-root.Mui-focused .MuiOutlinedInput-notchedOutline': tw`border-[black] border`,
                '& .MuiInputBase-root:hover .MuiOutlinedInput-notchedOutline': tw`border-[black] border`,
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
