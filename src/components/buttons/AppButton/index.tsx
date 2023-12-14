import AppIcon from '../../icons/AppIcon';
import { TextButton } from '../../typography/SupportingStyles';
import { AppBaseButton } from './AppBaseButton.styled';

type AppButtonProps = {
  onClick: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
  btnText?: string;
  leftIconName?: string;
};

export default function AppButton({
  btnText = '',
  disabled = false,
  fullWidth = false,
  onClick,
  leftIconName = '',
}: AppButtonProps) {
  return (
    <AppBaseButton disabled={disabled} $fullWidth={fullWidth} onClick={onClick}>
      {leftIconName.length > 0 ? <AppIcon iconName={leftIconName} /> : null}
      {btnText.length > 0 ? <TextButton>{btnText}</TextButton> : null}
    </AppBaseButton>
  );
}
