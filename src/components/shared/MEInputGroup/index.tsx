import React, { FC } from 'react';
import { FieldValues, UseFormReturn } from 'react-hook-form';
import { FormProvider } from 'react-hook-form';
import {
  FormInputGenericProps,
  FormInputPasswordField,
  FormInputRadioGroup,
  FormInputTextField,
  FormTextAreaField,
} from './types';
import { MENumberField, MEPasswordField, METextAreaField, METextField, MERadioGroup } from './components';
import tw, { TwStyle } from 'twin.macro';

interface MEInputGroupProps {
  // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents, @typescript-eslint/no-explicit-any
  formHandler: UseFormReturn<FieldValues, any> | UseFormReturn<any, any>;
  formStructure: FormInputGenericProps[];
  defaultValues?: FieldValues;
  gridCols?: string;
  spacingX?: TwStyle;
  spacingY?: TwStyle;
  invisible?: boolean;
  disableInputFields?: boolean;
  rows?: string;
}

export type InputRenderProps = FormInputGenericProps & {
  defaultValues?: FieldValues;
};

export const InputRender: FC<InputRenderProps> = (props) => {
  const { inputType, defaultValues, ...otherProps } = props;

  switch (inputType) {
    case 'TextField':
      return <METextField defaultValue={defaultValues?.[props.name]} {...(otherProps as FormInputTextField)} />;

    case 'PasswordField':
      return <MEPasswordField defaultValue={defaultValues?.[props.name]} {...(otherProps as FormInputPasswordField)} />;

    case 'NumberField':
      return <MENumberField defaultValue={defaultValues?.[props.name]} {...(otherProps as FormInputTextField)} />;

    case 'RadioGroupField':
      return <MERadioGroup defaultValue={defaultValues?.[props.name]} {...(otherProps as FormInputRadioGroup)} />;

    case 'TextAreaField':
      return <METextAreaField defaultValue={defaultValues?.[props.name]} {...(otherProps as FormTextAreaField)} />;

    default:
      return <div>Invalid inputType</div>;
  }
};

export const MEInputGroup: React.FC<MEInputGroupProps> = ({
  formHandler,
  formStructure,
  defaultValues,
  invisible,
  disableInputFields,
  gridCols,
  spacingX = tw`gap-x-2`,
  spacingY = tw`gap-y-1.5`,
  rows = 'grid-rows-[repeat(3,1fr)]',
}) => {
  return (
    <div css={[tw`grid`, spacingX, spacingY, invisible && tw`invisible`]} className={`${rows} ${gridCols}`}>
      <FormProvider {...formHandler}>
        {formStructure.map((field, index) => (
          <div key={index} className={`${field.colSpan}`}>
            <InputRender {...field} defaultValues={defaultValues} disabled={disableInputFields ?? field.disabled} />
          </div>
        ))}
      </FormProvider>
    </div>
  );
};
