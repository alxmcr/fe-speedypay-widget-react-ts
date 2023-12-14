import AppIcon from '../../icons/AppIcon';
import { TextButton } from '../../typography/SupportingStyles';
import './ButtonSolid.scss';

type ButtonSolidProps = {
  btnIconName: string;
  btnText?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  onClick: () => void;
};

export default function ButtonSolid({
  btnIconName = '',
  btnText = '',
  disabled = false,
  fullWidth = false,
  onClick,
}: ButtonSolidProps) {
  const className = fullWidth
    ? 'button_solid'
    : 'button_solid button_solid--fullwidth';

  if (btnText.length === 0) {
    return (
      <button className={className} disabled={disabled} onClick={onClick}>
        <AppIcon iconName={btnIconName} />
      </button>
    );
  }

  return (
    <button className={className} disabled={disabled} onClick={onClick}>
      <AppIcon iconName={btnIconName} />
      <TextButton>{btnText}</TextButton>
    </button>
  );
}
