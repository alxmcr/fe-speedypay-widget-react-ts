import { ColorScales } from '../../types/personalization/typesColors';
import {
  MessageStyles,
  MessageStylesByState,
} from '../../types/personalization/typesStylesElements';
import { ThemeModes } from '../../types/personalization/typesThemes';

export const getMessagesStyles = (
  theme: ThemeModes,
  colorScales: ColorScales,
): MessageStylesByState => {
  const defaultStyles: MessageStyles = {
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

  const cardInstructionsStylesByStates: MessageStylesByState = {
    default: defaultStyles,
  };

  return cardInstructionsStylesByStates;
};
