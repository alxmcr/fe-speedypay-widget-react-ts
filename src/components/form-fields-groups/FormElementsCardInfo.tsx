import { mockInstallmentsFull } from '../../mock/mock-installments';
import FormField from '../form-fields/FormField';
import AppInputWithMask from '../inputs/AppInputWithMask';
import AppInput from '../inputs/common/AppInput';
import AppSelect from '../selects/AppSelect';
import FormElementsCardDetails from './FormElementsCardDetails';
import { FormFieldsGroupStyled } from './FormFieldsGroup.styled';

export default function FormElementsCardInfo() {
  return (
    <FormFieldsGroupStyled $flexDirection="column">
      <FormField labelText="Card number" id="card-number" $width="100%">
        <AppInputWithMask
          id="card-number"
          mask="9999 9999 9999 9999"
          placeholder="Enter your card number"
          required
        />
      </FormField>
      <FormElementsCardDetails />
      <FormField
        labelText="Card holder name"
        id="card-holder-name"
        $width="100%"
      >
        <AppInput
          type="text"
          id="card-holder-name"
          placeholder="Enter card holder name"
          fullWidth={true}
        />
      </FormField>
      <FormField
        labelText="Installments"
        id="select-installments"
        $width="100%"
      >
        <AppSelect
          id="select-installments"
          name="select-installments"
          placeholder="Choose an installment"
          options={mockInstallmentsFull}
          width="100%"
        />
      </FormField>
    </FormFieldsGroupStyled>
  );
}
