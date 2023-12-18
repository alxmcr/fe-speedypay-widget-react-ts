import styled from 'styled-components';

type AppLayoutStyledProps = {
  $flexDirection: 'row' | 'column';
  $gapInRem: number;
};

export const AppLayoutStyled = styled.div<AppLayoutStyledProps>`
  display: flex;
  flex-direction: ${(props) => props.$flexDirection};
  gap: ${(props) => props.$gapInRem}rem;
`;
