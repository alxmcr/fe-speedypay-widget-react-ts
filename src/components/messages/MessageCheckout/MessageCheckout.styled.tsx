import styled from 'styled-components';

export const MessageCheckoutStyled = styled.article`
  border-radius: 0.5rem;
  background-color: ${(props) =>
    props.theme.styles.messages.default.background};
  border: 1px solid
    ${(props) => props.theme.styles.messages.default.borderColor};
  color: ${(props) => props.theme.styles.messages.default.text};
  padding: 0.625rem 0.75rem;

  align-items: flex-start;
  display: flex;
  gap: 1rem;
  justify-content: space-between;

  width: 20.5rem;
`;
