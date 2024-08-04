import { useRecoilValue } from "recoil";

import { authGuard } from "~/common/lib/helpers/guards/authGuard.tsx";

import { userState } from "~/common/model/recoil/user.ts";

import MainLayout from "~/common/ui/layouts/main-layout";
import SearchSection from "~/modules/home-module/ui/sections/search-section";
import ClimateSection from "~/modules/home-module/ui/sections/climate-section";

import light from "./style/light.module.scss";

const HomePage = () => {
  const user = useRecoilValue(userState);

  return (
    <MainLayout background>
      <div className={light.homeContainer}>
        <div className={light.homeInfo}>
          <span className={light.infoTitle}>Good afternoon, {user?.firstname}</span>
          <span className={light.infoDescription}>Book your next business trip</span>
        </div>
        <SearchSection />
        <ClimateSection />
      </div>
    </MainLayout>
  );
};

const HomePageGuard = authGuard(HomePage);

export default HomePageGuard;
