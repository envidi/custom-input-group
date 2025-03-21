import * as yup from 'yup';
import { TypeInput } from '../types';
export interface ValueValidateOption {
  is_email: boolean;
  max: number;
  min: number;
  is_required: boolean;
  is_integer: boolean;

  text_email: string;
  text_max: string;
  text_min: string;
  text_required: string;
  text_integer: string;
}

export const validateOption = (type: TypeInput, value: ValueValidateOption) => {
  let convertType = '';
  if ([TypeInput.TextField, TypeInput.PasswordField].includes(type)) {
    convertType = 'string';
  } else if ([TypeInput.NumberField].includes(type)) {
    convertType = 'number';
  }
  const validateType: { string: yup.StringSchema; number: yup.NumberSchema } = {
    string: convertStringValidate(value),
    number: convertNumberValidate(value),
  };
  return validateType?.[convertType as keyof typeof validateType];
};

export const convertDirection = (direction: string) => {
  switch (direction) {
    case 'column':
      return 'flex-col';
    case 'row':
      return 'flex-row';

    default:
      return;
  }
};

export const convertStringValidate = (value: ValueValidateOption) => {
  let schema = yup.string();
  if (value.is_email) {
    schema = schema.email(value?.text_email || 'Invalid email format');
  }
  if (value?.max) {
    schema = schema.max(value?.max, value?.text_max || `Max ${value?.max} character`);
  }
  if (value?.min) {
    schema = schema.min(value?.min, value?.text_min || `Min ${value?.min} character`);
  }
  if (value.is_required) {
    schema = schema.required(value?.text_required || 'This field is required');
  }
  return schema;
};
export const convertNumberValidate = (value: ValueValidateOption) => {
  let schema = yup.number();

  if (value?.is_integer) {
    schema = schema.integer(value?.text_integer || 'Not integer');
  }
  if (value?.max) {
    schema = schema.max(value?.max, value?.text_max || `Max ${value?.max} character`);
  }
  if (value?.min) {
    schema = schema.min(value?.min, value?.text_min || `Min ${value?.min} character`);
  }
  schema = schema.typeError(value?.text_required || 'This field is required');
  return schema;
};
