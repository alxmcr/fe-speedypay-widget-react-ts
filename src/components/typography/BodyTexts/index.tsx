import styled from 'styled-components';

const BodyTextOne = styled.span`
  color: ${(props) => props.theme.text};
  font-size: 1rem;
`;

const BodyTextTwo = styled.span`
  color: ${(props) => props.theme.text};
  font-size: 0.875rem;
`;

BodyTextOne.displayName = 'BodyTextOne';
BodyTextTwo.displayName = 'BodyTextTwo';

export { BodyTextOne, BodyTextTwo };
