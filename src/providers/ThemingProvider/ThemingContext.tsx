import React from 'react';
import { getThemeByColorScale } from '../../styles/helpers/helpers-theme';
import { CodesForColorScales } from '../../types/personalization/enumsPersonalization';
import { AppThemeStyles, ThemeModes } from '../../types/personalization/typesThemes';

export const LIGHT_THEME_ATOLL: AppThemeStyles = getThemeByColorScale(
  ThemeModes.light,
  CodesForColorScales.atoll,
);

export type ThemingContextData = {
  themePersonalized: AppThemeStyles;
  setThemePersonalized: React.Dispatch<React.SetStateAction<AppThemeStyles>>;
};

const initialThemePersonalized: ThemingContextData = {
  themePersonalized: LIGHT_THEME_ATOLL,
  setThemePersonalized: () => {},
};

export const ThemingContext = React.createContext(initialThemePersonalized);
