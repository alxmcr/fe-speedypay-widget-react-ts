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
  background: string;
  borderColor: string;
  ballBackground: string;
};

export type ToggleStylesByState = {
  default: ToggleStyles;
};
