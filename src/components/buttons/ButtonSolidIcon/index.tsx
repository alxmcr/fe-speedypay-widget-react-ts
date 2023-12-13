import { IconNames } from '../../../types/appEnums';
import AppIcon from '../../icons/AppIcon';
import './ButtonSolidIcon.scss';

type ButtonSolidIconProps = {
  disabled?: boolean;
  onClick: () => void;
  text: string;
};

export default function ButtonSolidIcon({
  text,
  disabled = false,
  onClick,
}: ButtonSolidIconProps) {
  return (
    <button className="button-solid-icon" disabled={disabled} onClick={onClick}>
      <AppIcon iconName={IconNames.arrowDown} />
      <p>{text}</p>
    </button>
  );
}
