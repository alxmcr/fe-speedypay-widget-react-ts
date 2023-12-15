import InputMask from 'react-input-mask';
import styled from 'styled-components';

export const AppInputWithMaskStyled = styled(InputMask)`
  background-color: ${(props) => props.theme.styles.inputs.default.background};
  border: 1px solid ${(props) => props.theme.styles.inputs.default.borderColor};
  color: ${(props) => props.theme.styles.inputs.default.colorText};
  border-radius: 0.5rem;
  font-size: 16px;
  padding: 0.75rem 1.5rem;

  height: 2.5625rem;

  &::placeholder {
    color: ${(props) => props.theme.styles.inputs.default.placeholderColor};
  }

  &:focus {
    border: 1px solid ${(props) => props.theme.styles.inputs.focus.borderColor};

    box-shadow: 0 0 7px
      ${(props) => props.theme.styles.inputs.focus.borderColor};
    color: ${(props) => props.theme.styles.inputs.focus.colorText};
  }

  &:disabled {
    background-color: ${(props) =>
      props.theme.styles.inputs.disabled.background};
    border: 1px solid
      ${(props) => props.theme.styles.inputs.disabled.borderColor};
    color: ${(props) => props.theme.styles.inputs.disabled.colorText};

    &::placeholder {
      color: ${(props) => props.theme.styles.inputs.disabled.placeholderColor};
    }
  }
`;
