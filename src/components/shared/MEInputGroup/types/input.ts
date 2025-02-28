import {
  RadioGroupProps,
  CheckboxProps,
  RadioProps,
  SxProps,
  TextareaAutosizeProps,
  TextFieldProps,
  Theme,
} from '@mui/material';
import { TwStyle } from 'twin.macro';

type GenericFormInput = {
  name: string;
  label?: React.ReactNode | string;
  placeholder?: string;
  validate?: object;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  defaultValue?: any;
  disabled?: boolean;
  colSpan: TwStyle; // Css of column span of the input container

  // colSpanLg: TwStyle; // Css of column span of the input container
  // colSpanMd: TwStyle; // Css of column span of the input container
  // colSpanSm: TwStyle; // Css of column span of the input container

  // orderLg: TwStyle; // Css of column span of the input container
  // orderMd: TwStyle; // Css of column span of the input container
  // orderSm: TwStyle; // Css of column span of the input container

  // colStartLg: TwStyle; // Css of column span of the input container
  // colStartMd: TwStyle; // Css of column span of the input container
  // colStartSm: TwStyle; // Css of column span of the input container

  // rowStartLg: TwStyle; // Css of rowumn span of the input container
  // rowStartMd: TwStyle; // Css of rowumn span of the input container
  // rowStartSm: TwStyle; // Css of rowumn span of the input container

  loading?: boolean;
  containerCss?: TwStyle;
  labelCss?: TwStyle;
  rows?: number;
  tagLabel?: string;
};

// TextField
export type FormInputTextField = GenericFormInput &
  TextFieldProps & {
    startIcon?: React.ReactElement;
    startAdornment?: {
      typingIcon?: React.ReactElement;
      checkedIcon?: React.ReactElement;
    };
    endIcon?: React.ReactElement;
    editable?: boolean;
    maxLength?: number;
    clearable?: boolean;
  };

// TextAreaField
export type FormTextAreaField = GenericFormInput &
  TextareaAutosizeProps & {
    textareaCss?: TwStyle;
  };

// Multi Checkbox
export type SelectItem = {
  id: string;
  value?: string;
  label: string;
  image?: string;
  telSwitchboard?: string;
  code?: string;
};

// PasswordField
export type FormInputPasswordField = GenericFormInput & TextFieldProps;

export type FormInputRadioGroup = GenericFormInput &
  Pick<RadioGroupProps, 'defaultValue'> & {
    options: Pick<RadioProps, 'disabled' | 'size' | 'color' | 'sx'> &
      {
        value: string;
        label?: React.ReactNode | string;
        addition?: React.ReactNode;
        radioCss?: TwStyle;
        radioLabelCss?: TwStyle;
        customStyle?: TwStyle | (false | TwStyle)[];
        customRadioStyle?: SxProps<Theme>;
        useDefaultIcons?: boolean;
        disabled?: boolean;
      }[];
    formControlStyle?: TwStyle;
  };

export type FormInputCheckboxGroup = GenericFormInput & {
  options: Pick<CheckboxProps, 'disabled' | 'size' | 'color' | 'sx'> &
    {
      value: string | number;
      label?: React.ReactNode | string;
      addition?: React.ReactNode;
      checkboxCss?: TwStyle;
      checkboxLabelCss?: TwStyle;
      customStyle?: TwStyle | (false | TwStyle)[];
      customCheckboxStyle?: SxProps<Theme>;
      useDefaultIcons?: boolean;
      disabled?: boolean;
    }[];
  formControlStyle?: TwStyle;
};

export type FormGroup = {
  title?: string;
  group: FormInputGenericProps[];
};

export type FormInputGenericProps =
  | (FormInputTextField & { inputType: 'TextField' })
  | (FormInputPasswordField & { inputType: 'PasswordField' })
  | (FormInputTextField & { inputType: 'NumberField' })
  | (FormInputRadioGroup & { inputType: 'RadioGroupField' })
  | (FormInputRadioGroup & { inputType: 'RadioActionField' })
  | (FormTextAreaField & { inputType: 'TextAreaField' })
  | (FormInputCheckboxGroup & { inputType: 'CheckboxGroupField' });

export type CombinedFormInputProps = FormGroup | FormInputGenericProps;
