import * as yup from 'yup';
export interface ValidateYup {
  validate: yup.StringSchema;
}

export const getValidationRule = (type: string, itemDetail: ValidateYup) => {
  return itemDetail?.validate?.tests?.find((item) => item?.OPTIONS?.name === type);
};
export const getValidationTextRule = (type: string, itemDetail: ValidateYup): string | undefined => {
  return (getValidationRule(type, itemDetail)?.OPTIONS?.message || '') as string;
};
