export const getThemeByColorScale = (
  theme: ThemeModes,
  codeColorScale: CodesColorScales,
): AppTheme => {
  const baseTheme = getBaseThemeByColorScale(theme, codeColorScale);

  const themeByColor: AppTheme = {
    ...baseTheme,
    buttons: {
      solid: getStylesForButtonSolidStates(theme, codeColorScale),
      gradient: getStylesForButtonGradientStates(theme, codeColorScale),
      outline: getStylesForButtonOutlineStates(theme, codeColorScale),
    },
    cards: {
      cardInstructions: getStylesForCardInstructionsStates(
        theme,
        codeColorScale,
      ),
    },
    headers: {
      paymentForm: getStylesForHeaderPaymentFormStates(theme, codeColorScale),
    },
    inputs: {
      inputText: getStylesForInputStates(theme, codeColorScale),
    },
    pills: {
      pillAmountToPay: getStylesForPillAmountToPayStates(theme, codeColorScale),
    },
    selects: {
      installments: getStylesForSelectStates(theme, codeColorScale),
    },
    tabs: {
      paymentMethodTab: getStylesForTabStates(theme, codeColorScale),
    },
    tooglers: {
      themeToggler: getStylesForTogglerStates(theme, codeColorScale),
    },
  };

  return themeByColor;
};
