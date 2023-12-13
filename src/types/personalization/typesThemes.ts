import { ThemeModes } from './enumsPersonalization';
import { ButtonVariants } from './typeVariants';

export type AppBaseTheme = {
  mode: ThemeModes;
  background: string;
  borderColor: string;
  text: string;
  scrollBarBackground?: string;
  scrollBarTrackColor?: string;
};

export type AppThemeElements = {
  buttons: ButtonVariants;
};

export type AppTheme = AppBaseTheme & AppThemeElements;
