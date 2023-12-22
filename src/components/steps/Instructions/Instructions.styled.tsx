import styled from 'styled-components';

export const InstructionsStyled = styled.div`
  background-color: ${(props) =>
    props.theme.styles.instructions.default.backgroundColor};
  color: ${(props) => props.theme.styles.instructions.default.colorText};
  border-radius: 0.5rem;
  padding: 0.8125rem 0.875rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
