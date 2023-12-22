import { IconNames } from '../../../types/enumsApp';
import AppIcon from '../../_icons/AppIcon';
import { BodyTextTwo } from '../../_typography/BodyTexts';
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
      <BodyTextTwo>{messageText}</BodyTextTwo>
    </MessageCheckoutStyled>
  );
}
