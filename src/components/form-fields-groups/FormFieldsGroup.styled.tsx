import styled from 'styled-components';

type FormFieldsGroupStyledProps = {
  $flexDirection: 'row' | 'column';
};

export const FormFieldsGroupStyled = styled.div<FormFieldsGroupStyledProps>`
  display: flex;
  flex-direction: ${(props) => props.$flexDirection};
  gap: 1.25rem;
`;
