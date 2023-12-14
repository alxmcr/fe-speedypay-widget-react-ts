import { ButtonStylesVariants } from './typeVariants';
import { ToggleStylesByState } from './typesElementsStyles';

export type AppCommonStyles = {
  backgroundColor: string;
  borderColor: string;
  colorText: string;
  scrollBarBackground?: string;
  scrollBarTrackColor?: string;
};

export type AppStylesByElements = {
  buttons: ButtonStylesVariants;
  togglers: ToggleStylesByState;
};

export type AppStyles = AppCommonStyles & AppStylesByElements;
