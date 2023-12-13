import AppIcon from '../../icons/AppIcon';
import { TextButton } from '../../typography/SupportingStyles';
import { AppBaseButton } from './AppBaseButton';

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
  const className = fullWidth
    ? 'button_solid'
    : 'button_solid button_solid--fullwidth';

  return (
    <AppBaseButton className={className} disabled={disabled} onClick={onClick}>
      {leftIconName.length > 0 ? <AppIcon iconName={leftIconName} /> : null}
      {btnText.length > 0 ? <TextButton>{btnText}</TextButton> : null}
    </AppBaseButton>
  );
}
