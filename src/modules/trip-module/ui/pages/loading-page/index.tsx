import { useLottie } from "lottie-react";

import { useBooking } from "~/modules/trip-module/model/hooks/useBooking.ts";

import MainLayout from "~/common/ui/layouts/main-layout";
import ContainerLayout from "~/common/ui/layouts/container-layout";

import light from "./style/light.module.scss";
import loadingAnimation from "~/modules/trip-module/lib/animations/loading.json";

const style = {
  width: 480
};

const LoadingPage = () => {
  useBooking();

  const options = {
    animationData: loadingAnimation,
    loop: true,
    autoplay: true,
    style
  };

  const { View } = useLottie(options);

  return (
    <MainLayout>
      <ContainerLayout>
        <div className={light.loadingContainer}>
          {View}
          <span className={light.loadingTitle}>Preparing your order</span>
        </div>
      </ContainerLayout>
    </MainLayout>
  );
};

export default LoadingPage;
