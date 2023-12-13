import { ThemeModes } from './enumsPersonalization';
import { ButtonStylesByState } from './typesStyles';

export type AppBaseTheme = {
  mode: ThemeModes;
  background: string;
  borderColor: string;
  text: string;
  scrollBarBackground?: string;
  scrollBarTrackColor?: string;
};

export type ButtonVariants = {
  solid: ButtonStylesByState;
  outline: ButtonStylesByState;
};

export type AppThemeElements = {
  buttons: ButtonVariants;
};

export type AppTheme = AppBaseTheme & AppThemeElements;
