import * as yup from 'yup';
import { FormInputGenericProps } from '~root/components/shared/MEInputGroup/types';

export const useSchema = (formStructure: FormInputGenericProps[], excludes?: Array<[string, string]>) => {
  const schema = formStructure.reduce((acc, field) => {
    return {
      ...acc,
      [field.name]: field.validate,
    };
  }, {});

  return yup.object().shape(schema, excludes);
};
