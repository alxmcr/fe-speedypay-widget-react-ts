import React from 'react';
import { ThemeProvider } from 'styled-components';
import { LIGHT_THEME_ATOLL } from '../../styles/themes/lightThemes';
import {
  ThemeModeStyledContext,
  ThemeModeStyledContextData,
} from './ThemeModeStyledContext';

type ThemeModeStyledProviderProps = {
  children: React.ReactNode;
};

export default function ThemeModeStyledProvider({
  children,
}: ThemeModeStyledProviderProps) {
  const [themePersonalized, setThemePersonalized] =
    React.useState(LIGHT_THEME_ATOLL);

  const value: ThemeModeStyledContextData = {
    themePersonalized,
    setThemePersonalized,
  };

  return (
    <ThemeModeStyledContext.Provider value={value}>
      <ThemeProvider theme={themePersonalized}>{children}</ThemeProvider>
    </ThemeModeStyledContext.Provider>
  );
}
