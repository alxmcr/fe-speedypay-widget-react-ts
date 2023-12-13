import { IconNames } from '../../types/appEnums';
import AppButton from './AppButton';
import { AppBaseButton } from './AppButton/AppBaseButton';
import ButtonSolid from './ButtonSolid';
import ButtonSolidIcon from './ButtonSolidIcon';
import ButtonSolidText from './ButtonSolidText';

export default function ButtonList() {
  const onClick = () => {
    console.log('log');
  };

  return (
    <div
      style={{
        color: '#52a6f3',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
      <ButtonSolidText btnText="Pay for $1234.56" onClick={onClick} />
      <ButtonSolid
        btnIconName={IconNames.copy}
        btnText="Copy number"
        onClick={onClick}
      />
      <ButtonSolid
        btnIconName={IconNames.copy}
        btnText="Copy number"
        onClick={onClick}
        disabled
      />
      <ButtonSolidIcon btnIconName={IconNames.copy} onClick={onClick} />
      <AppBaseButton>Hola</AppBaseButton>
      <AppButton
        btnIconName={IconNames.copy}
        btnText="Copy number"
        onClick={onClick}
      />
    </div>
  );
}
