import {
  HeaderStylesByState,
  InputStylesByState,
  InstructionsStylesByState,
  MessageStylesByState,
  NumbersStylesByState,
  PillStylesByState,
  SelectStylesByState,
  TabStylesByState,
  TemplatesStylesByState,
  ToggleStylesByState,
} from '../styles/typesStylesElements';
import { ButtonStylesVariants } from './typeVariants';

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
  instructions: InstructionsStylesByState;
  templates: TemplatesStylesByState;
};

export type AppStyles = AppCommonStyles & AppStylesByElements;
