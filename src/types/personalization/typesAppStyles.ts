import { ButtonStylesVariants } from './typeVariants';
import { ToggleStylesByState } from './typesElementsStyles';

export type AppCommonStyles = {
  background: string;
  borderColor: string;
  text: string;
  scrollBarBackground?: string;
  scrollBarTrackColor?: string;
};

export type AppStylesByElements = {
  buttons: ButtonStylesVariants;
  togglers: ToggleStylesByState;
};

export type AppStyles = AppCommonStyles & AppStylesByElements;
