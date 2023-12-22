import { ColorScales } from '../../types/personalization/typesColors';
import {
  MessageStyles,
  MessageStylesByState,
} from '../../types/styles/typesStylesElements';
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

  const messagesStylesByStates: MessageStylesByState = {
    default: defaultStyles,
  };

  return messagesStylesByStates;
};
