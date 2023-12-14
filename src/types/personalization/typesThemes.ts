import { AppStylesByElements, AppCommonStyles } from './typesStyles';

export enum ThemeModes {
  dark = 'dark',
  light = 'light',
}

export type AppStyles = AppCommonStyles & AppStylesByElements;
