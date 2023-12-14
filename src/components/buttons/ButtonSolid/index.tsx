import styled from 'styled-components';
import { ButtonBase } from '../ButtonBase';

export const ButtonSolid = styled(ButtonBase)`
  background-color: ${(props) => props.theme.buttons.solid.default.background};
  border: 1px solid ${(props) => props.theme.buttons.solid.default.borderColor};
  color: ${(props) => props.theme.buttons.solid.default.text};

  &:hover {
    background-color: ${(props) => props.theme.buttons.solid.hover.background};
    border: 1px solid ${(props) => props.theme.buttons.solid.hover.borderColor};
    color: ${(props) => props.theme.buttons.solid.hover.text};
  }

  &:active {
    background-color: ${(props) => props.theme.buttons.solid.active.background};
    border: 1px solid ${(props) => props.theme.buttons.solid.active.borderColor};
    color: ${(props) => props.theme.buttons.solid.active.text};
  }

  &:disabled {
    background-color: ${(props) =>
      props.theme.buttons.solid.disabled.background};
    border: 1px solid
      ${(props) => props.theme.buttons.solid.disabled.borderColor};
    color: ${(props) => props.theme.buttons.solid.disabled.text};
    opacity: ${(props) => props.theme.buttons.solid.disabled.opacity};
  }
`;
