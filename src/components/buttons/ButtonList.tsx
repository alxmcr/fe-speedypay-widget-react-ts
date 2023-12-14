import { IconNames } from '../../types/enumsApp';
import ButtonSolid from './ButtonSolid';

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
      <ButtonSolid btnText="Pay for $1234.56" onClick={onClick} />

      <ButtonSolid
        leftIconName={IconNames.copy}
        btnText="Copy number"
        onClick={onClick}
      />
      <ButtonSolid
        leftIconName={IconNames.copy}
        btnText="Copy number"
        onClick={onClick}
        disabled
      />
      <ButtonSolid leftIconName={IconNames.copy} onClick={onClick} />
      <ButtonSolid
        leftIconName={IconNames.copy}
        btnText="Pay for $1234.56"
        onClick={onClick}
        fullWidth={true}
      />
      <ButtonSolid
        leftIconName={IconNames.copy}
        btnText="Copy number"
        onClick={onClick}
      />
      <ButtonSolid
        leftIconName={IconNames.coin}
        btnText="Coin"
        onClick={onClick}
      />
      <ButtonSolid leftIconName={IconNames.gift} onClick={onClick} />
    </div>
  );
}
