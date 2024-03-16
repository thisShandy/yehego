import { useSearchTrip } from "~/modules/home-module/model/hooks/useSearchTrip.ts";
import { useSearchType } from "~/modules/home-module/model/hooks/useSearchType.ts";

import { searchTypes } from "~/common/lib/configs/search/search-types.ts";

import DatePicker from "~/modules/home-module/ui/components/date-picker";
import CitySelect from "~/modules/home-module/ui/components/city-select";
import UserSelect from "~/modules/home-module/ui/components/user-select";
import TimeSelect from "~/modules/home-module/ui/components/time-select";

import light from "./styles/light.module.scss";
import search from "~icons/search/search.svg";
import arrow_down from "~icons/arrow/arrow_down.svg";

const SearchSection = () => {
  const {
    form: tripForm,
    formActions,
    clearTripSearch
  } = useSearchTrip();

  const {
    type,
    typeClosing,
    handleTrip,
    handleHotel,
    dateOpen,
    handleDateOpen,
    accordion,
    accordionClosing,
    handleAccordion,
  } = useSearchType(clearTripSearch);

  return (
    <div className={light.searchWrapper}>
      <div key={type} className={`${light.searchType} ${typeClosing && light.reopen}`}>
        <button
          type="button"
          onClick={handleTrip}
          className={`${light.typeButton} ${type === searchTypes.trip && light.active}`}
        >
          <span className={light.buttonTitle}>Trips</span>
        </button>
        <button
          type="button"
          onClick={handleHotel}
          className={`${light.typeButton} ${type === searchTypes.hotel && light.active}`}
        >
          <span className={light.buttonTitle}>Hotels</span>
        </button>
      </div>
      {type === searchTypes.trip && (
        <div className={`${light.searchContainer} ${typeClosing === searchTypes.trip && light.closing}`}>
          <div className={`${light.searchRow} ${light.top}`}>
            <CitySelect open={true} label="From" selected={null} />
            <div className={light.searchDivider} />
            <CitySelect open={false} label="From" selected={null} />
            <DatePicker
              type={searchTypes.trip}
              oneway={tripForm.oneway}
              outwardDate={tripForm.outwardDate}
              returnDate={tripForm.returnDate}
              range={tripForm.rangeDate}
              dateOpen={dateOpen}
              handleOneway={formActions.oneway}
              handleDateOpen={() => {
                !dateOpen && formActions.oneway(false);
                handleDateOpen();
              }}
              handleSelect={formActions.date}
            />
            <button type="button" className={light.searchAccordion} onClick={handleAccordion}>
              <img
                src={arrow_down}
                alt="arrow_down"
                className={`${light.accordionIcon} ${accordion && !accordionClosing && light.active}`}
              />
            </button>
            <button type="button" disabled={true} className={light.searchButton}>
              <img src={search} alt="search" />
            </button>
          </div>
          {accordion && (
            <div className={`${light.accordion} ${accordionClosing && light.closing}`}>
              <div className={light.searchBorder} />
              <div className={light.searchRow}>
                <TimeSelect label="Outward time" selected={null} />
                <div className={light.searchDivider} />
                <TimeSelect label="Return time" selected={null} />
                <div className={light.searchDivider} />
                <UserSelect trip label="Passengers" />
              </div>
            </div>
          )}
        </div>
      )}
      {type === searchTypes.hotel && (
        <div
          className={`${light.searchContainer} ${light.hotel} ${typeClosing === searchTypes.hotel && light.closing}`}
        >
          <div className={`${light.searchRow} ${light.top}`}>
            <CitySelect label="City" selected={null}/>
            <DatePicker
              type={searchTypes.hotel}
              outwardDate={tripForm.outwardDate}
              returnDate={tripForm.returnDate}
              range={tripForm.rangeDate}
              dateOpen={dateOpen}
              handleDateOpen={handleDateOpen}
              handleSelect={formActions["date"]}
            />
            <button type="button" className={light.searchAccordion} onClick={handleAccordion}>
              <img
                src={arrow_down}
                alt="arrow_down"
                className={`${light.accordionIcon} ${accordion && !accordionClosing && light.active}`}
              />
            </button>
            <button type="button" disabled={true} className={light.searchButton}>
              <img src={search} alt="search"/>
            </button>
          </div>
          {accordion && (
            <div className={`${light.accordion} ${accordionClosing && light.closing}`}>
              <div className={light.searchBorder}/>
              <div className={light.searchRow}>
                <UserSelect trip label="Passengers"/>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchSection;
