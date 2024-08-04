import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

import MainLayout from "~/common/ui/layouts/main-layout";
import ContainerLayout from "~/common/ui/layouts/container-layout";
import HotelSingle from "~/modules/hotel-module/ui/components/hotel-single";

import light from "./style/light.module.scss";
import search from "~icons/search/search.svg";
import settings from "~icons/control/settings.svg";

const ResultsPage = () => {
  const location = useLocation();
  const parsed: {
    city_name: string;
    outward_date: string;
    inward_date: string;
  } = queryString.parse(location.search);

  useEffect(() => {
    console.log("searchParams", parsed);
  }, []);

  return (
    <MainLayout>
      <ContainerLayout>
        <div className={light.searchContainer}>
          <div className={light.searchPanel}>
            <div className={light.panelField}>
              <span className={light.filedName}>City</span>
              <span className={light.filedValue}>{parsed.city_name}</span>
            </div>
            <div className={light.panelField}>
              <span className={light.filedName}>Checkin</span>
              <span className={light.filedValue}>
                {`${parsed.outward_date?.split("-")[2]}.${parsed.outward_date?.split("-")[1]}.${parsed.outward_date?.split("-")[0]}`}
              </span>
            </div>
            <div className={`${light.panelField} ${light.last}`}>
              <span className={light.filedName}>Checkout</span>
              <span className={light.filedValue}>
                {`${parsed.inward_date?.split("-")[2]}.${parsed.inward_date?.split("-")[1]}.${parsed.inward_date?.split("-")[0]}`}
              </span>
            </div>
            <button type="button" className={light.panelSearch}>
              <img className={light.searchIcon} src={search} alt="search" />
            </button>
          </div>
        </div>
        <div className={light.resultsContainer}>
          <div className={light.resultsHeader}>
            <div className={light.headerSearch}>
              <img src={search} alt="search" className={light.searchImage} />
              <input placeholder="Search" className={light.searchField} />
            </div>
            <button type="button" className={light.headerFilters}>
              <img src={settings} alt="settings" />
              <span className={light.filtersTitle}>Filters</span>
            </button>
          </div>
          <div className={light.resultsContent}>
            <div className={light.contentData}>
              <HotelSingle />
              <HotelSingle />
              <HotelSingle />
              <HotelSingle />
              <HotelSingle />
            </div>
            <div className={light.contentMap}>
              <span>Map will be here</span>
            </div>
          </div>
        </div>
      </ContainerLayout>
    </MainLayout>
  );
};

export default ResultsPage;
