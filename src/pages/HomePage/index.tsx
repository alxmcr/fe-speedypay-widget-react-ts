import ButtonList from '../../components/buttons/ButtonList';
import AppIconList from '../../components/icons/AppIconList';
import ThemeModeToggler from '../../components/toggles/ThemeModeToggler';

export default function HomePage() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
      <ThemeModeToggler />
      <AppIconList />
      <ButtonList />
    </div>
  );
}
