import styled from 'styled-components';

type AppSelectStyledProps = {
  $width: string;
};

export const AppSelectStyled = styled.select<AppSelectStyledProps>`
  background: ${(props) => props.theme.styles.selects.default.backgroundColor};
  border: 1px solid ${(props) => props.theme.styles.selects.default.borderColor};
  border-radius: 0.5rem;
  color: ${(props) => props.theme.styles.selects.default.colorText};
  font-size: 1rem;
  padding: 0 0.75rem;
  height: 2.5625rem;
  width: ${(props) => props.$width};
`;
