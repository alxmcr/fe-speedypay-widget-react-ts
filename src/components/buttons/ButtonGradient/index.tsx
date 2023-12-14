import styled from 'styled-components';
import { ButtonBase } from '../ButtonBase';

export const ButtonGradient = styled(ButtonBase)`
  background: linear-gradient(
    135deg,
    ${(props) =>
      props.theme.buttons.gradient.default.gradientColors.gradientStart},
    ${(props) =>
      props.theme.buttons.gradient.default.gradientColors.gradientEnd}
  );
  color: ${(props) => props.theme.buttons.gradient.default.text};

  &:hover {
    background: linear-gradient(
      135deg,
      ${(props) =>
        props.theme.buttons.gradient.hover.gradientColors.gradientStart},
      ${(props) =>
        props.theme.buttons.gradient.hover.gradientColors.gradientEnd}
    );
    color: ${(props) => props.theme.buttons.gradient.hover.text};
  }

  &:active {
    background: linear-gradient(
      135deg,
      ${(props) =>
        props.theme.buttons.gradient.active.gradientColors.gradientStart},
      ${(props) =>
        props.theme.buttons.gradient.active.gradientColors.gradientEnd}
    );
    color: ${(props) => props.theme.buttons.gradient.active.text};
  }

  &:disabled {
    background: linear-gradient(
      135deg,
      ${(props) =>
        props.theme.buttons.gradient.disabled.gradientColors.gradientStart},
      ${(props) =>
        props.theme.buttons.gradient.disabled.gradientColors.gradientEnd}
    );
    color: ${(props) => props.theme.buttons.gradient.disabled.text};
    opacity: ${(props) => props.theme.buttons.gradient.disabled.opacity};
  }
`;
