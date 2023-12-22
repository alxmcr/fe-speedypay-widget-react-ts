import AppIcon from '../../_icons/AppIcon';
import { TextButton } from '../../_typography/SupportingStyles';
import { ButtonGradientStyled } from './ButtonGradient.styled';

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
    <ButtonGradientStyled
      disabled={disabled}
      $fullWidth={fullWidth}
      onClick={onClick}
    >
      {leftIconName.length > 0 ? <AppIcon iconName={leftIconName} /> : null}
      {btnText.length > 0 ? <TextButton>{btnText}</TextButton> : null}
    </ButtonGradientStyled>
  );
}
