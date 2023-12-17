import FormElementsContactInfo from '../../form-fields-groups/FormElementsContactInfo';
import { SubtitleOne } from '../../typography/Subtitles';
import { BoxContactInfoElementsStyled } from './BoxContactInfoElements.styled';

export default function BoxContactInfoElements() {
  return (
    <BoxContactInfoElementsStyled>
      <SubtitleOne>Contact information</SubtitleOne>
      <FormElementsContactInfo />
    </BoxContactInfoElementsStyled>
  );
}
