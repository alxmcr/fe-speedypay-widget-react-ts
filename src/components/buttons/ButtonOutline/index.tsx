import AppIcon from '../../icons/AppIcon';
import { TextButton } from '../../typography/SupportingStyles';
import { ButtonOutlineStyled } from './ButtonOutline.styled';

type ButtonOutlineProps = {
  onClick: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
  btnText?: string;
  leftIconName?: string;
};

export default function ButtonOutline({
  btnText = '',
  disabled = false,
  fullWidth = false,
  onClick,
  leftIconName = '',
}: ButtonOutlineProps) {
  return (
    <ButtonOutlineStyled
      disabled={disabled}
      $fullWidth={fullWidth}
      onClick={onClick}
    >
      {leftIconName.length > 0 ? <AppIcon iconName={leftIconName} /> : null}
      {btnText.length > 0 ? <TextButton>{btnText}</TextButton> : null}
    </ButtonOutlineStyled>
  );
}
