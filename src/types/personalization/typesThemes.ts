import { AppStylesByElements, CommonStyles } from './typesStyles';

export enum ThemeModes {
  dark = 'dark',
  light = 'light',
}

export type AppTheme = CommonStyles & AppStylesByElements;
