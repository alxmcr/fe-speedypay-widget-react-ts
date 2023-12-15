import ButtonList from '../../components/buttons/ButtonList';
import FormFieldList from '../../components/form-fields/FormFieldList';
import AppIconList from '../../components/icons/AppIconList';
import InputList from '../../components/inputs/InputList';
import PillList from '../../components/pills/PillList';
import SvgRemoteList from '../../components/svg/SvgRemoteList';
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
      <FormFieldList />
      <PillList />
      <AppIconList />
      <ButtonList />
      <InputList />
      <SvgRemoteList />
    </div>
  );
}
