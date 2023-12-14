import React from 'react';
import { ATOLL_COLOR_SCALES } from '../../styles/colors-scales';
import {
  ColorScalesContext,
  ColorScalesContextData,
} from './ColorScalesContext';

type ColorScalesProviderProps = {
  children: React.ReactNode;
};

export default function ColorScalesProvider({
  children,
}: ColorScalesProviderProps) {
  const [themeColorScales, setThemeColorScales] =
    React.useState(ATOLL_COLOR_SCALES);

  const value: ColorScalesContextData = {
    themeColorScales,
    setThemeColorScales,
  };

  return (
    <ColorScalesContext.Provider value={value}>
      {children}
    </ColorScalesContext.Provider>
  );
}
