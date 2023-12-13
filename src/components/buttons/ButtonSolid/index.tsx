import AppIcon from '../../icons/AppIcon';
import { TextButton } from '../../typography/SupportingStyles';
import './ButtonSolid.scss';

type ButtonSolidProps = {
  btnIconName: string;
  btnText?: string;
  disabled?: boolean;
  onClick: () => void;
};

export default function ButtonSolid({
  btnIconName = '',
  btnText = '',
  disabled = false,
  onClick,
}: ButtonSolidProps) {
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
