import styled from 'styled-components';

type TabPaymentMethodStyledStyledProps = {
  $isSelected: boolean;
};

export const TabPaymentMethodStyled = styled.button<TabPaymentMethodStyledStyledProps>`
  border-radius: 0.5rem;
  border: 1px solid ${(props) => props.theme.styles.tabs.default.borderColor};
  background-color: ${(props) =>
    props.theme.styles.tabs.default.backgroundColor};
  color: ${(props) => props.theme.styles.tabs.default.colorText};

  align-items: center;
  align-content: center;
  display: grid;
  gap: 0.5rem;
  grid-template-columns: 0.2fr 1fr;
  justify-items: center;

  font-size: 0.875rem;
  height: 2.8125rem;
  min-width: 10.1875rem;
  padding: 0.625rem 0.75rem;

  &:active {
    border: 1px solid ${(props) => props.theme.styles.tabs.active.borderColor};
    background-color: ${(props) =>
      props.theme.styles.tabs.active.backgroundColor};
    color: ${(props) => props.theme.styles.tabs.active.colorText};
  }

  /* Selected state styles */
  ${({ $isSelected: isSelected, theme }) =>
    isSelected &&
    `
    border: 1px solid ${theme.styles.tabs.active.borderColor};
    background-color: ${theme.styles.tabs.active.backgroundColor};
    color: ${theme.styles.tabs.active.colorText};
    `}

  &:hover {
    border: 1px solid ${(props) => props.theme.styles.tabs.hover.borderColor};
    background-color: ${(props) =>
      props.theme.styles.tabs.hover.backgroundColor};
    color: ${(props) => props.theme.styles.tabs.hover.colorText};
  }

  &:disabled {
    background-color: ${(props) =>
      props.theme.styles.tabs.disabled.backgroundColor};
    border: 1px solid ${(props) => props.theme.styles.tabs.disabled.borderColor};
    color: ${(props) => props.theme.styles.tabs.disabled.colorText};
    opacity: ${(props) => props.theme.styles.tabs.disabled.opacity};
  }
`;
