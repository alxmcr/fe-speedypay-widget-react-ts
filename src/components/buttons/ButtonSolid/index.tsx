import AppIcon from '../../_icons/AppIcon';
import { TextButton } from '../../typography/SupportingStyles';
import { ButtonSolidStyled } from './ButtonBaseSolid.styled';

type ButtonSolidProps = {
  onClick?: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
  btnText?: string;
  leftIconName?: string;
};

export default function ButtonSolid({
  btnText = '',
  disabled = false,
  fullWidth = false,
  onClick,
  leftIconName = '',
}: ButtonSolidProps) {
  return (
    <ButtonSolidStyled
      disabled={disabled}
      $fullWidth={fullWidth}
      onClick={onClick}
    >
      {leftIconName.length > 0 ? <AppIcon iconName={leftIconName} /> : null}
      {btnText.length > 0 ? <TextButton>{btnText}</TextButton> : null}
    </ButtonSolidStyled>
  );
}
