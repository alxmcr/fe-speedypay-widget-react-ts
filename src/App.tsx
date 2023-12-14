import ButtonList from './components/buttons/ButtonList';
import AppIconList from './components/icons/AppIcon/AppIconList';

function App() {
  return (
    <div
      style={{
        backgroundColor: '#000',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
      {/* <ThemeModeToggler /> */}
      <AppIconList />
      <ButtonList />
    </div>
  );
}

export default App;
