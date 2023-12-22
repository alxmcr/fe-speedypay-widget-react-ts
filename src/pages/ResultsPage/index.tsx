import ResultsTemplate from '../../components/_templates/ResultsTemplate';
import ThemeModeToggler from '../../components/toggles/ThemeModeToggler';
import { HeadingOne } from '../../components/typography/Headings';

export default function ResultsPage() {
  return (
    <div
      style={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',

        minHeight: '100vh',
      }}
    >
      <HeadingOne>Results</HeadingOne>
      <ThemeModeToggler />
      <ResultsTemplate />
    </div>
  );
}
