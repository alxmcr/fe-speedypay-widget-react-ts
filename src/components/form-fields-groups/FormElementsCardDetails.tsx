import FormField from '../form-fields/FormField';
import AppInputWithMask from '../inputs/AppInputWithMask';
import { FormFieldsGroupRowStyled } from './FormFieldsGroupRow.styled';

export default function FormElementsCardDetails() {
  return (
    <FormFieldsGroupRowStyled>
      <FormField labelText="Expiration date" id="expiration-date">
        <AppInputWithMask
          id="expiration-date"
          mask="99/99"
          placeholder="MM/DD"
          required
        />
      </FormField>
      <FormField labelText="CVC" id="CVC">
        <AppInputWithMask id="CVC" mask="999" placeholder="CVC" required />
      </FormField>
    </FormFieldsGroupRowStyled>
  );
}
