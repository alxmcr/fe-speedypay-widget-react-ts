import ButtonList from '../../components/buttons/ButtonList';
import AppIconList from '../../components/icons/AppIcon/AppIconList';
import ThemeModeToggler from '../../components/toggles/ThemeModeToggler';
import { GlobalStyles } from '../../styles/globalStyles';

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
      <GlobalStyles />
      <ThemeModeToggler />
      <AppIconList />
      <ButtonList />
    </div>
  );
}
