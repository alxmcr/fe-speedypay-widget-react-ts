import styled from 'styled-components';

type FormFieldStyledProps = {
  width: string;
};

export const FormFieldStyled = styled.div<FormFieldStyledProps>`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: ${(props) => props.width};
  flex-grow: 1;
`;
