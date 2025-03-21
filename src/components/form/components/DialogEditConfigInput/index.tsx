import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import 'twin.macro';
import { validateOption, ValueValidateOption } from '../../utils';
import { TypeInput } from '../../types';
import { FormString } from '../FormString';
import { FormNumber } from '../FormNumber';
import { FormInputGenericLayoutProps } from '../../hooks/useFormPage';

interface Props {
  item: FormInputGenericLayoutProps | undefined;
  setItem: (args: FormInputGenericLayoutProps | undefined) => void;
  handleEditFormStructure: (args: FormInputGenericLayoutProps) => void;
}
interface ValueConfigInput {
  validate: {
    string: ValueValidateOption;
    number: ValueValidateOption;
  };
  label?: string;
  name?: string;
  placeholder?: string;
}
export type OptionsValue = 'validate' | 'name' | 'placeholder' | 'label';

export function DialogEditConfigInput({ item, setItem, handleEditFormStructure }: Props) {
  const [values, setValues] = React.useState<ValueConfigInput>({
    validate: {
      string: {
        is_email: false,
        max: 0,
        min: 0,
        is_required: false,
        is_integer: false,

        text_email: '',
        text_max: '',
        text_min: '',
        text_required: '',
        text_integer: '',
      },
      number: {
        is_email: false,
        max: 0,
        min: 0,
        is_required: false,
        is_integer: false,

        text_email: '',
        text_max: '',
        text_min: '',
        text_required: '',
        text_integer: '',
      },
    },
  });

  const handleSubmit = () => {
    const convertValues = Object.entries(values || {});

    const handleValidate = (value: ValueValidateOption) => validateOption(item?.inputType as TypeInput, value);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const result = convertValues.reduce((acc: { [index: string]: any }, [key, value]) => {
      acc[key] = typeof value !== 'string' ? handleValidate(value as ValueValidateOption) : value;
      return acc;
    }, {});

    handleEditFormStructure({ ...item, ...result } as FormInputGenericLayoutProps);
    setItem(undefined);
  };

  const handleClose = () => {
    setItem(undefined);
  };

  const descriptionElementRef = React.useRef<HTMLElement>(null);
  React.useEffect(() => {
    if (item) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [item]);
  const handleChangeOption = (
    option: OptionsValue,
    subOption: keyof ValueValidateOption | null,
    value: string | number | boolean,
  ) => {
    setValues((prev: ValueConfigInput) => {
      const newResult = { ...prev };
      return {
        ...newResult,
        [option]:
          subOption && typeof newResult?.[option] === 'object'
            ? {
                ...newResult?.[option],
                [String(subOption)]: value,
              }
            : value,
      };
    });
  };

  return (
    <React.Fragment>
      <Dialog
        open={!!item}
        onClose={handleClose}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Edit</DialogTitle>
        <DialogContent dividers>
          <DialogContentText id="scroll-dialog-description" ref={descriptionElementRef} tabIndex={-1}>
            <div tw="sm:w-[300px] md:w-full grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
              <div tw="flex flex-col  w-[-webkit-fill-available]">
                <div>Name</div>
                <input
                  type="text"
                  placeholder="Name"
                  defaultValue={item?.name}
                  tw="border border-solid border-black p-2 rounded-md"
                  onChange={(e) => handleChangeOption('name', null, e.target.value)}
                />
              </div>
              <div tw="flex flex-col w-[-webkit-fill-available]">
                <div>Placeholder</div>
                <input
                  type="text"
                  placeholder="Placeholder"
                  defaultValue={item?.placeholder}
                  tw="border border-solid border-black p-2 rounded-md"
                  onChange={(e) => handleChangeOption('placeholder', null, e.target.value)}
                />
              </div>
            </div>
            <div tw="grid grid-cols-2 md:grid-cols-2 gap-3">
              <div tw="flex flex-col  w-[-webkit-fill-available]">
                <div>Label text</div>
                <input
                  type="text"
                  placeholder="Name"
                  defaultValue={(item?.label as string) || ''}
                  tw="border border-solid border-black p-2 rounded-md"
                  onChange={(e) => handleChangeOption('label', null, e.target.value)}
                />
              </div>
            </div>
            {[TypeInput.TextField, TypeInput.PasswordField].includes(item?.inputType as TypeInput) && (
              <FormString item={item} handleChangeOption={handleChangeOption} />
            )}
            {[TypeInput.NumberField].includes(item?.inputType as TypeInput) && (
              <FormNumber item={item} handleChangeOption={handleChangeOption} />
            )}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
