import { ButtonVariants as ButtonStylesVariants } from './typeVariants';

export type AppCommonStyles = {
  background: string;
  borderColor: string;
  text: string;
  scrollBarBackground?: string;
  scrollBarTrackColor?: string;
};

export type AppStylesByElements = {
  buttons: ButtonStylesVariants;
};

export type ButtonStyles = {
  backgroundColor: string;
  colorText: string;
  borderColor: string;
  opacity?: number;
};

export type ButtonStylesByState = {
  default: ButtonStyles;
  hover: ButtonStyles;
  active: ButtonStyles;
  disabled: ButtonStyles;
};

export type ToggleStyles = {
  background: string;
  borderColor: string;
  ballBackground: string;
};

export type ToggleStylesByState = {
  default: ToggleStyles;
};
