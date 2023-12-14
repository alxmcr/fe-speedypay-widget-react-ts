import { ButtonVariants } from './typeVariants';

export enum ThemeModes {
  dark = 'dark',
  light = 'light',
}

export type AppCommonStyles = {
  mode: ThemeModes;
  background: string;
  borderColor: string;
  text: string;
  scrollBarBackground?: string;
  scrollBarTrackColor?: string;
};

export type AppStylesByElements = {
  buttons: ButtonVariants;
};

export type AppTheme = AppCommonStyles & AppStylesByElements;
