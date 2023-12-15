import { ButtonStylesVariants } from './typeVariants';
import {
  InputStylesByState,
  PillStylesByState,
  ToggleStylesByState,
} from './typesStylesElements';

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
  inputs: InputStylesByState;
  pills: PillStylesByState;
};

export type AppStyles = AppCommonStyles & AppStylesByElements;
