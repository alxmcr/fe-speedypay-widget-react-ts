import styled from 'styled-components';

type AppSelectStyledProps = {
  $width: string;
};

export const AppSelectStyled = styled.select<AppSelectStyledProps>`
  border: 1px solid
    ${(props) => props.theme.styles.selects.installments.default.borderColor};
  border-radius: 0.5rem;
  background: ${(props) =>
    props.theme.styles.selects.installments.default.background};
  color: ${(props) => props.theme.styles.selects.installments.default.text};
  font-size: 1rem;
  padding: 0 0.75rem;
  height: 2.5625rem;
  width: ${(props) => props.$width};
`;
