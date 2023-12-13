import { TextButton } from '../../typography/SupportingStyles';
import './ButtonSolidText.scss';

type ButtonSolidProps = {
  disabled?: boolean;
  onClick: () => void;
  btnText: string;
};

export default function ButtonSolidText({
  btnText = '',
  disabled = false,
  onClick,
}: ButtonSolidProps) {
  return (
    <button className="button-solid-text" disabled={disabled} onClick={onClick}>
      <TextButton>{btnText}</TextButton>
    </button>
  );
}
