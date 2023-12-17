import FormField from '../form-fields/FormField';
import AppInput from '../inputs/common/AppInput';
import { FormFieldsGroupStyled } from './FormFieldsGroup.styled';

export default function FormElementsContactInfo() {
  return (
    <FormFieldsGroupStyled $flexDirection="column">
      <FormField labelText="Email" id="email" $width="100%">
        <AppInput
          type="email"
          id="email"
          placeholder="Enter your email"
          fullWidth={true}
          required
        />
      </FormField>
      <FormField labelText="Full name" id="full-name" $width="100%">
        <AppInput
          type="text"
          id="full-name"
          placeholder="Enter your first and last name"
          fullWidth={true}
          required
        />
      </FormField>
    </FormFieldsGroupStyled>
  );
}
