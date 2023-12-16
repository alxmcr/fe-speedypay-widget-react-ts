import FormField from '../form-fields/FormField';
import AppInputWithMask from '../inputs/AppInputWithMask';
import AppInput from '../inputs/common/AppInput';
import FormElementsCardDetails from './FormElementsCardDetails';
import { FormFieldsGroupStyled } from './FormFieldsGroup.styled';

export default function FormElementsCardInfo() {
  return (
    <FormFieldsGroupStyled>
      <FormField labelText="Card number" id="card-number">
        <AppInputWithMask
          mask="9999 9999 9999 9999"
          placeholder="Enter your card number"
          required
        />
      </FormField>
      <FormElementsCardDetails />
      <FormField labelText="Card holder name" id="card-holder-name">
        <AppInput
          type="text"
          id="card-holder-name"
          placeholder="Enter card holder name"
          fullWidth={true}
        />
      </FormField>
    </FormFieldsGroupStyled>
  );
}
