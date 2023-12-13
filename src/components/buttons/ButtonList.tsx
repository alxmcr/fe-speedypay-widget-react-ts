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
      <ButtonSolidIcon text="HOla" onClick={onClick} />
    </div>
  );
}
