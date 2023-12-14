import { StylesButtonStates } from '../../../../../@types/styles/stylesElementsTypes';
import { ATOLL } from '../../../../../styles/_color-scales/atoll';
import { IRON } from '../../../../../styles/_color-scales/iron';

export const lightThemeBtnSolid: StylesButtonStates = {
  default: {
    background: ATOLL[500],
    borderColor: ATOLL[500],
    text: IRON[50],
  },
  hover: {
    background: ATOLL[600],
    borderColor: ATOLL[600],
    text: IRON[50],
  },
  active: {
    background: ATOLL[700],
    borderColor: ATOLL[700],
    text: IRON[50],
  },
  disabled: {
    background: ATOLL[200],
    borderColor: ATOLL[200],
    text: ATOLL[700],
    opacity: 0.5,
  },
};

export const darkThemeBtnSolid: StylesButtonStates = {
  default: {
    background: ATOLL[400],
    borderColor: ATOLL[400],
    text: ATOLL[950],
  },
  hover: {
    background: ATOLL[300],
    borderColor: ATOLL[300],
    text: ATOLL[950],
  },
  active: {
    background: ATOLL[500],
    borderColor: ATOLL[500],
    text: ATOLL[950],
  },
  disabled: {
    background: ATOLL[800],
    borderColor: ATOLL[800],
    text: ATOLL[100],
    opacity: 0.5,
  },
};
