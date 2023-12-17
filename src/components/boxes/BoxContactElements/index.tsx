import FormElementsContactInfo from '../../form-fields-groups/FormElementsContactInfo';
import { SubtitleOne } from '../../typography/Subtitles';
import { BoxContactElementsStyled } from './BoxContactElements.styled';

export default function BoxContactElements() {
  return (
    <BoxContactElementsStyled>
      <SubtitleOne>Contact information</SubtitleOne>
      <FormElementsContactInfo />
    </BoxContactElementsStyled>
  );
}
