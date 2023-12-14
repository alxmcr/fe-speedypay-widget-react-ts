import React from 'react';
import { getThemeByColorScale } from '../../styles/helpers/helpers-theme';
import { CodesForColorScales } from '../../types/personalization/enumsPersonalization';
import { AppStyles, ThemeModes } from '../../types/personalization/typesThemes';

export const LIGHT_THEME_ATOLL: AppStyles = getThemeByColorScale(
  ThemeModes.light,
  CodesForColorScales.atoll,
);

export type ThemingContextData = {
  themePersonalized: AppStyles;
  setThemePersonalized: React.Dispatch<React.SetStateAction<AppStyles>>;
};

const initialThemePersonalized: ThemingContextData = {
  themePersonalized: LIGHT_THEME_ATOLL,
  setThemePersonalized: () => {},
};

export const ThemingContext = React.createContext(initialThemePersonalized);
