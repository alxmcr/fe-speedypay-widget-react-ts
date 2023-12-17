import BoxCardInfoElements from '../../components/boxes/BoxCardInfoElements';
import BoxContactInfoElements from '../../components/boxes/BoxContactInfoElements';
import BoxPaymentMethods from '../../components/boxes/BoxPaymentMethods';
import ButtonList from '../../components/buttons/ButtonList';
import FormElementsCardInfo from '../../components/form-fields-groups/FormElementsCardInfo';
import FormElementsContactInfo from '../../components/form-fields-groups/FormElementsContactInfo';
import FormCardCheckout from '../../components/forms/FormCardCheckout';
import FormBasicCheckout from '../../components/forms/FormBasicCheckout';
import AppIconList from '../../components/icons/AppIconList';
import InputList from '../../components/inputs/InputList';
import MessagesList from '../../components/messages/MessagesList';
import PillList from '../../components/pills/PillList';
import SvgRemoteList from '../../components/svg/SvgRemoteList';
import ThemeModeToggler from '../../components/toggles/ThemeModeToggler';

export default function HomePage() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
      <ThemeModeToggler />
      <FormBasicCheckout amountToPayValue={2559.56} amountToPayCurrency="MXN" />
      <FormCardCheckout amountToPayValue={2559.56} amountToPayCurrency="MXN" />

      <hr />
      <BoxPaymentMethods subtitle="Payment methods" />
      <BoxContactInfoElements />
      <BoxCardInfoElements />
      <MessagesList />
      <FormElementsContactInfo />
      <FormElementsCardInfo />
      <PillList />
      <AppIconList />
      <ButtonList />
      <InputList />
      <SvgRemoteList />
    </div>
  );
}
