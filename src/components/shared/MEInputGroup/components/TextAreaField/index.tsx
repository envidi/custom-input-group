import { TextareaAutosize } from '@mui/material';
import { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import tw from 'twin.macro';
import { FormTextAreaField } from '../../types';

export const METextAreaField: FC<FormTextAreaField> = (props) => {
  const { name, defaultValue, label, labelCss, containerCss, textareaCss, minRows, ...rest } = props;

  const {
    setValue,
    control,
    formState: { errors },
  } = useFormContext();

  const error = errors[name];

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue || ''}
      render={({ field: { value, onChange, onBlur } }) => (
        <div css={[tw`flex flex-col gap-2`, containerCss]}>
          {label && <label css={[labelCss]}>{label}</label>}
          <TextareaAutosize
            {...rest}
            value={value}
            onChange={(e) => {
              onChange(e);
              setValue(name, e.target.value, { shouldValidate: true, shouldDirty: true });
            }}
            onBlur={onBlur}
            css={[
              tw`w-full !outline-none py-2 px-3 rounded border-[black] border text-sm leading-4 text-[black] hover:(!border-[black]) focus:(!border-[black]) resize-none`,
              !!error && tw`border-[black]`,
              textareaCss,
            ]}
            minRows={minRows || 1}
            placeholder={rest.placeholder}
          />
          {!!error && <span tw="mt-1">{error?.message as string}</span>}
        </div>
      )}
    />
  );
};
