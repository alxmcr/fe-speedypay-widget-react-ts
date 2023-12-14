import styled from 'styled-components';

type ButtonBaseOutlineProps = {
  $fullWidth?: boolean;
};

export const ButtonBaseOutline = styled.button<ButtonBaseOutlineProps>`
  background-color: ${(props) =>
    props.theme.styles.buttons.outline.default.background};
  border: 1px solid
    ${(props) => props.theme.styles.buttons.outline.default.borderColor};
  color: ${(props) => props.theme.styles.buttons.outline.default.text};

  &:hover {
    background-color: ${(props) =>
      props.theme.styles.buttons.outline.hover.background};
    border: 1px solid
      ${(props) => props.theme.styles.buttons.outline.hover.borderColor};
    color: ${(props) => props.theme.styles.buttons.outline.hover.text};
  }

  &:active {
    background-color: ${(props) =>
      props.theme.styles.buttons.outline.active.background};
    border: 1px solid
      ${(props) => props.theme.styles.buttons.outline.active.borderColor};
    color: ${(props) => props.theme.styles.buttons.outline.active.text};
  }

  &:disabled {
    background-color: ${(props) =>
      props.theme.styles.buttons.outline.disabled.background};
    border: 1px solid
      ${(props) => props.theme.styles.buttons.outline.disabled.borderColor};
    color: ${(props) => props.theme.styles.buttons.outline.disabled.text};
    opacity: ${(props) => props.theme.styles.buttons.outline.disabled.opacity};
  }
`;
