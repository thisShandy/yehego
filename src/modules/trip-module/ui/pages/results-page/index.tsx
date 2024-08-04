import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";

import { useTripResults } from "~/modules/trip-module/model/hooks/useTripResults.ts";
import { useSelectedTrip } from "~/modules/trip-module/model/hooks/useSelectedTrip.ts";

import { getTransportInfo } from "~/common/lib/helpers/search/get-transport-info.ts";
import { formatTime } from "~/common/lib/helpers/system/format-time.ts";
import { formatDate } from "~/common/lib/helpers/system/format-date.ts";

import ButtonUi from "~/common/ui/kit/button-ui";
import MainLayout from "~/common/ui/layouts/main-layout";
import ContainerLayout from "~/common/ui/layouts/container-layout";
import TripRound from "~/modules/trip-module/ui/components/trip-round";
import FilterItem from "~/modules/trip-module/ui/components/filter-item";
import TripSingle from "~/modules/trip-module/ui/components/trip-single";
import SummarySelected from "~/modules/trip-module/ui/components/summary-selected";
import ResultsPageSkeleton from "~/modules/trip-module/ui/pages/results-page/skeleton.tsx";

import light from "./style/light.module.scss";
// import search from "~icons/search/search.svg";

export const getUniqueTransportInfo = (segments: any[]) => {
  let transportInfoStrs = null;

  if (segments && Array.isArray(segments)) {
    const carriers = segments.map((segment) => segment.carrier_name);
    const carriersCount = new Set(carriers).size;

    if (carriersCount > 1) {
      transportInfoStrs = segments.map((segment, index) => {
        const transportInfoStr = getTransportInfo(segment);
        return (
          <>
            {index !== 0 && <div className={light.divider} />}
            <div key={index}>{transportInfoStr}</div>
          </>
        );
      });
    } else {
      const transportInfoStr = getTransportInfo(segments[0]);
      transportInfoStrs = [<div key={0}>{transportInfoStr}</div>];
    }
  }
  return transportInfoStrs;
};

const ResultsPage = () => {
  const [isRound, setRound] = useState(false);
  const [isReload, setReload] = useState(false);
  const navigate = useNavigate();

  const location = useLocation();
  const parsed: any = queryString.parse(location.search);

  const { data, loading } = useTripResults(
    parsed.outward_city_code,
    parsed.inward_city_code,
    parsed.outward_date,
    parsed.inward_date,
    parsed.passengers
  );

  const handleMove = (id: string) => {
    const element = document.querySelector(`#${id}`);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const { selected, setSelectedTrip } = useSelectedTrip();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setReload(true);
    }, 60000 * 6);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <MainLayout>
      <ContainerLayout>
        {isReload && (
          <div className={light.searchTime}>
            <div className={light.timeContainer}>
              <span className={light.timeTitle}>Prices has been changed</span>
              <div className={light.timeControl}>
                <button type="button" className={light.controlHome} onClick={() => navigate("/")}>
                  <span className={light.homeTitle}>Home</span>
                </button>
                <button type="button" className={light.controlReload} onClick={() => window.location.reload()}>
                  <span className={light.reloadTitle}>Reload</span>
                </button>
              </div>
            </div>
          </div>
        )}
        <div id="home" className={light.searchContainer}>
          <div className={light.searchPanel}>
            <div className={light.panelField}>
              <span className={light.filedName} onClick={() => setRound(false)}>
                From
              </span>
              <span className={light.filedValue}>{parsed.outward_city_name}</span>
            </div>
            <div className={light.panelField}>
              <span className={light.filedName}>To</span>
              <span className={light.filedValue}>{parsed.inward_city_name}</span>
            </div>
            <div className={light.panelField}>
              <span className={light.filedName}>Outward</span>
              <span className={light.filedValue}>
                {`${parsed.outward_date?.split("-")[2]}.${parsed.outward_date?.split("-")[1]}.${parsed.outward_date?.split("-")[0]}`}
              </span>
            </div>
            <div className={`${light.panelField} ${light.last}`}>
              <span className={light.filedName}>Inward</span>
              <span className={light.filedValue}>
                {`${parsed.inward_date?.split("-")[2]}.${parsed.inward_date?.split("-")[1]}.${parsed.inward_date?.split("-")[0]}`}
              </span>
            </div>
            {/*<button type="button" className={light.panelSearch}>*/}
            {/*  <img className={light.searchIcon} src={search} alt="search" />*/}
            {/*</button>*/}
          </div>
        </div>
        {loading && <ResultsPageSkeleton />}
        {!loading && (
          <div className={light.resultsContainer}>
            <div className={light.resultsSide}>
              <span className={light.sideTitle}>Filter</span>
              <div className={light.sideFilter}>
                <FilterItem name="Sort by" />
                <FilterItem name="Stops" />
                <FilterItem name="Departure" />
                <FilterItem name="Custom" />
                <FilterItem name="Price" />
                <FilterItem name="Station" />
                <div className={light.filterControl}>
                  <ButtonUi size="small" label="Apply filters" onClick={() => console.log("hello")} />
                  <button type="button" className={light.controlReset}>
                    <span className={light.resetTitle}>Reset filters</span>
                  </button>
                </div>
              </div>
            </div>
            <div className={light.resultsData}>
              {isRound && (
                <div className={light.dataWay}>
                  <span className={light.wayTitle}>Round</span>
                  <TripRound
                    greenest={true}
                    cheapest={true}
                    cost="470"
                    currency="$"
                    emission="230"
                    trips={[
                      {
                        type: "air",
                        time: "7",
                        airports: ["ARN", "COP", "LHR"],
                        start: {
                          city: "Stockholm",
                          time: "13:50",
                          date: "Mon April 13"
                        },
                        end: {
                          city: "London",
                          time: "17:30",
                          date: "Mon April 13"
                        },
                        airline: "SAS"
                      },
                      {
                        type: "air",
                        time: "7",
                        airports: ["LHR", "COP", "ARN"],
                        start: {
                          city: "London",
                          time: "12:30",
                          date: "Wed April 15"
                        },
                        end: {
                          city: "Stockholm",
                          time: "15:00",
                          date: "Wed April 15"
                        },
                        airline: "SAS"
                      }
                    ]}
                  />
                </div>
              )}
              {!isRound && (
                <>
                  <div id="outward" className={light.dataWay}>
                    <span className={light.wayTitle}>Outward</span>
                    {data.outward.offers.map((el: any) => (
                      <TripSingle
                        key={el.uuid}
                        data={el}
                        way="outward"
                        type={el.transport_type.toLowerCase()}
                        greenest={false}
                        cheapest={false}
                        sold={el.sold_out}
                        cost={el.price_users_total}
                        currency={el.price_users_currency}
                        emission={el.parts[0].carbon_emission_weight / 1000}
                        time={`${el.parts[0].estimated_total_travel_time.replace("PT", "").replace("M", "")[0]} hours ${el.parts[0].estimated_total_travel_time.replace("PT", "").replace("M", "").split("H")[1]} ${el.parts[0].estimated_total_travel_time.replace("PT", "").replace("M", "").split("H")[1] ? "minutes" : ""}`}
                        airports={[
                          ...el.parts[0].segments.map((segm: any) => segm.departure_code),
                          el.parts[0].segments[el.parts[0].segments.length - 1].arrival_code
                        ]}
                        start={{
                          city: el.from_city,
                          time: formatTime(el.parts[0].departure_datetime),
                          date: formatDate(el.parts[0].departure_datetime)
                        }}
                        end={{
                          city: el.to_city,
                          time: formatTime(el.parts[0].arrival_datetime),
                          date: formatDate(el.parts[0].arrival_datetime)
                        }}
                        airline={getUniqueTransportInfo(el.parts[0].segments) as unknown as string}
                        handleMove={handleMove}
                        setSelected={setSelectedTrip}
                      />
                    ))}
                  </div>
                  <div id="inward" className={light.dataWay}>
                    <span className={light.wayTitle}>Inward</span>
                    {data.inward.offers.map((el: any) => (
                      <TripSingle
                        key={el.uuid}
                        data={el}
                        way="inward"
                        type={el.transport_type.toLowerCase()}
                        greenest={false}
                        cheapest={false}
                        sold={el.sold_out}
                        cost={el.price_users_total}
                        currency={el.price_users_currency}
                        emission={el.parts[0].carbon_emission_weight / 1000}
                        time={`${el.parts[0].estimated_total_travel_time.replace("PT", "").replace("M", "")[0]} hours ${el.parts[0].estimated_total_travel_time.replace("PT", "").replace("M", "").split("H")[1]} ${el.parts[0].estimated_total_travel_time.replace("PT", "").replace("M", "").split("H")[1] ? "minutes" : ""}`}
                        airports={[
                          ...el.parts[0].segments.map((segm: any) => segm.departure_code),
                          el.parts[0].segments[el.parts[0].segments.length - 1].arrival_code
                        ]}
                        start={{
                          city: el.from_city,
                          time: "13:50",
                          date: "Mon April 13"
                        }}
                        end={{
                          city: el.to_city,
                          time: "17:30",
                          date: "Mon April 13"
                        }}
                        airline={getUniqueTransportInfo(el.parts[0].segments) as unknown as string}
                        handleMove={handleMove}
                        setSelected={setSelectedTrip}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
            <div className={light.resultsSide}>
              <span className={light.sideTitle}>Summary</span>
              <div className={light.sideSummary}>
                {/*<button type="button" className={light.summaryGreen}>*/}
                {/*  <span className={light.greenTitle}>Green alternative</span>*/}
                {/*</button>*/}
                <SummarySelected
                  title="Outward"
                  moveTo={() => handleMove("outward")}
                  selected={selected.outward}
                  setSelected={setSelectedTrip}
                />
                <SummarySelected
                  title="Inward"
                  moveTo={() => handleMove("inward")}
                  selected={selected.inward}
                  setSelected={setSelectedTrip}
                />
                <div className={light.summaryTotal}>
                  <span className={light.totalPrice}>
                    {`Total: ${
                      selected.outward && !selected.inward
                        ? selected.outward.price_users_total + " " + selected.outward.price_users_currency
                        : !selected.outward && selected.inward
                          ? selected.inward.price_users_total + " " + selected.inward.price_users_currency
                          : selected.outward && selected.inward
                            ? Number(selected.outward.price_users_total) +
                              Number(selected.inward.price_users_total) +
                              " " +
                              selected.inward.price_users_currency
                            : "-"
                    }`}
                  </span>
                  <button
                    type="button"
                    disabled={!selected.outward || !selected.inward}
                    className={`${light.totalButton} ${selected.outward && selected.inward && light.pulse}`}
                    onClick={() => {
                      console.log(parsed.passengers);
                      const createLink = `/trips/details?search=${data.uuid}&outward=${selected.outward.uuid}&inward=${selected.inward.uuid}${parsed.passengers
                        .split(",")
                        .map((el: any) => `&passengers[]=${el}`)
                        .join("")}`;
                      navigate(createLink);
                    }}
                  >
                    <span className={light.buttonTitle}>Continue</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </ContainerLayout>
    </MainLayout>
  );
};

export default ResultsPage;
