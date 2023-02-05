import ScreenLayout from "../components/layout/ScreenLayout";
import Header from "../components/elements/Header/Header";

export default function SettingsScreen() {
  const title = "Settings";

  return (
    <ScreenLayout>
      <Header title={title} canGoBack />
    </ScreenLayout>
  );
}
