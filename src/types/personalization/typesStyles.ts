export type ButtonStyles = {
  background: string;
  text: string;
  borderColor: string;
  opacity?: number;
};

export type ButtonStylesByState = {
  default: ButtonStyles;
  hover: ButtonStyles;
  active: ButtonStyles;
  disabled: ButtonStyles;
};
