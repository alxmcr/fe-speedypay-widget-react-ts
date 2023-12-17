import FormElementsCardInfo from '../../form-fields-groups/FormElementsCardInfo';
import { SubtitleOne } from '../../typography/Subtitles';
import { BoxCardInfoElementsStyled } from './BoxCardInfoElements.styled';

export default function BoxCardInfoElements() {
  return (
    <BoxCardInfoElementsStyled>
      <SubtitleOne>Card information</SubtitleOne>
      <FormElementsCardInfo />
    </BoxCardInfoElementsStyled>
  );
}
