import { useState } from "react";
import { useNavigate } from "react-router-dom";

import light from "./styles/light.module.scss";
import burger from "~icons/menu/burger.svg";
import arrow_down from "~icons/arrow/arrow_down.svg";
import arrow_logout from "~icons/arrow/arrow_logout.svg";
import { useSetRecoilState } from "recoil";
import { userState } from "~/common/model/recoil/user.ts";

const HeaderSection = () => {
  const navigate = useNavigate();
  const setUser = useSetRecoilState(userState);

  const [open, setOpen] = useState<boolean>(false);
  const [category, setCategory] = useState("BOOK");

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    setUser(null);
    navigate("/login");
  };

  const handleCategory = (value: string) => {
    setCategory(value);
  };

  const handleOpen = () => {
    setCategory("BOOK");
    setOpen((prev) => !prev);
  };

  return (
    <>
      <div className={light.headerWrapper}>
        <div className={`container ${light.headerContainer}`}>
          <button type="button" className={light.headerLogo} onClick={() => navigate("/")}>
            <div className={light.logoIcon}>
              <span className={light.iconTitle}>Y</span>
            </div>
            <span className={light.logoTitle}>Yehego</span>
          </button>
          <div className={light.headerMain}>
            <button type="button" className={light.mainNavigation} onClick={() => navigate("/")}>
              <span className={light.navigationTitle}>Search</span>
            </button>
            <button type="button" className={light.mainNavigation} onClick={() => navigate("/trips")}>
              <span className={light.navigationTitle}>Booked</span>
            </button>
            <button type="button" className={light.mainNavigation} onClick={() => navigate("/cart")}>
              <span className={light.navigationTitle}>Cart</span>
            </button>
            <button type="button" className={light.mainNavigation} onClick={() => navigate("/")}>
              <span className={light.navigationTitle}>News</span>
            </button>
          </div>
          <div className={light.headerInfo}>
            <button type="button" onClick={handleOpen} className={light.infoMenu}>
              <img className={light.menuIcon} src={burger} alt="burger" />
            </button>
          </div>
        </div>
      </div>
      {open && (
        <div className={light.menuWrapper}>
          <div className={light.menuContainer}>
            <div className={light.menuHeader}>
              <span className={light.headerTitle}>Menu</span>
              <button type="button" onClick={handleOpen} className={light.headerButton}>
                <span className={light.buttonTitle}>+</span>
              </button>
            </div>
            <div className={light.menuContent}>
              <div className={light.contentGroup}>
                <button
                  type="button"
                  className={`${light.groupHeader} ${category === "BOOK" && light.active}`}
                  onClick={() => handleCategory("BOOK")}
                >
                  <span className={light.headerTitle}>Book</span>
                  <img className={light.headerIcon} src={arrow_down} alt="arrow_down" />
                </button>
                {category === "BOOK" && (
                  <div className={light.groupContent}>
                    <button type="button" className={light.contentItem} onClick={() => navigate("/")}>
                      <span className={light.itemTitle}>Book a Trip</span>
                    </button>
                    <button type="button" className={light.contentItem} onClick={() => navigate("/?search=hotel")}>
                      <span className={light.itemTitle}>Book a Hotel</span>
                    </button>
                    <button type="button" className={light.contentItem} onClick={() => navigate("/cart")}>
                      <span className={light.itemTitle}>Cart</span>
                    </button>
                  </div>
                )}
              </div>
              <div className={light.contentGroup}>
                <button
                  type="button"
                  className={`${light.groupHeader} ${category === "ORDER" && light.active}`}
                  onClick={() => handleCategory("ORDER")}
                >
                  <span className={light.headerTitle}>Orders</span>
                  <img className={light.headerIcon} src={arrow_down} alt="arrow_down" />
                </button>
                {category === "ORDER" && (
                  <div className={light.groupContent}>
                    <button type="button" className={light.contentItem} onClick={() => navigate("/trips")}>
                      <span className={light.itemTitle}>Upcoming Trips</span>
                    </button>
                    <button type="button" className={light.contentItem} onClick={() => navigate("/trips/company")}>
                      <span className={light.itemTitle}>Company Trips</span>
                    </button>
                  </div>
                )}
              </div>
              <div className={light.contentGroup}>
                <button
                  type="button"
                  className={`${light.groupHeader} ${category === "DASHBOARD" && light.active}`}
                  onClick={() => handleCategory("DASHBOARD")}
                >
                  <span className={light.headerTitle}>Dashboard</span>
                  <img className={light.headerIcon} src={arrow_down} alt="arrow_down" />
                </button>
                {category === "DASHBOARD" && (
                  <div className={light.groupContent}>
                    <button type="button" className={light.contentItem}>
                      <span className={light.itemTitle}>Your Dashboard</span>
                    </button>
                    <button type="button" className={light.contentItem}>
                      <span className={light.itemTitle}>Company Dashboard</span>
                    </button>
                    <button type="button" className={light.contentItem}>
                      <span className={light.itemTitle}>How we Travel</span>
                    </button>
                  </div>
                )}
              </div>
              <div className={light.contentGroup}>
                <button
                  type="button"
                  className={`${light.groupHeader} ${category === "COMPANY" && light.active}`}
                  onClick={() => handleCategory("COMPANY")}
                >
                  <span className={light.headerTitle}>Company</span>
                  <img className={light.headerIcon} src={arrow_down} alt="arrow_down" />
                </button>
                {category === "COMPANY" && (
                  <div className={light.groupContent}>
                    <button type="button" className={light.contentItem} onClick={() => navigate("/admin")}>
                      <span className={light.itemTitle}>Company info</span>
                    </button>
                  </div>
                )}
              </div>
              <div className={light.contentGroup}>
                <button
                  type="button"
                  className={`${light.groupHeader} ${category === "PROFILE" && light.active}`}
                  onClick={() => handleCategory("PROFILE")}
                >
                  <span className={light.headerTitle}>Profile</span>
                  <img className={light.headerIcon} src={arrow_down} alt="arrow_down" />
                </button>
                {category === "PROFILE" && (
                  <div className={light.groupContent}>
                    <button type="button" className={light.contentItem} onClick={() => navigate("/profile")}>
                      <span className={light.itemTitle}>Profile info</span>
                    </button>
                    <button type="button" className={light.contentItem}>
                      <span className={light.itemTitle}>Support</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
            <div className={light.menuFooter}>
              <button type="button" className={light.footerLogout} onClick={handleLogout}>
                <img className={light.logoutIcon} src={arrow_logout} alt="arrow_logout" />
                <span className={light.logoutTitle}>Log out</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HeaderSection;
