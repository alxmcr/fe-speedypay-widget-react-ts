import styled from 'styled-components';

export const ChargeInfoGroupStyled = styled.div`
  border: 1px solid ${(props) => props.theme.styles.borderColor};
  border-radius: 0.5rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.625rem;
`;
