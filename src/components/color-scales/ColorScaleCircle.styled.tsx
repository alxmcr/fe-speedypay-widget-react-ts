import styled from 'styled-components';

type ColorScaleCircleStyledProps = {
  $backgroundColor: string;
};

export const ColorScaleCircleStyled = styled.div<ColorScaleCircleStyledProps>`
  height: 3.125rem;
  width: 3.125rem;

  background-color: ${(props) => props.$backgroundColor};
  border-radius: 50%;
`;

export const ColorScaleCircleSelectedStyled = styled.div<ColorScaleCircleStyledProps>`
  height: 4.375rem;
  width: 4.375rem;

  background-color: ${(props) => props.$backgroundColor};
  border-radius: 50%;
`;
