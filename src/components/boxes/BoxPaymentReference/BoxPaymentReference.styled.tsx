import styled from 'styled-components';

export const BoxPaymentReferenceStyled = styled.div`
  border: 1px solid ${(props) => props.theme.styles.borderColor};
  border-radius: 0.5rem;
  padding: 1.25rem 1.375rem;

  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
