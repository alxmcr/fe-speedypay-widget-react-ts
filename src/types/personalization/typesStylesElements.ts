// Buttons
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

// Toggle
export type ToggleStyles = {
  backgroundColor: string;
  borderColor: string;
  ballBackground: string;
};

export type ToggleStylesByState = {
  default: ToggleStyles;
};

// Input
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

// Pill
export type PillStyles = {
  backgroundColor: string;
  colorText: string;
  borderColor: string;
};

export type PillStylesByState = {
  default: PillStyles;
};

// Select
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

// Messages
export type MessageStyles = {
  backgroundColor: string;
  colorText: string;
  borderColor: string;
};

export type MessageStylesByState = {
  default: MessageStyles;
};

// Tabs
export type TabStyles = {
  backgroundColor: string;
  colorText: string;
  borderColor: string;
  placeholderColor?: string;
  opacity?: number;
};

export type TabStylesByState = {
  default: TabStyles;
  active: TabStyles;
  hover: TabStyles;
  disabled: TabStyles;
  selected: TabStyles;
};
