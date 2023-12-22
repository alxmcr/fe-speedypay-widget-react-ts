import { ColorScales } from '../../types/personalization/typesColors';
import { TabStyles, TabStylesByState } from '../../types/styles/typesStylesElements';
import { ThemeModes } from '../../types/personalization/typesThemes';

export const getTabStyles = (
  theme: ThemeModes,
  colorScales: ColorScales,
): TabStylesByState => {
  const defaultStyles: TabStyles = {
    backgroundColor: 'transparent',
    borderColor:
      theme === ThemeModes.light
        ? colorScales.scales[500]
        : colorScales.scales[300],
    colorText:
      theme === ThemeModes.light
        ? colorScales.scales[500]
        : colorScales.scales[300],
  };
  const hoverStyles: TabStyles = {
    backgroundColor:
      theme === ThemeModes.light
        ? colorScales.scales[50]
        : colorScales.scales[300],
    borderColor:
      theme === ThemeModes.light
        ? colorScales.scales[700]
        : colorScales.scales[300],
    colorText:
      theme === ThemeModes.light
        ? colorScales.scales[700]
        : colorScales.scales[950],
  };

  const selectedStyles: TabStyles = {
    backgroundColor:
      theme === ThemeModes.light
        ? colorScales.scales[50]
        : colorScales.scales[950],
    borderColor:
      theme === ThemeModes.light
        ? colorScales.scales[700]
        : colorScales.scales[300],
    colorText:
      theme === ThemeModes.light
        ? colorScales.scales[700]
        : colorScales.scales[300],
  };

  const activeStyles: TabStyles = {
    backgroundColor:
      theme === ThemeModes.light
        ? colorScales.scales[100]
        : colorScales.scales[900],
    borderColor:
      theme === ThemeModes.light
        ? colorScales.scales[700]
        : colorScales.scales[300],
    colorText:
      theme === ThemeModes.light
        ? colorScales.scales[700]
        : colorScales.scales[300],
  };

  const disabledStyles: TabStyles = {
    backgroundColor: theme === ThemeModes.light ? 'transparent' : 'transparent',
    borderColor:
      theme === ThemeModes.light
        ? colorScales.scales[700]
        : colorScales.scales[300],
    colorText:
      theme === ThemeModes.light
        ? colorScales.scales[700]
        : colorScales.scales[300],
    opacity: 0.5,
  };

  const tabStylesByStates: TabStylesByState = {
    default: defaultStyles,
    hover: hoverStyles,
    active: activeStyles,
    disabled: disabledStyles,
    selected: selectedStyles,
  };

  return tabStylesByStates;
};
