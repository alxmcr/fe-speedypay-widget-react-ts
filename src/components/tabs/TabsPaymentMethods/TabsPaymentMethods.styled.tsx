import styled from 'styled-components';

export const TabsPaymentMethodsStyled = styled.div`
  display: flex;
  gap: 0.25rem;
  overflow-x: auto;
  padding: 0.5rem 0;

  scrollbar-color: ${(props) => props.theme.styles.scrollBarTrackColor} ${(props) => props.theme.styles.scrollBarBackground};
  scrollbar-width: thin;

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 1px
      ${(props) => props.theme.styles.scrollBarTrackColor};
    -webkit-box-shadow: inset 0 0 1px
      ${(props) => props.theme.styles.scrollBarTrackColor};
    background-color: ${(props) => props.theme.styles.scrollBarBackground};
  }

  &::-webkit-scrollbar {
    height: 4px;
    width: 5px;
    background-color: ${(props) => props.theme.styles.scrollBarBackground};
  }

  &::-webkit-scrollbar-thumb {
    height: 4px;
    width: 1px;
    background-color: ${(props) => props.theme.styles.scrollBarTrackColor};
  }
`;
