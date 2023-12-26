import { ColorScales } from '../../types/personalization/typesColorsScales';
import { ThemeModes } from '../../types/personalization/typesThemes';
import {
    InstructionsStyles,
    InstructionsStylesByState,
} from '../../types/styles/typesStylesElements';

export const getInstructionssStyles = (
  theme: ThemeModes,
  colorScales: ColorScales,
): InstructionsStylesByState => {
  const defaultStyles: InstructionsStyles = {
    backgroundColor:
      theme === ThemeModes.light
        ? colorScales.scales[100]
        : colorScales.scales[900],
    borderColor:
      theme === ThemeModes.light
        ? colorScales.scales[950]
        : colorScales.scales[300],
    colorText:
      theme === ThemeModes.light
        ? colorScales.scales[700]
        : colorScales.scales[300],
  };

  const instructionsStylesByStates: InstructionsStylesByState = {
    default: defaultStyles,
  };

  return instructionsStylesByStates;
};
