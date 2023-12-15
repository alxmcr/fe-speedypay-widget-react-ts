export type ButtonCommonStyles = {
  backgroundColor: string;
  colorText: string;
  borderColor: string;
  opacity?: number;
};

export type ButtonCommonStylesByState = {
  default: ButtonCommonStyles;
  hover: ButtonCommonStyles;
  active: ButtonCommonStyles;
  disabled: ButtonCommonStyles;
};

export type ButtonGradientStyles = {
  colorText: string;
  gradientColors: {
    gradientStart: string;
    gradientEnd: string;
  };
  opacity?: number;
};

export type ButtonGradientStylesByState = {
  default: ButtonGradientStyles;
  hover: ButtonGradientStyles;
  active: ButtonGradientStyles;
  disabled: ButtonGradientStyles;
};

export type ToggleStyles = {
  backgroundColor: string;
  borderColor: string;
  ballBackground: string;
};

export type ToggleStylesByState = {
  default: ToggleStyles;
};

export type InputStyles = {
  backgroundColor: string;
  colorText: string;
  borderColor: string;
  placeholderColor?: string;
};

export type InputStylesByState = {
  default: InputStyles;
  focus: InputStyles;
  disabled: InputStyles;
};

export type PillStyles = {
  backgroundColor: string;
  colorText: string;
  borderColor: string;
};

export type PillStylesByState = {
  default: PillStyles;
};

export type SelectStyles = {
  backgroundColor: string;
  colorText: string;
  borderColor: string;
  placeholderColor?: string;
};

export type SelectStylesByState = {
  default: SelectStyles;
  focus: SelectStyles;
  disabled: SelectStyles;
};
