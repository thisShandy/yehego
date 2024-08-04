import { useNavigate } from "react-router-dom";

import { useSearchTrip } from "~/modules/home-module/model/hooks/useSearchTrip.ts";
import { useSearchType } from "~/modules/home-module/model/hooks/useSearchType.ts";
import { usePassengers } from "~/modules/home-module/model/hooks/usePassengers.ts";
import { useCitySelect } from "~/modules/home-module/model/hooks/useCitySelect.ts";
import { useTimeSelect } from "~/modules/home-module/model/hooks/useTimeSelect.ts";
import { useClassSelect } from "~/modules/home-module/model/hooks/useClassSelect.ts";
import { useSearchHotel } from "~/modules/home-module/model/hooks/useSearchHotel.ts";

import { searchTypes } from "~/common/lib/configs/search/search-types.ts";

import DatePicker from "~/modules/home-module/ui/components/date-picker";
import CitySelect from "~/modules/home-module/ui/components/city-select";
import UserSelect from "~/modules/home-module/ui/components/user-select";
import TimeSelect from "~/modules/home-module/ui/components/time-select";
import ClassSelect from "~/modules/home-module/ui/components/class-select";
import PassengerModal from "~/modules/home-module/ui/modals/passenger-modal";

import light from "./styles/light.module.scss";
import search from "~icons/search/search.svg";
import arrow_down from "~icons/arrow/arrow_down.svg";

const SearchSection = () => {
  const navigate = useNavigate();

  const {
    active,
    handleActive,
    passengers,
    loading,
    error,
    passengersValue,
    passengersResults,
    handleUpdate,
    handleAddOrRemove
  } = usePassengers();

  const { form: tripForm, formActions, selectionRange: dateSelectedTrip, clearTripSearch } = useSearchTrip();

  const {
    form: hotelForm,
    formActions: hotelActions,
    selectionRange: dateSelectedHotels,
    clearHotelsSearch
  } = useSearchHotel();

  const { selectedCity: selectedCityOutward, handleSelect: handleSelectOutward } = useCitySelect();

  const { selectedCity: selectedCityInward, handleSelect: handleSelectInward } = useCitySelect();

  const { selectedCity: selectedCityHotel, handleSelect: handleSelectHotel } = useCitySelect();

  const { selectedTime: selectedTimeOutward, handleSelect: handleSelectTimeOutward } = useTimeSelect();

  const { selectedTime: selectedTimeInward, handleSelect: handleSelectTimeInward } = useTimeSelect();

  const { selectedClass, handleSelect: handleClassSelect } = useClassSelect();

  const {
    type,
    typeClosing,
    handleTrip,
    handleHotel,
    dateOpen,
    handleDateOpen,
    accordion,
    accordionClosing,
    handleAccordion
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
            <CitySelect
              testId="outward_city"
              label="From"
              selected={selectedCityOutward.name}
              handleSelect={handleSelectOutward}
              defaultCities={[
                {
                  cityCode: "STO",
                  countryCode: "SE",
                  id: "85a46850-1167-40d8-8f25-cd564300d931",
                  key: "74_1",
                  latitude: "59.3300",
                  longitude: "18.0581",
                  name: "Stockholm"
                },
                {
                  cityCode: "NYC",
                  countryCode: "US",
                  id: "ae523ec8-018c-419f-906f-c6d104a6e31d",
                  key: "new-york_us",
                  latitude: "40.7100",
                  longitude: "-74.0100",
                  name: "New York"
                }
              ]}
            />
            <div className={light.searchDivider} />
            <CitySelect
              testId="return_city"
              label="From"
              selected={selectedCityInward.name}
              handleSelect={handleSelectInward}
              defaultCities={[
                {
                  cityCode: "LON",
                  countryCode: "GB",
                  id: "3d05219e-3f5e-4bcd-8d93-f08516feee3a",
                  key: "london_gb",
                  latitude: "51.5100",
                  longitude: "-0.1300",
                  name: "London"
                },
                {
                  cityCode: "MXX",
                  countryCode: "SE",
                  id: "402e8c8f-5e2e-44e7-a3e0-25aa1bfbe760",
                  key: "74_302",
                  latitude: "61.0086",
                  longitude: "14.5586",
                  name: "Mora"
                },
                {
                  cityCode: "KLR",
                  countryCode: "SE",
                  id: "b4026639-06d9-46f7-a290-af143582a689",
                  key: "74_20",
                  latitude: "56.6611",
                  longitude: "16.3600",
                  name: "Kalmar"
                }
              ]}
            />
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
            <button
              type="button"
              className={light.searchButton}
              onClick={() => {
                const dateFormatToSearch = (dateString: Date) => {
                  return dateString
                    .toLocaleDateString("ko-KR", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit"
                    })
                    .split(". ")
                    .join("-")
                    .split(".")
                    .join("");
                };

                const searchParams = {
                  outward_city_name: selectedCityOutward.name,
                  outward_city_code: selectedCityOutward.cityCode,
                  inward_city_name: selectedCityInward.name,
                  inward_city_code: selectedCityInward.cityCode,
                  outward_date: dateSelectedTrip.startDate && dateFormatToSearch(dateSelectedTrip.startDate),
                  inward_date: dateSelectedTrip.endDate && dateFormatToSearch(dateSelectedTrip.endDate),
                  passengers: passengers.map((el) => el.uuid)
                };

                const query = new URLSearchParams(searchParams);
                navigate(`trips/results?${query}`);
              }}
            >
              <img src={search} alt="search" />
            </button>
          </div>
          {accordion && (
            <div className={`${light.accordion} ${accordionClosing && light.closing}`}>
              <div className={light.searchBorder} />
              <div className={light.searchRow}>
                <ClassSelect
                  label="Flight class"
                  selected={selectedClass}
                  placeholder="Select class"
                  handleSelect={handleClassSelect}
                />
                <div className={light.searchDivider} />
                <TimeSelect
                  label="Outward time"
                  selected={selectedTimeOutward}
                  handleSelect={handleSelectTimeOutward}
                />
                <div className={light.searchDivider} />
                <TimeSelect label="Return time" selected={selectedTimeInward} handleSelect={handleSelectTimeInward} />
                <div className={light.searchDivider} />
                <UserSelect
                  trip
                  label="Passengers"
                  passengers={passengers}
                  handleActive={handleActive}
                  handleAddOrRemove={handleAddOrRemove}
                />
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
            <CitySelect
              testId="hotel_city"
              label="City"
              selected={selectedCityHotel.name}
              handleSelect={handleSelectHotel}
              defaultCities={[
                {
                  cityCode: "STO",
                  countryCode: "SE",
                  id: "85a46850-1167-40d8-8f25-cd564300d931",
                  key: "74_1",
                  latitude: "59.3300",
                  longitude: "18.0581",
                  name: "Stockholm"
                },
                {
                  cityCode: "LON",
                  countryCode: "GB",
                  id: "3d05219e-3f5e-4bcd-8d93-f08516feee3a",
                  key: "london_gb",
                  latitude: "51.5100",
                  longitude: "-0.1300",
                  name: "London"
                },
                {
                  cityCode: "NYC",
                  countryCode: "US",
                  id: "ae523ec8-018c-419f-906f-c6d104a6e31d",
                  key: "new-york_us",
                  latitude: "40.7100",
                  longitude: "-74.0100",
                  name: "New York"
                }
              ]}
            />
            <DatePicker
              type={searchTypes.hotel}
              outwardDate={hotelForm.outwardDate}
              returnDate={hotelForm.returnDate}
              range={hotelForm.rangeDate}
              dateOpen={dateOpen}
              handleDateOpen={handleDateOpen}
              handleSelect={hotelActions["date"]}
            />
            <button type="button" className={light.searchAccordion} onClick={handleAccordion}>
              <img
                src={arrow_down}
                alt="arrow_down"
                className={`${light.accordionIcon} ${accordion && !accordionClosing && light.active}`}
              />
            </button>
            <button
              type="button"
              className={light.searchButton}
              onClick={() => {
                const dateFormatToSearch = (dateString: Date) => {
                  return dateString
                    .toLocaleDateString("ko-KR", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit"
                    })
                    .split(". ")
                    .join("-")
                    .split(".")
                    .join("");
                };

                const searchParams = {
                  city_name: selectedCityHotel.name,
                  city_code: selectedCityHotel.cityCode,
                  latitude: selectedCityHotel.latitude,
                  longitude: selectedCityHotel.longitude,
                  outward_date: dateSelectedHotels.startDate && dateFormatToSearch(dateSelectedHotels.startDate),
                  inward_date: dateSelectedHotels.endDate && dateFormatToSearch(dateSelectedHotels.endDate),
                  passengers: passengers.map((el) => el.uuid)
                };

                const query = new URLSearchParams(searchParams);
                navigate(`hotels/results?${query}`);
              }}
            >
              <img src={search} alt="search" />
            </button>
          </div>
          {accordion && (
            <div className={`${light.accordion} ${accordionClosing && light.closing}`}>
              <div className={light.searchBorder} />
              <div className={light.searchRow}>
                <UserSelect
                  trip={false}
                  label="Passengers"
                  passengers={passengers}
                  handleActive={handleActive}
                  handleAddOrRemove={handleAddOrRemove}
                />
              </div>
            </div>
          )}
        </div>
      )}
      <PassengerModal
        active={active}
        handleActive={handleActive}
        passengers={passengers}
        loading={loading}
        error={error}
        passengersValue={passengersValue}
        passengersResults={passengersResults}
        handleUpdate={handleUpdate}
        handleAddOrRemove={handleAddOrRemove}
      />
    </div>
  );
};

export default SearchSection;
