import FormField from '../form-fields/FormField';
import AppInputWithMask from '../inputs/AppInputWithMask';
import { FormFieldsGroupStyled } from './FormFieldsGroup.styled';

export default function FormElementsCardDetails() {
  return (
    <FormFieldsGroupStyled>
      <FormField labelText="Expiration date" id="expiration-date">
        <AppInputWithMask mask="99/99" placeholder="MM/DD" required />
      </FormField>
      <FormField labelText="CVC" id="CVC">
        <AppInputWithMask mask="999" placeholder="CVC" required />
      </FormField>
    </FormFieldsGroupStyled>
  );
}
