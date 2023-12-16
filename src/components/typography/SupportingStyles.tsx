import styled from 'styled-components';

const TextButton = styled.span`
  font-size: 0.875rem;
  text-transform: uppercase;
`;

const TextCaption = styled.span`
  font-size: 0.75rem;
`;

const TextLabel = styled.label`
  color: ${(props) => props.theme.styles.colorText};
  font-weight: 400;
  font-size: 0.875rem;
`;

const TextOverline = styled.span`
  font-size: 0.75rem;
`;

const TextParagraph = styled.p`
  font-size: 0.75rem;
  margin: 0;
`;

const TextSpan = styled.span`
  font-size: 0.75rem;
`;

TextButton.displayName = 'TextButton';
TextCaption.displayName = 'TextCaption';
TextLabel.displayName = 'TextLabel';
TextOverline.displayName = 'TextOverline';
TextParagraph.displayName = 'TextParagraph';
TextSpan.displayName = 'TextSpan';

export {
  TextButton,
  TextCaption,
  TextLabel,
  TextOverline,
  TextParagraph,
  TextSpan,
};
