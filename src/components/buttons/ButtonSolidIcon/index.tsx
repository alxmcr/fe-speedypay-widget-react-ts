import AppIcon from '../../icons/AppIcon';
import './ButtonSolidIcon.scss';

type ButtonSolidIconProps = {
  btnIconName: string;
  disabled?: boolean;
  onClick: () => void;
};

export default function ButtonSolidIcon({
  btnIconName = '',
  disabled = false,
  onClick,
}: ButtonSolidIconProps) {
  return (
    <button className="button-solid-icon" disabled={disabled} onClick={onClick}>
      <AppIcon iconName={btnIconName} />
    </button>
  );
}
