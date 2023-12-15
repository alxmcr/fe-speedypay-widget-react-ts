import styled from 'styled-components';

type ButtonSolidStyledProps = {
  $fullWidth?: boolean;
};

export const ButtonSolidStyled = styled.button<ButtonSolidStyledProps>`
  background-color: ${(props) =>
    props.theme.styles.buttons.solid.default.backgroundColor};
  color: ${(props) => props.theme.styles.buttons.solid.default.colorText};

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
    background-color: ${(props) =>
      props.theme.styles.buttons.solid.hover.backgroundColor};
    border: 1px solid
      ${(props) => props.theme.styles.buttons.solid.hover.borderColor};
    color: ${(props) => props.theme.styles.buttons.solid.hover.colorText};
  }

  &:active {
    background-color: ${(props) =>
      props.theme.styles.buttons.solid.active.backgroundColor};
    border: 1px solid
      ${(props) => props.theme.styles.buttons.solid.active.borderColor};
    color: ${(props) => props.theme.styles.buttons.solid.active.colorText};
  }

  &:disabled {
    background-color: ${(props) =>
      props.theme.styles.buttons.solid.disabled.backgroundColor};
    border: 1px solid
      ${(props) => props.theme.styles.buttons.solid.disabled.borderColor};
    color: ${(props) => props.theme.styles.buttons.solid.disabled.colorText};
    opacity: ${(props) => props.theme.styles.buttons.solid.disabled.opacity};
  }
`;
