import AppInputEmail from '../AppInputEmail';
import AppInputText from '../AppInputText';

type AppInputProps = {
  type: 'text' | 'email';
  id: string;
  placeholder: string;
  required?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  maxLength?: number;
};

export default function AppInput({
  type = 'text',
  id = 'input-id',
  placeholder = 'Enter something',
  required = false,
  disabled = false,
  fullWidth = false,
  maxLength,
}: AppInputProps) {
  if (type === 'email') {
    return (
      <AppInputEmail
        id={id}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        fullWidth={fullWidth}
        maxLength={maxLength}
      />
    );
  }

  return (
    <AppInputText
      id={id}
      placeholder={placeholder}
      required={required}
      disabled={disabled}
      fullWidth={fullWidth}
      maxLength={maxLength}
    />
  );
}
