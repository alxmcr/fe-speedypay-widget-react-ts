import { TextLabel } from '../../_typography/SupportingStyles';
import { FormFieldStyled } from './FormField.styled';

type FormFieldProps = {
  children: React.ReactNode;
  id: string;
  labelText: string;
  $width?: string;
};

export default function FormField({
  id = 'form-field-example',
  labelText = 'Label',
  $width = '50%',
  children,
}: FormFieldProps) {
  return (
    <FormFieldStyled $width={$width}>
      <TextLabel htmlFor={id}>{labelText}</TextLabel>
      {children}
    </FormFieldStyled>
  );
}
