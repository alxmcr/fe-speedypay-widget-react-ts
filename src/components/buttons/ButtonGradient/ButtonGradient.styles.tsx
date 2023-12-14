import { StylesButtonGradientStates } from '../../../../../@types/styles/stylesElementsTypes';
import { ATOLL } from '../../../../../styles/_color-scales/atoll';
import { IRON } from '../../../../../styles/_color-scales/iron';

export const lightThemeBtnGradient: StylesButtonGradientStates = {
  default: {
    gradientColors: {
      gradientEnd: ATOLL[400],
      gradientStart: ATOLL[600],
    },
    text: IRON[50],
  },
  hover: {
    gradientColors: {
      gradientEnd: ATOLL[500],
      gradientStart: ATOLL[700],
    },
    text: IRON[50],
  },
  active: {
    gradientColors: {
      gradientEnd: ATOLL[600],
      gradientStart: ATOLL[800],
    },
    text: IRON[50],
  },
  disabled: {
    gradientColors: {
      gradientEnd: ATOLL[100],
      gradientStart: ATOLL[300],
    },
    text: ATOLL[700],
    opacity: 0.5,
  },
};

export const darkThemeBtnGradient: StylesButtonGradientStates = {
  default: {
    gradientColors: {
      gradientEnd: ATOLL[300],
      gradientStart: ATOLL[300],
    },
    text: ATOLL[950],
  },
  hover: {
    gradientColors: {
      gradientEnd: ATOLL[200],
      gradientStart: ATOLL[400],
    },
    text: ATOLL[950],
  },
  active: {
    gradientColors: {
      gradientEnd: ATOLL[400],
      gradientStart: ATOLL[600],
    },
    text: ATOLL[950],
  },
  disabled: {
    gradientColors: {
      gradientEnd: ATOLL[700],
      gradientStart: ATOLL[900],
    },
    text: ATOLL[100],
    opacity: 0.5,
  },
};
