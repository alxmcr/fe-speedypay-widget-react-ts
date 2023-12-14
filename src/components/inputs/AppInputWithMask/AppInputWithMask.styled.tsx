import InputMask from 'react-input-mask';
import styled from 'styled-components';

export const AppInputWithMaskStyled = styled(InputMask)`
  background-color: ${(props) =>
    props.theme.inputs.inputText.default.background};
  border: 1px solid
    ${(props) => props.theme.inputs.inputText.default.borderColor};
  color: ${(props) => props.theme.inputs.inputText.default.text};
  border-radius: 0.5rem;
  font-size: 16px;
  padding: 0.75rem 1.5rem;
  height: 41px;

  &::placeholder {
    color: ${(props) => props.theme.inputs.inputText.default.placeholderColor};
  }

  &:focus {
    border: 1px solid
      ${(props) => props.theme.inputs.inputText.focus.borderColor};

    box-shadow: 0 0 7px
      ${(props) => props.theme.inputs.inputText.focus.borderColor};
    color: ${(props) => props.theme.inputs.inputText.focus.text};
  }

  &:disabled {
    background-color: ${(props) =>
      props.theme.inputs.inputText.disabled.background};
    border: 1px solid
      ${(props) => props.theme.inputs.inputText.disabled.borderColor};
    color: ${(props) => props.theme.inputs.inputText.disabled.text};

    &::placeholder {
      color: ${(props) =>
        props.theme.inputs.inputText.disabled.placeholderColor};
    }
  }
`;
