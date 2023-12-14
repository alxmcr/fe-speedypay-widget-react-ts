export type ButtonCommonStyles = {
  backgroundColor: string;
  colorText: string;
  borderColor: string;
  opacity?: number;
};

export type ButtonGradientStyles = {
  text: string;
  gradientColors: {
    gradientStart: string;
    gradientEnd: string;
  };
  opacity?: number;
};

export type ButtonStylesByState = {
  default: ButtonCommonStyles;
  hover: ButtonCommonStyles;
  active: ButtonCommonStyles;
  disabled: ButtonCommonStyles;
};

export type ToggleStyles = {
  background: string;
  borderColor: string;
  ballBackground: string;
};

export type ToggleStylesByState = {
  default: ToggleStyles;
};
