import { AppCommonStyles, AppStylesByElements } from './typesStyles';

export enum ThemeModes {
  dark = 'dark',
  light = 'light',
}

export type AppTheme = AppCommonStyles & AppStylesByElements;
