import { BodyTextOne } from '../../_typography/BodyTexts';
import { HeadingSix } from '../../_typography/Headings';
import { AppInfoStyled } from './AppInfo.styled';

type AppInfoProps = {
  label: string;
  value: string;
};

export default function AppInfo({ label = '', value = '' }: AppInfoProps) {
  return (
    <AppInfoStyled>
      <HeadingSix>{label}</HeadingSix>
      <BodyTextOne>{value}</BodyTextOne>
    </AppInfoStyled>
  );
}
