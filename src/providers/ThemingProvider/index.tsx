import React from 'react';
import { ThemeProvider } from 'styled-components';
import { LIGHT_THEME_ATOLL } from '../../styles/themes/lightThemes';
import { ThemingContext, ThemingContextData } from './ThemingContext';

type ThemingProviderProps = {
  children: React.ReactNode;
};

export default function ThemingProvider({ children }: ThemingProviderProps) {
  const [themePersonalized, setThemePersonalized] =
    React.useState(LIGHT_THEME_ATOLL);

  const value: ThemingContextData = {
    themePersonalized,
    setThemePersonalized,
  };

  return (
    <ThemeProvider theme={themePersonalized}>
      <ThemingContext.Provider value={value}>
        {children}
      </ThemingContext.Provider>
    </ThemeProvider>
  );
}
