import styled from 'styled-components';

export const TogglerBall = styled.span`
  display: block;
  background-color: ${(props) =>
    props.theme.styles.togglers.default.ballBackground};
  border-radius: 50%;
  transition: 0.4s;

  width: 40px;
  height: 40px;
`;
