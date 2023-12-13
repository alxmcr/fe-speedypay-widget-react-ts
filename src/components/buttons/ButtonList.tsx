import { IconNames } from '../../types/appEnums';
import ButtonSolid from './ButtonSolid';
import ButtonSolidIcon from './ButtonSolidIcon';

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
        gap: '1rem',
      }}
    >
      <ButtonSolid onClick={onClick}>Pay for $1234.56</ButtonSolid>
      <ButtonSolidIcon
        btnIconName={IconNames.copy}
        btnText="Copy number"
        onClick={onClick}
      />
    </div>
  );
}
