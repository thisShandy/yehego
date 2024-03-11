import MainLayout from "~/common/ui/layouts/main-layout";
import { authGuard } from "~/common/lib/helpers/guards/authGuard.tsx";

const HomePage = () => {
  return (
    <MainLayout background>
      <h1>Home page</h1>
    </MainLayout>
  );
};

export default authGuard(HomePage);
