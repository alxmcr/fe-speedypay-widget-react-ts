import ButtonList from '../../components/buttons/ButtonList';
import FormElementsCardInfo from '../../components/form-fields-groups/FormElementsCardInfo';
import FormElementsContactInfo from '../../components/form-fields-groups/FormElementsContactInfo';
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

      <FormElementsContactInfo />
      <FormElementsCardInfo />
      <PillList />
      <AppIconList />
      <ButtonList />
      <InputList />
      <SvgRemoteList />
    </div>
  );
}
