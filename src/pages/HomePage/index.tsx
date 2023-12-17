import FormCheckout from '../../components/forms/FormCheckout';
import ThemeModeToggler from '../../components/toggles/ThemeModeToggler';
import {
  checkout002
} from '../../mock/data/mock-checkouts';

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
      {/* <FormCheckout checkout={checkout001} /> */}
      <hr />
      <FormCheckout checkout={checkout002} />
      <hr />
      {/* <FormCheckout checkout={checkout003} /> */}
    </div>
  );
}
