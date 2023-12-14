import { ButtonStylesVariants } from './typeVariants';

export type AppCommonStyles = {
  background: string;
  borderColor: string;
  text: string;
  scrollBarBackground?: string;
  scrollBarTrackColor?: string;
};

export type AppStylesByElements = {
  buttons: ButtonStylesVariants;
};

export type AppStyles = AppCommonStyles & AppStylesByElements;
