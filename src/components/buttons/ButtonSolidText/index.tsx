import { TextButton } from '../../typography/SupportingStyles';
import './ButtonSolidText.scss';

type ButtonSolidProps = {
  disabled?: boolean;
  fullWidth?: boolean;
  onClick: () => void;
  btnText: string;
};

export default function ButtonSolidText({
  btnText = '',
  fullWidth = false,
  disabled = false,
  onClick,
}: ButtonSolidProps) {
  const className = fullWidth
    ? 'button_solid_text'
    : 'button_solid_text button_solid_text--fullwidth';

  return (
    <button className={className} disabled={disabled} onClick={onClick}>
      <TextButton>{btnText}</TextButton>
    </button>
  );
}
