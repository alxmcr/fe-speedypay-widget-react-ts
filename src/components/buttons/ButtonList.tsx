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
        gap: '1rem',
      }}
    >
      <ButtonSolid onClick={onClick}>Pay for $1234.56</ButtonSolid>
    </div>
  );
}
