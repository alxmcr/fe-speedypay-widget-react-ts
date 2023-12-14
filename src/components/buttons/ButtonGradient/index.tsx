import AppIcon from '../../icons/AppIcon';
import { TextButton } from '../../typography/SupportingStyles';
import { ButtonBaseGradient } from './ButtonBaseGradient';

type ButtonGradientProps = {
  onClick: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
  btnText?: string;
  leftIconName?: string;
};

export default function ButtonGradient({
  btnText = '',
  disabled = false,
  fullWidth = false,
  onClick,
  leftIconName = '',
}: ButtonGradientProps) {
  return (
    <ButtonBaseGradient
      disabled={disabled}
      $fullWidth={fullWidth}
      onClick={onClick}
    >
      {leftIconName.length > 0 ? <AppIcon iconName={leftIconName} /> : null}
      {btnText.length > 0 ? <TextButton>{btnText}</TextButton> : null}
    </ButtonBaseGradient>
  );
}
