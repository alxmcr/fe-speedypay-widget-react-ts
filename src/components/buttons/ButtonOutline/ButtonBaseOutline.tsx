import styled from 'styled-components';

type ButtonBaseOutlineProps = {
  $fullWidth?: boolean;
};

export const ButtonBaseOutline = styled.button<ButtonBaseOutlineProps>`
  background-color: transparent;
  color: ${(props) => props.theme.styles.buttons.outline.default.colorText};

  border: 1px solid ${(props) => props.theme.styles.buttons.outline.default.borderColor};;
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
    background-color: ${(props) =>
      props.theme.styles.buttons.outline.hover.backgroundColor};
    border: 1px solid
      ${(props) => props.theme.styles.buttons.outline.hover.borderColor};
    color: ${(props) => props.theme.styles.buttons.outline.hover.colorText};
  }

  &:active {
    background-color: ${(props) =>
      props.theme.styles.buttons.outline.active.backgroundColor};
    border: 1px solid
      ${(props) => props.theme.styles.buttons.outline.active.borderColor};
    color: ${(props) => props.theme.styles.buttons.outline.active.colorText};
  }

  &:disabled {
    background-color: ${(props) =>
      props.theme.styles.buttons.outline.disabled.backgroundColor};
    border: 1px solid
      ${(props) => props.theme.styles.buttons.outline.disabled.borderColor};
    color: ${(props) => props.theme.styles.buttons.outline.disabled.colorText};
    opacity: ${(props) => props.theme.styles.buttons.outline.disabled.opacity};
  }
`;
