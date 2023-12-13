import AppIcon from '../../icons/AppIcon';
import { TextButton } from '../../typography/SupportingStyles';
import './ButtonSolidIcon.scss';

type ButtonSolidIconProps = {
  btnIconName: string;
  btnText?: string;
  disabled?: boolean;
  onClick: () => void;
};

export default function ButtonSolidIcon({
  btnIconName = '',
  btnText = '',
  disabled = false,
  onClick,
}: ButtonSolidIconProps) {
  if (btnText.length === 0) {
    return (
      <button
        className="button-solid-icon"
        disabled={disabled}
        onClick={onClick}
      >
        <AppIcon iconName={btnIconName} />
      </button>
    );
  }

  return (
    <button className="button-solid-icon" disabled={disabled} onClick={onClick}>
      <AppIcon iconName={btnIconName} />
      <TextButton>{btnText}</TextButton>
    </button>
  );
}
