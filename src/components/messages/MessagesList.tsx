import { MESSAGES } from '../../helpers/constants-messages';
import { IconNames } from '../../types/enumsApp';
import MessageCheckout from './MessageCheckout';

export default function MessagesList() {
  return (
    <div>
      <MessageCheckout
        messageText={MESSAGES.cash.sendInstructions}
        nameIcon={IconNames.coin}
      />
      <MessageCheckout
        messageText={MESSAGES.bankTransfer.sendInstructions}
        nameIcon={IconNames.bankTransfer}
      />
    </div>
  );
}
