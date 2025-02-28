import React, { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { FormControl, RadioGroup, FormControlLabel, Radio, Box } from '@mui/material';
import tw from 'twin.macro';
import { FormInputRadioGroup } from '../../types';
// import CheckBoxIcon from '../../assets/CheckBoxIcon.svg';
// import CheckedBoxIcon from '../../assets/CheckedBoxIcon.svg';

export const MERadioGroup: FC<FormInputRadioGroup> = (props) => {
  const { name, defaultValue, containerCss, options, label, labelCss } = props;
  const { control, setValue } = useFormContext();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = (event.target as HTMLInputElement).value;
    setValue(name, value, { shouldValidate: true, shouldDirty: true });
  };

  return (
    <FormControl>
      <Controller
        control={control}
        name={name}
        defaultValue={defaultValue || ''}
        render={({ field }) => {
          return (
            <>
              <Box css={labelCss}>{label}</Box>
              <RadioGroup css={[tw`flex flex-row gap-1`, containerCss]} {...field} onChange={handleChange}>
                {options.map((option) => (
                  <div key={String(option.value)}>
                    <FormControlLabel
                      value={option.value}
                      control={
                        // <Radio icon={<CheckBoxIcon />} checkedIcon={<CheckedBoxIcon />} css={[option.radioCss]} />
                        <Radio css={[option.radioCss]} />
                      }
                      label={<Box css={[option.radioLabelCss]}>{option.label}</Box>}
                    />
                    {option.addition}
                  </div>
                ))}
              </RadioGroup>
            </>
          );
        }}
      />
    </FormControl>
  );
};
