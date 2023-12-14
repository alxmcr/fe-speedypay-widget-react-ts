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

  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem 0.5625rem;

  cursor: pointer;

  align-items: center;
  display: flex;
  gap: 0.5rem;
  justify-content: center;

  height: 2.5625rem;
  width: ${(props) => (props.$fullWidth ? '100%' : 'auto')};

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
        props.theme.styles.buttons.gradient.active.gradientColors
          .gradientStart},
      ${(props) =>
        props.theme.styles.buttons.gradient.active.gradientColors.gradientEnd}
    );
    color: ${(props) => props.theme.styles.buttons.gradient.active.colorText};
  }

  &:disabled {
    background: linear-gradient(
      135deg,
      ${(props) =>
        props.theme.styles.buttons.gradient.disabled.gradientColors
          .gradientStart},
      ${(props) =>
        props.theme.styles.buttons.gradient.disabled.gradientColors.gradientEnd}
    );
    color: ${(props) => props.theme.styles.buttons.gradient.disabled.colorText};
    opacity: ${(props) => props.theme.styles.buttons.gradient.disabled.opacity};
  }
`;
