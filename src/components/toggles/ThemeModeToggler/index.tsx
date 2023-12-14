import React from 'react';
import { ToggleLabel } from './ToggleLabel';
import { ToggleInputCheckbox } from './ToggleInputCheckbox';
import { TogglerBall } from './TogglerBall';
import { ThemeModes } from '../../../types/personalization/typesThemes';
import { ToggleModeThemeContext } from '../../../providers/ToggleModeThemeProvider/ToggleModeThemeContext';

export default function ThemeModeToggler() {
  const { setThemeMode } = React.useContext(ToggleModeThemeContext);

  const toggleModeTheme = () => {
    setThemeMode((prevThemeMode: ThemeModes) =>
      prevThemeMode === ThemeModes.light ? ThemeModes.dark : ThemeModes.light,
    );
  };

  return (
    <ToggleLabel htmlFor="theme-mode-toggler">
      <ToggleInputCheckbox
        type="checkbox"
        name="theme-mode-toggler"
        id="theme-mode-toggler"
        onChange={toggleModeTheme}
      />
      <TogglerBall />
    </ToggleLabel>
  );
}
