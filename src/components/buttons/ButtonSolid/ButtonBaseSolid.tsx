import styled from 'styled-components';

type ButtonBaseSolidProps = {
  $fullWidth?: boolean;
};

export const ButtonBaseSolid = styled.button<ButtonBaseSolidProps>`
  background-color: ${(props) => props.theme.buttons.solid.default.background};
  color: ${(props) => props.theme.buttons.solid.default.text};

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
