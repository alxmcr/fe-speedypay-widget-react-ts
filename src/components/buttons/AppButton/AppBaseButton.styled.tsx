import styled from 'styled-components';

type AppBaseButtonProps = {
  $fullWidth?: boolean;
};

const AppBaseButton = styled.button<AppBaseButtonProps>`
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

  background-color: #555;
  color: #888;

  &:hover {
    background-color: #787;
    color: #111;
  }

  &:active {
    background-color: #238;
    color: #987;
  }

  &:disabled {
    background-color: #789;
    color: #239;
    opacity: #268;
  }
`;

AppBaseButton.displayName = `AppBaseButton`;

export { AppBaseButton };
