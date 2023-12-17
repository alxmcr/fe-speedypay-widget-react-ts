import ThemingProvider from '../ThemingProvider';
import ToggleCodeColorScalesProvider from '../ToggleCodeColorScalesProvider';
import ToggleModeThemeProvider from '../ToggleModeThemeProvider';

type AppProvidersProps = {
  children: React.ReactNode;
};

export default function PersonalizationProviders({
  children,
}: AppProvidersProps) {
  return (
    <ToggleModeThemeProvider>
      <ToggleCodeColorScalesProvider>
        <ThemingProvider>{children}</ThemingProvider>
      </ToggleCodeColorScalesProvider>
    </ToggleModeThemeProvider>
  );
}
