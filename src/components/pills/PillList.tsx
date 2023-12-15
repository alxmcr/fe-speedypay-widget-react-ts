import PillAmountToPay from './PillAmountToPay';

export default function PillList() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
      <PillAmountToPay amountToPay="MXN 2,780.00" />
      <PillAmountToPay amountToPay="$ 325.89" />
    </div>
  );
}
