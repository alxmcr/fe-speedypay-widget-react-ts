import styled from 'styled-components';

export const AppTemplateStyled = styled.article`
  background-color: ${(props) =>
    props.theme.styles.templates.default.backgroundColor};

  border-radius: 0.5rem;

  display: flex;
  flex-direction: column;
  gap: 1.875rem;
  padding-bottom: 1.875rem;

  width: 22.5rem;
`;
