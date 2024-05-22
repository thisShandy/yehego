import { useState } from "react";

import MainLayout from "~/common/ui/layouts/main-layout";
import ContainerLayout from "~/common/ui/layouts/container-layout";
import FilterItem from "~/modules/trip-module/ui/components/filter-item";
import TripSingle from "~/modules/trip-module/ui/components/trip-single";
import TripRound from "~/modules/trip-module/ui/components/trip-round";
import ButtonUi from "~/common/ui/kit/button-ui";

import light from "./style/light.module.scss";
import search from "~icons/search/search.svg";

const ResultsPage = () => {
  const [isRound, setRound] = useState(true);

  return (
    <MainLayout>
      <ContainerLayout>
        <div className={light.searchContainer}>
          <div className={light.searchPanel}>
            <div className={light.panelField}>
              <span className={light.filedName}>
                From
              </span>
              <span className={light.filedValue}>
                Stockholm
              </span>
            </div>
            <div className={light.panelField}>
              <span className={light.filedName}>
                To
              </span>
              <span className={light.filedValue}>
                London
              </span>
            </div>
            <div className={light.panelField}>
              <span className={light.filedName}>
                Outward
              </span>
              <span className={light.filedValue}>
                17.05.2024
              </span>
            </div>
            <div className={`${light.panelField} ${light.last}`}>
              <span className={light.filedName}>
                Inward
              </span>
              <span className={light.filedValue}>
                19.05.2024
              </span>
            </div>
            <button type="button" className={light.panelSearch}>
              <img className={light.searchIcon} src={search} alt="search" />
            </button>
          </div>
        </div>
        <div className={light.resultsContainer}>
          <div className={light.resultsSide}>
            <span className={light.sideTitle}>
              Filter
            </span>
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
                <span className={light.wayTitle}>
                  Round
                </span>
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
                        date: "Mon April 13",
                      },
                      end: {
                        city: "London",
                        time: "17:30",
                        date: "Mon April 13",
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
                        date: "Wed April 15",
                      },
                      end: {
                        city: "Stockholm",
                        time: "15:00",
                        date: "Wed April 15",
                      },
                      airline: "SAS"
                    },
                  ]}
                />
              </div>
            )}
            {!isRound && (
              <>
                <div className={light.dataWay}>
                  <span className={light.wayTitle}>Outward</span>
                  <TripSingle
                    type="air"
                    greenest={false}
                    cheapest={false}
                    cost="300"
                    currency="$"
                    emission="250"
                    time="7"
                    airports={["ARN", "COP", "LHR"]}
                    start={{
                      city: "Stockholm",
                      time: "13:50",
                      date: "Mon April 13",
                    }}
                    end={{
                      city: "London",
                      time: "17:30",
                      date: "Mon April 13",
                    }}
                    airline="SAS"
                  />
                  <TripSingle
                    type="air"
                    greenest={false}
                    cheapest={false}
                    cost="350"
                    currency="$"
                    emission="252"
                    time="5"
                    airports={["ARN", "LHR"]}
                    start={{
                      city: "Stockholm",
                      time: "14:00",
                      date: "Mon April 13",
                    }}
                    end={{
                      city: "London",
                      time: "17:20",
                      date: "Mon April 13",
                    }}
                    airline="Norwegian Air International"
                  />
                  <TripSingle
                    type="train"
                    greenest
                    cheapest={false}
                    cost="122"
                    currency="$"
                    emission="0.3"
                    time="5"
                    airports={["Stockholm City station", "London Central"]}
                    start={{
                      city: "Stockholm",
                      time: "14:30",
                      date: "Mon April 13",
                    }}
                    end={{
                      city: "London",
                      time: "17:45",
                      date: "Mon April 13",
                    }}
                    airline="SJ"
                  />
                </div>
                <div className={light.dataWay}>
                  <span className={light.wayTitle}>Return</span>
                  <TripSingle
                    type="air"
                    greenest={false}
                    cheapest={false}
                    cost="350"
                    currency="$"
                    emission="252"
                    time="5"
                    airports={["LHR", "ARN"]}
                    start={{
                      city: "London",
                      time: "12:20",
                      date: "Mon April 13",
                    }}
                    end={{
                      city: "Stockholm",
                      time: "16:00",
                      date: "Mon April 13",
                    }}
                    airline="Norwegian Air International"
                  />
                  <TripSingle
                    type="train"
                    greenest
                    cheapest={false}
                    cost="122"
                    currency="$"
                    emission="0.3"
                    time="5"
                    airports={["London Central", "Stockholm City station", "Stockholm City station"]}
                    start={{
                      city: "London",
                      time: "17:45",
                      date: "Mon April 13",
                    }}
                    end={{
                      city: "Stockholm",
                      time: "19:30",
                      date: "Mon April 13",
                    }}
                    airline="SJ"
                  />
                  <TripSingle
                    type="air"
                    greenest={false}
                    cheapest={false}
                    cost="300"
                    currency="$"
                    emission="250"
                    time="7"
                    airports={["LHR", "COP", "ARN"]}
                    start={{
                      city: "London",
                      time: "20:20",
                      date: "Mon April 13",
                    }}
                    end={{
                      city: "Stockholm",
                      time: "23:50",
                      date: "Mon April 13",
                    }}
                    airline="SAS"
                  />
                </div>
              </>
            )}
          </div>
          <div className={light.resultsSide}>
            <span className={light.sideTitle}>
              Summary
            </span>
            <div className={light.sideSummary}>
              <button type="button" className={light.summaryGreen}>
                <span className={light.greenTitle}>
                  Green alternative
                </span>
              </button>
              <div className={light.summarySelected}>
                <span className={light.selectedWay}>Outward</span>
                <span className={light.selectedDirection}>Stockholm - London</span>
                <span className={light.selectedEmission}>500kg CO₂</span>
                <div className={light.selectedDate}>
                  <span className={light.dateData}>
                    Mon April 13
                  </span>
                  <span className={light.dateTime}>
                    5:30 - 14:20
                  </span>
                </div>
                <div className={light.selectedFlight}>
                  <span className={light.flightTitle}>
                    Flight time
                  </span>
                  <span className={light.flightTime}>
                    7 hours
                  </span>
                </div>
                <div className={light.selectedPrice}>
                  <span className={light.priceTitle}>Price:</span>
                  <span className={light.priceAmount}>120$</span>
                </div>
              </div>
              <div className={light.summarySelected}>
                <span className={light.selectedWay}>Inward</span>
                <span className={light.selectedDirection}>London - Stockholm</span>
                <span className={light.selectedEmission}>520kg CO₂</span>
                <div className={light.selectedDate}>
                  <span className={light.dateData}>
                    Mon April 16
                  </span>
                  <span className={light.dateTime}>
                    15:35 - 19:00
                  </span>
                </div>
                <div className={light.selectedFlight}>
                  <span className={light.flightTitle}>
                    Flight time
                  </span>
                  <span className={light.flightTime}>
                    3.5 hours
                  </span>
                </div>
                <div className={light.selectedPrice}>
                  <span className={light.priceTitle}>Price:</span>
                  <span className={light.priceAmount}>200$</span>
                </div>
              </div>
              <div className={light.summaryTotal}>
                <span className={light.totalPrice}>
                  Total: 320$
                </span>
                <button type="button" className={light.totalButton}>
                  <span className={light.buttonTitle}>Continue</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </ContainerLayout>
    </MainLayout>
  );
};

export default ResultsPage;
