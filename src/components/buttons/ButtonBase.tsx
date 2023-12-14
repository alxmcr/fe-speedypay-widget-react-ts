import styled from 'styled-components';

export type ButtonBaseProps = {
  disabled?: boolean;
  onClick: () => void;
  children: React.ReactNode;
};

export const ButtonBase = styled.button<ButtonBaseProps>`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 16px;
  cursor: pointer;
`;
