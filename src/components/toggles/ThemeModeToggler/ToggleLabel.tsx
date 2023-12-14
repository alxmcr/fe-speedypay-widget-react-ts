import styled from 'styled-components';

export const ToggleLabel = styled.label`
  border: 1px solid
    ${(props) => props.theme.styles.togglers.default.borderColor};
  border-radius: 30px;

  display: flex;
  align-items: center;
  justify-items: flex-start;

  padding: 0.5rem;
  width: 110px;
  height: 56px;
`;
