import { IconNames } from '../../../types/enumsApp';
import AppIcon from '../../icons/AppIcon';
import { TextParagraph } from '../../typography/SupportingStyles';
import { MessageCheckoutStyled } from './MessageCheckout.styled';

type MessageCheckoutProps = {
  nameIcon: IconNames;
  messageText: string;
};

export default function MessageCheckout({
  nameIcon = IconNames.email,
  messageText = '',
}: MessageCheckoutProps) {
  return (
    <MessageCheckoutStyled>
      <AppIcon iconName={nameIcon} />
      <TextParagraph>{messageText}</TextParagraph>
    </MessageCheckoutStyled>
  );
}
