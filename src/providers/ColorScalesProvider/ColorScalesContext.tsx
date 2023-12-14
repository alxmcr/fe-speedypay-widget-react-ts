import React from 'react';
import { ColorScales } from '../../types/personalization/typesColors';
import { ATOLL_COLOR_SCALES } from '../../styles/colors-scales';

export type ColorScalesContextData = {
  themeColorScales: ColorScales;
  setThemeColorScales: React.Dispatch<React.SetStateAction<ColorScales>>;
};

const initialThemeColorScales: ColorScalesContextData = {
  themeColorScales: ATOLL_COLOR_SCALES,
  setThemeColorScales: () => {},
};

export const ColorScalesContext = React.createContext(initialThemeColorScales);
