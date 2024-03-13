import { authGuard } from "~/common/lib/helpers/guards/authGuard.tsx";

import MainLayout from "~/common/ui/layouts/main-layout";
import SearchSection from "~/modules/home-module/ui/sections/search-section";
import ClimateSection from "~/modules/home-module/ui/sections/climate-section";

import light from "./style/light.module.scss";

const HomePage = () => {
  return (
    <MainLayout background>
      <div
        className={light.homeContainer}
      >
        <div className={light.homeInfo}>
          <span className={light.infoTitle}>
            Good afternoon, Georgy
          </span>
          <span className={light.infoDescription}>
            Book your next business trip
          </span>
        </div>
        <SearchSection />
        <ClimateSection />
      </div>
    </MainLayout>
  );
};

export default authGuard(HomePage);
