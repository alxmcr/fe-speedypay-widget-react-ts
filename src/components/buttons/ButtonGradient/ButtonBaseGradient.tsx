import styled from 'styled-components';

type ButtonGradientProps = {
  $fullWidth?: boolean;
};

export const ButtonBaseGradient = styled.button<ButtonGradientProps>`
  background: linear-gradient(
    135deg,
    ${(props) =>
      props.theme.styles.buttons.gradient.default.gradientColors.gradientStart},
    ${(props) =>
      props.theme.styles.buttons.gradient.default.gradientColors.gradientEnd}
  );
  color: ${(props) => props.theme.styles.buttons.gradient.default.colorText};

  &:hover {
    background: linear-gradient(
      135deg,
      ${(props) =>
        props.theme.styles.buttons.gradient.hover.gradientColors.gradientStart},
      ${(props) =>
        props.theme.styles.buttons.gradient.hover.gradientColors.gradientEnd}
    );
    color: ${(props) => props.theme.styles.buttons.gradient.hover.colorText};
  }

  &:active {
    background: linear-gradient(
      135deg,
      ${(props) =>
        props.theme.styles.buttons.gradient.active.gradientColors.gradientStart},
      ${(props) =>
        props.theme.styles.buttons.gradient.active.gradientColors.gradientEnd}
    );
    color: ${(props) => props.theme.styles.buttons.gradient.active.colorText};
  }

  &:disabled {
    background: linear-gradient(
      135deg,
      ${(props) =>
        props.theme.styles.buttons.gradient.disabled.gradientColors.gradientStart},
      ${(props) =>
        props.theme.styles.buttons.gradient.disabled.gradientColors.gradientEnd}
    );
    color: ${(props) => props.theme.styles.buttons.gradient.disabled.colorText};
    opacity: ${(props) => props.theme.styles.buttons.gradient.disabled.opacity};
  }
`;
