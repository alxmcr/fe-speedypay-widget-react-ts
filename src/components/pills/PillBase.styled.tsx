import styled from 'styled-components';

export const PillBaseStyled = styled.div`
  border-radius: 0.5rem;
  background-color: ${(props) =>
    props.theme.styles.pills.default.backgroundColor};
  color: ${(props) => props.theme.styles.pills.default.colorText};

  width: 10rem;
  height: 2.625rem;
  padding: 0.4375rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;
