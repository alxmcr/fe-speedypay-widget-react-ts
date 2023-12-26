import React from 'react';
import { ThemeProvider } from 'styled-components';
import { getThemeByColorScale } from '../../../helpers/personalization/helpers-theme';
import { ToggleCodeColorScalesContext } from '../ToggleCodeColorScalesProvider/ToggleCodeColorScalesContext';
import { ToggleModeThemeContext } from '../ToggleModeThemeProvider/ToggleModeThemeContext';
import {
  DARK_THEME_ATOLL,
  ThemingContext,
  ThemingContextData,
} from './ThemingContext';

type ThemingProviderProps = {
  children: React.ReactNode;
};

export default function ThemingProvider({ children }: ThemingProviderProps) {
  const { themeMode } = React.useContext(ToggleModeThemeContext);
  const { codeColorScalesSelected } = React.useContext(
    ToggleCodeColorScalesContext,
  );

  const [themePersonalized, setThemePersonalized] =
    React.useState(DARK_THEME_ATOLL);

  const value: ThemingContextData = {
    themePersonalized,
    setThemePersonalized,
  };

  React.useEffect(() => {
    const theme = getThemeByColorScale(themeMode, codeColorScalesSelected);
    setThemePersonalized(theme);
  }, [themeMode, codeColorScalesSelected]);

  return (
    <ThemeProvider theme={themePersonalized}>
      <ThemingContext.Provider value={value}>
        {children}
      </ThemingContext.Provider>
    </ThemeProvider>
  );
}
