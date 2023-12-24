import { enUS } from 'date-fns/locale';
import {
  FORMAT_DATETIMES,
  formatTimestamp,
} from '../../../helpers/helpers-formatters';
import { BodyTextOne } from '../../_typography/BodyTexts';
import { HeadingSix } from '../../_typography/Headings';
import { AppInfoStyled } from './AppInfo.styled';

type AppInfoProps = {
  label: string;
  typeValue: 'date' | 'datetime' | 'string';
  value: string;
};

export default function AppInfo({
  label = '',
  typeValue = 'string',
  value = '',
}: AppInfoProps) {
  return (
    <AppInfoStyled>
      <HeadingSix>{label}</HeadingSix>
      {typeValue === 'datetime' ? (
        <BodyTextOne>
          {formatTimestamp(Number(value), FORMAT_DATETIMES.full, enUS)}
        </BodyTextOne>
      ) : (
        <BodyTextOne>{value}</BodyTextOne>
      )}
    </AppInfoStyled>
  );
}
