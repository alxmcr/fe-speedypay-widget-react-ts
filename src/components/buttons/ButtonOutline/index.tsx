import styled from 'styled-components';
import { ButtonBase } from '../ButtonBase';

export const ButtonOutline = styled(ButtonBase)`
  background-color: ${(props) =>
    props.theme.buttons.outline.default.background};
  border: 1px solid
    ${(props) => props.theme.buttons.outline.default.borderColor};
  color: ${(props) => props.theme.buttons.outline.default.text};

  &:hover {
    background-color: ${(props) =>
      props.theme.buttons.outline.hover.background};
    border: 1px solid
      ${(props) => props.theme.buttons.outline.hover.borderColor};
    color: ${(props) => props.theme.buttons.outline.hover.text};
  }

  &:active {
    background-color: ${(props) =>
      props.theme.buttons.outline.active.background};
    border: 1px solid
      ${(props) => props.theme.buttons.outline.active.borderColor};
    color: ${(props) => props.theme.buttons.outline.active.text};
  }

  &:disabled {
    background-color: ${(props) =>
      props.theme.buttons.outline.disabled.background};
    border: 1px solid
      ${(props) => props.theme.buttons.outline.disabled.borderColor};
    color: ${(props) => props.theme.buttons.outline.disabled.text};
    opacity: ${(props) => props.theme.buttons.outline.disabled.opacity};
  }
`;
