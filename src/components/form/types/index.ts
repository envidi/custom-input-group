export interface ContainerStyle {
  gapX: number;
  gapY: number;
  column: number;
  xs: number;
  sm: number;
  md: number;
  lg: number;
  row: string;
}
export interface GridItem {
  x: number;
  y: number;
  w: number;
  h: number;
  config: {
    name: string;
    colSpan: string;
  };
}
export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg';
export enum BreakpointEnum {
  XS = 'xs',
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
}
export enum ValidateRuleType {
  REQUIRED = 'required',
  TypeError = 'typeError',
  EMAIL = 'email',
  MAX = 'max',
  MIN = 'min',
  INTEGER = 'integer',
  number = 'NUMBER',
  minLength = 'MIN_LENGTH',
  maxLength = 'MAX_LENGTH',
}
export enum TypeInput {
  TextField = 'TextField',
  PasswordField = 'PasswordField',
  NumberField = 'NumberField',
  RadioGroupField = 'RadioGroupField',
  RadioActionField = 'RadioActionField',
  CheckboxGroupField = 'CheckboxGroupField',
  TextAreaField = 'TextAreaField',
}
export type Option = 'validate' | 'labelCss';
export interface TypeOptions {
  validate: unknown;
  labelCss: Record<string, string>;
}
export type OptionThemeConfig = 'containerCss' | 'border' | 'label' | 'text';
export type SubOptionThemeConfig =
  | 'gapY'
  | 'gapX'
  | 'rowHeight'
  | 'direction'
  | 'borderWidth'
  | 'borderRadius'
  | 'borderColor'
  | 'hoverColor'
  | 'focusColor'
  | 'fontSize'
  | 'lineHeight'
  | 'fontWeight'
  | 'clear'
  | 'color'
  | 'paddingX'
  | 'placeholderOpacity'
  | 'paddingY';
