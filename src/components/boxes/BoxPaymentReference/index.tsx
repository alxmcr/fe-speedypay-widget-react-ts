import { HeadingSix } from '../../_typography/Headings';
import { BarcodeGroupStyled } from '../../barcodes/BarcodeGroup/BarcodeGroup.styled';
import ButtonOutline from '../../buttons/ButtonOutline';

export default function BoxPaymentReference() {
  return (
    <div>
      <HeadingSix>Reference Number</HeadingSix>
      <BarcodeGroupStyled />
      <ButtonOutline
        btnText="Copy number"
        fullWidth
        leftIconName=""
        onClick={() => {}}
      />
    </div>
  );
}
