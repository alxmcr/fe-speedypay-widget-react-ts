import ButtonList from '@components/buttons/ButtonList';
import AppIconList from '@components/icons/AppIcon/AppIconList';

function App() {
  return (
    <div
      style={{
        backgroundColor: '#000',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
      <AppIconList />
      <ButtonList />
    </div>
  );
}

export default App;
