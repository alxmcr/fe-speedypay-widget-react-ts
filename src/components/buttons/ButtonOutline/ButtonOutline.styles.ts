import { StylesButtonStates } from '../../../../../@types/styles/stylesElementsTypes';
import { ATOLL } from '../../../../../styles/_color-scales/atoll';

export const lightThemeBtnOutline: StylesButtonStates = {
  default: {
    background: 'transparent',
    borderColor: ATOLL[700],
    text: ATOLL[700],
  },
  hover: {
    background: ATOLL[50],
    borderColor: ATOLL[700],
    text: ATOLL[700],
  },
  active: {
    background: ATOLL[100],
    borderColor: ATOLL[700],
    text: ATOLL[700],
  },
  disabled: {
    background: 'transparent',
    borderColor: ATOLL[700],
    text: ATOLL[700],
    opacity: 0.5,
  },
};

export const darkThemeBtnOutline: StylesButtonStates = {
  default: {
    background: 'transparent',
    borderColor: ATOLL[300],
    text: ATOLL[300],
  },
  hover: {
    background: ATOLL[950],
    borderColor: ATOLL[300],
    text: ATOLL[300],
  },
  active: {
    background: ATOLL[900],
    borderColor: ATOLL[300],
    text: ATOLL[300],
  },
  disabled: {
    background: 'transparent',
    borderColor: ATOLL[300],
    text: ATOLL[300],
    opacity: 0.5,
  },
};
