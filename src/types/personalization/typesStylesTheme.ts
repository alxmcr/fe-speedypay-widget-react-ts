import { ButtonStylesVariants } from './typeVariants';
import {
  InputStylesByState,
  MessageStylesByState,
  PillStylesByState,
  SelectStylesByState,
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
  selects: SelectStylesByState;
  messages: MessageStylesByState;
};

export type AppStyles = AppCommonStyles & AppStylesByElements;
