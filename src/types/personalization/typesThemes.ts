import { AppStyles } from './typesAppStyles';

export enum ThemeModes {
  dark = 'dark',
  light = 'light',
}

export type AppTheme = {
  mode: ThemeModes;
  styles: AppStyles;
};
