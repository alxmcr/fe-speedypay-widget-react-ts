import React from 'react';
import { ThemeProvider } from 'styled-components';
import { LIGHT_THEME_ATOLL } from '../../styles/themes/lightThemes';
import { ThemingContext, ThemingContextData } from './ThemingContext';
import { ThemeModes } from '../../types/personalization/typesThemes';
import { ToggleModeThemeContext } from '../ToggleModeThemeProvider/ToggleModeThemeContext';
import { ToggleCodeColorScalesContext } from '../ToggleCodeColorScalesProvider/ToggleCodeColorScalesContext';

type ThemingProviderProps = {
  children: React.ReactNode;
};

export default function ThemingProvider({ children }: ThemingProviderProps) {
  const { themeMode } = React.useContext(ToggleModeThemeContext);
  const { codeColorScales } = React.useContext(ToggleCodeColorScalesContext);

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
