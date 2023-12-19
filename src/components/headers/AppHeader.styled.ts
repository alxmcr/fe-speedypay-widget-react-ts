import styled from 'styled-components';

export const AppHeaderStyled = styled.header`
  background-color: ${(props) =>
    props.theme.styles.headers.default.backgroundColor};
  color: ${(props) => props.theme.styles.headers.default.colorText};
  border-radius: 0.5rem 0.5rem 0rem 0rem;

  align-items: center;
  display: flex;
  height: 4.375rem;
  gap: 1.8125rem;
  justify-content: space-between;
  width: 22.5rem;

  padding: 0.875rem 0.9375rem 0.875rem 1rem;
`;
