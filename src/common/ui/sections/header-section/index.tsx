import light from "./styles/light.module.scss";
import burger from "~icons/menu/burger.svg";

const HeaderSection = () => {
  return (
    <div className={light.headerWrapper}>
      <div className={`container ${light.headerContainer}`}>
        <button type="button" className={light.headerLogo}>
          <div className={light.logoIcon}>
            <span className={light.iconTitle}>Y</span>
          </div>
          <span className={light.logoTitle}>Yehego</span>
        </button>
        <div className={light.headerMain}>
          <button type="button" className={light.mainNavigation}>
            <span className={light.navigationTitle}>Search</span>
          </button>
          <button type="button" className={light.mainNavigation}>
            <span className={light.navigationTitle}>Booked</span>
          </button>
          <button type="button" className={light.mainNavigation}>
            <span className={light.navigationTitle}>Cart</span>
          </button>
        </div>
        <div className={light.headerInfo}>
          <button type="button" className={`${light.infoSupport} ${light.dark}`}>
            <span className={light.supportMark}>?</span>
          </button>
          <button type="button" className={light.infoMenu}>
            <img className={light.menuIcon} src={burger} alt="burger" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
