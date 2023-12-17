import ThemingProvider from '../ThemingProvider';
import ToggleCodeColorScalesProvider from '../ToggleCodeColorScalesProvider';
import ToggleModeThemeProvider from '../ToggleModeThemeProvider';

type PersonalizationProvidersProps = {
  children: React.ReactNode;
};

export default function PersonalizationProviders({
  children,
}: PersonalizationProvidersProps) {
  return (
    <ToggleModeThemeProvider>
      <ToggleCodeColorScalesProvider>
        <ThemingProvider>{children}</ThemingProvider>
      </ToggleCodeColorScalesProvider>
    </ToggleModeThemeProvider>
  );
}
