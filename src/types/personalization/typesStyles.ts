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
