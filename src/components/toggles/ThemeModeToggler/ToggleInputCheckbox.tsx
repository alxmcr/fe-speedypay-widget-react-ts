import styled from 'styled-components';

export const ToggleInputCheckbox = styled.input`
  display: none;

  &:checked + span {
    background-color: ${(props) =>
      props.theme.styles.togglers.default.ballBackground};
  }

  &:focus + span {
    box-shadow: 0 0 1px
      ${(props) => props.theme.styles.togglers.default.ballBackground};
  }

  &:checked + span {
    transform: translateX(50px);
  }
`;
