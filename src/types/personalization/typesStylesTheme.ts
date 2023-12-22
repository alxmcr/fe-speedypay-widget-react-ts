import { ButtonStylesVariants } from './typeVariants';
import {
  HeaderStylesByState,
  InputStylesByState,
  MessageStylesByState,
  NumbersStylesByState,
  PillStylesByState,
  SelectStylesByState,
  TabStylesByState,
  ToggleStylesByState,
} from '../styles/typesStylesElements';

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
  tabs: TabStylesByState;
  headers: HeaderStylesByState;
  numbers: NumbersStylesByState;
};

export type AppStyles = AppCommonStyles & AppStylesByElements;
