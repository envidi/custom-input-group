import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { FieldValues, Mode, useForm } from 'react-hook-form';
import { FormInputGenericProps } from '~root/components/shared/MEInputGroup/types';
import { useSchema } from '../useSchema';

interface OptionsType {
  mode: Mode;
}

export const useFormHandler = <Type extends FieldValues>(
  initialFormStructure: FormInputGenericProps[],
  excludes?: Array<[string, string]>,
  options?: OptionsType,
) => {
  const [formStructure, setFormStructure] = useState<FormInputGenericProps[]>(initialFormStructure);
  const schema = useSchema(formStructure, excludes);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const formHandler = useForm<Type>({ mode: options?.mode || 'all', resolver: yupResolver(schema) as any });

  return { formHandler, formStructure, setFormStructure };
};
