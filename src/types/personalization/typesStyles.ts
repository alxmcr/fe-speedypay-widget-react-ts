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

export type CommonStyles = {
  background: string;
  borderColor: string;
  text: string;
  scrollBarBackground?: string;
  scrollBarTrackColor?: string;
};
