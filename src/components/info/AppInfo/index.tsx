import { BodyTextOne } from '../../_typography/BodyTexts';
import { HeadingSix } from '../../_typography/Headings';
import { AppInfoStyled } from './AppInfo.styled';

type AppInfoProps = {
  labelText: string;
  valueText: string;
};

export default function AppInfo({
  labelText = '',
  valueText = '',
}: AppInfoProps) {
  return (
    <AppInfoStyled>
      <HeadingSix>{labelText}</HeadingSix>
      <BodyTextOne>{valueText}</BodyTextOne>
    </AppInfoStyled>
  );
}
