import AppIcon from '../../icons/AppIcon';
import { TextButton } from '../../typography/SupportingStyles';
import { AppBaseButton } from './AppBaseButton';

type AppButtonProps = {
  btnIconName: string;
  btnText?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  onClick: () => void;
};

export default function AppButton({
  btnIconName = '',
  btnText = '',
  disabled = false,
  fullWidth = false,
  onClick,
}: AppButtonProps) {
  const className = fullWidth
    ? 'button_solid'
    : 'button_solid button_solid--fullwidth';

  if (btnText.length === 0) {
    return (
      <AppBaseButton
        className={className}
        disabled={disabled}
        onClick={onClick}
      >
        <AppIcon iconName={btnIconName} />
      </AppBaseButton>
    );
  }

  return (
    <AppBaseButton className={className} disabled={disabled} onClick={onClick}>
      <AppIcon iconName={btnIconName} />
      <TextButton>{btnText}</TextButton>
    </AppBaseButton>
  );
}
