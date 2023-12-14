import React from 'react';
import { ThemeModes } from '../../types/personalization/typesThemes';
import {
    ToogleModeThemeContext,
    ToogleModeThemeContextData,
} from './ToogleModeThemeContext';

type ToogleModeThemeProviderProps = {
  children: React.ReactNode;
};

export default function ToogleModeThemeProvider({
  children,
}: ToogleModeThemeProviderProps) {
  const [themeMode, setThemeMode] = React.useState(ThemeModes.light);

  const value: ToogleModeThemeContextData = {
    themeMode,
    setThemeMode,
  };

  return (
    <ToogleModeThemeContext.Provider value={value}>
      {children}
    </ToogleModeThemeContext.Provider>
  );
}
