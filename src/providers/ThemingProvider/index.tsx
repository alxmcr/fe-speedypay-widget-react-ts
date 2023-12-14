import React from 'react';
import { ThemeProvider } from 'styled-components';
import { LIGHT_THEME_ATOLL } from '../../styles/themes/lightThemes';
import { ThemingContext, ThemingContextData } from './ThemingContext';
import { ToogleModeThemeContext } from '../ToogleModeThemeProvider/ToogleModeThemeContext';
import { ThemeModes } from '../../types/personalization/typesThemes';

type ThemingProviderProps = {
  children: React.ReactNode;
};

export default function ThemingProvider({ children }: ThemingProviderProps) {
  const { themeMode } = React.useContext(ToogleModeThemeContext);
  const [themePersonalized, setThemePersonalized] =
    React.useState(LIGHT_THEME_ATOLL);

  const value: ThemingContextData = {
    themePersonalized,
    setThemePersonalized,
  };

  React.useEffect(() => {
    if (themeMode === ThemeModes.light) {
      
    } else if (themeMode === ThemeModes.dark) {

    }
  }, [themeMode]);

  return (
    <ThemeProvider theme={themePersonalized}>
      <ThemingContext.Provider value={value}>
        {children}
      </ThemingContext.Provider>
    </ThemeProvider>
  );
}
