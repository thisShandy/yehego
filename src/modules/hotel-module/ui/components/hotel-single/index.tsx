import light from "./style/light.module.scss";
import location from "~icons/control/location.svg";
import leaf from "~icons/control/leaf.svg";

const HotelSingle = () => {
  return (
    <div className={light.hotelContainer}>
      <img className={light.hotelImage} src="https://images.unsplash.com/photo-1455587734955-081b22074882?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="hotel__image" />
      <div className={light.hotelInfo}>
        <div className={light.infoHeader}>
          <div className={light.headerContainer}>
            <span className={light.headerTitle}>
              BEST WESTERN COLUMBUS HOTEL
            </span>
            <div className={light.headerRating}>
              <span className={light.ratingValue}>5.0</span>
            </div>
          </div>
          <div className={light.headerAddress}>
            <img src={location} alt="location" className={light.addressImage} />
            <span className={light.addressTitle}>Landsvägen 30, 171 54 Solna, Sweden</span>
          </div>
        </div>

        <div className={light.infoFooter}>
          <div className={light.footerEmission}>
            <img src={leaf} alt="leaf" className={light.emissionIcon} />
            <span className={light.emissionTitle}>11,056 KgCO₂</span>
          </div>
          <div className={light.footerSummary}>
            <span className={light.summaryTitle}>
              21 hight, 1 adult
            </span>
            <span className={light.summaryPrice}>
              500$
            </span>
            <button type="button" className={light.summaryButton}>
              <span className={light.buttonTitle}>
                See availability
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelSingle;
