import ThemeModeToggler from '../../components/toggles/ThemeModeToggler';

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
      <ThemeModeToggler />
    </div>
  );
}
