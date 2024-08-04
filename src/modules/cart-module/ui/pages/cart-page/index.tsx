import MainLayout from "~/common/ui/layouts/main-layout";
import ContainerLayout from "~/common/ui/layouts/container-layout";
import TripCard from "~/modules/trip-module/ui/components/trip-card";

import light from "./style/light.module.scss";
import trash from "~icons/control/trash.svg";

const CartPage = () => {
  return (
    <MainLayout>
      <ContainerLayout>
        <div className={light.cartHeader}>
          <span className={light.headerTitle}>Cart</span>
          <button type="button" className={light.headerClear}>
            <img src={trash} alt="trash" />
            <span className={light.clearTitle}>Clear</span>
          </button>
        </div>
        <div className={light.cartTrip}>
          <span className={light.tripTitle}>Trip</span>
          <TripCard />
          <TripCard />
        </div>
        <footer className={light.cartFooter}>
          <span className={light.footerTitle}>Summary</span>
          <div className={light.footerControl}>
            <input placeholder="Purpose" type="text" className={light.footerInput} />
            <input placeholder="Reference" type="text" className={light.footerInput} />
          </div>
          <span className={light.footerPrice}>Total price: 350$</span>
          <div className={light.footerButtons}>
            <button type="button" className={light.buttonsAdd}>
              <span className={light.addTitle}>Add hotel</span>
            </button>
            <button type="button" className={light.buttonsSubmit}>
              <span className={light.submitTitle}>Finish</span>
            </button>
          </div>
        </footer>
      </ContainerLayout>
    </MainLayout>
  );
};

export default CartPage;
