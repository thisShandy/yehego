import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";

import { useUpcomingTrips } from "~/modules/booked-module/model/hooks/useUpcomingTrips.ts";
import { useUpcomingHotels } from "~/modules/booked-module/model/hooks/useUpcomingHotels.ts";

import MainLayout from "~/common/ui/layouts/main-layout";
import ContainerLayout from "~/common/ui/layouts/container-layout";
import TripItem from "~/modules/booked-module/ui/components/trip-item";
import TripItemSkeleton from "~/modules/booked-module/ui/components/trip-item-skeleton";
import HotelItem from "~/modules/booked-module/ui/components/hotel-item";
import HotelItemSkeleton from "~/modules/booked-module/ui/components/hotel-item-skeleton";

import light from "./styles/light.module.scss";
import "~/common/styles/components/pagination.css";
import check from "~icons/control/check.svg";
import search from "~icons/search/search.svg";

const UpcomingPage = () => {
  const navigate = useNavigate();

  const [type, setType] = useState("Trips");

  const { loading: loadingTrips, page, setPage, trips, tripFilter, setTripFilter, handleGetTrips } = useUpcomingTrips();
  const { loading: loadingHotels, hotels, filter, setFilter } = useUpcomingHotels();
  return (
    <MainLayout>
      <ContainerLayout>
        <div className={light.tripsContainer}>
          <div className={light.tripsContent}>
            <div className={light.contentHeader}>
              <span className={light.contentTitle}>Upcoming {type}</span>
              <div className={light.contentSwitch}>
                <button
                  type="button"
                  className={`${light.switchOption} ${type === "Trips" && light.active}`}
                  onClick={() => setType("Trips")}
                >
                  <span className={light.optionTitle}>Trips</span>
                </button>
                <button
                  type="button"
                  className={`${light.switchOption} ${type === "Hotels" && light.active}`}
                  onClick={() => setType("Hotels")}
                >
                  <span className={light.optionTitle}>Hotels</span>
                </button>
              </div>
            </div>
            {type === "Trips" && (
              <>
                {loadingTrips && (
                  <div className={light.contentData}>
                    <TripItemSkeleton />
                    <TripItemSkeleton />
                    <TripItemSkeleton />
                    <TripItemSkeleton />
                    <TripItemSkeleton />
                  </div>
                )}
                {!loadingTrips && trips.length !== 0 && (
                  <div className={light.contentData}>
                    {trips.map((trip: any) => (
                      <TripItem
                        key={trip.id}
                        id={trip.id}
                        status={trip.attributes.status}
                        user={trip.attributes.user}
                        emission={
                          trip.attributes.transport_type === "AIR"
                            ? (trip.attributes.co2_emission / 1000).toFixed(0)
                            : (trip.attributes.co2_emission / 1000).toFixed(1)
                        }
                        price={trip.attributes.price}
                        currency={trip.attributes.currency}
                        tripParts={trip.attributes.trip_parts}
                        handleUpdateResults={handleGetTrips}
                      />
                    ))}
                  </div>
                )}
                {!loadingTrips && trips.length === 0 && (
                  <div className={light.contentEmpty}>
                    <span className={light.emptyTitle}>There are no booked trips yet</span>
                    <button type="button" className={light.emptyButton} onClick={() => navigate("/")}>
                      <span className={light.buttonTitle}>Start booking now</span>
                    </button>
                  </div>
                )}
                {!loadingTrips && trips.length !== 0 && (
                  <ReactPaginate
                    breakLabel="..."
                    nextLabel="Next"
                    onPageChange={async (pageEvent) => {
                      setPage((prev) => ({
                        ...prev,
                        currentPage: pageEvent.selected + 1
                      }));
                      window.scrollTo(0, 0);
                      await handleGetTrips(pageEvent.selected + 1);
                    }}
                    pageRangeDisplayed={5}
                    pageCount={page.lastPage || 0}
                    previousLabel="Previous"
                    forcePage={page.currentPage - 1}
                    renderOnZeroPageCount={null}
                  />
                )}
              </>
            )}
            {type === "Hotels" && (
              <>
                {loadingHotels && (
                  <div className={light.contentData}>
                    <HotelItemSkeleton />
                    <HotelItemSkeleton />
                    <HotelItemSkeleton />
                    <HotelItemSkeleton />
                    <HotelItemSkeleton />
                  </div>
                )}
                {!loadingHotels && hotels.length !== 0 && (
                  <div className={light.contentData}>
                    {hotels.map((hotel) => (
                      <HotelItem key={hotel.id} hotel={hotel} />
                    ))}
                  </div>
                )}
                {!loadingHotels && hotels.length === 0 && (
                  <div className={light.contentEmpty}>
                    <span className={light.emptyTitle}>There are no booked hotels yet</span>
                    <button type="button" className={light.emptyButton} onClick={() => navigate("/")}>
                      <span className={light.buttonTitle}>Start booking now</span>
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
          {type === "Trips" && (
            <div className={light.tripsFilter}>
              <div className={light.filterColumn}>
                <span className={light.columnTitle}>Sort By</span>
                <div className={light.columnValues}>
                  <button
                    type="button"
                    className={light.valueItem}
                    onClick={() => {
                      setPage((prev) => ({
                        ...prev,
                        currentPage: 1
                      }));
                      setTripFilter(null);
                    }}
                  >
                    <div className={`${light.itemCheck} ${tripFilter === null && light.active}`}>
                      <img className={light.checkIcon} src={check} alt="check" />
                    </div>
                    <span className={light.itemTitle}>All trips</span>
                  </button>
                  <button
                    type="button"
                    className={light.valueItem}
                    onClick={() => {
                      setPage((prev) => ({
                        ...prev,
                        currentPage: 1
                      }));
                      setTripFilter("STATUS_EXTERNAL_PENDING,STATUS_EXTERNAL_COMPLETED,STATUS_EXTERNAL_PAID");
                    }}
                  >
                    <div
                      className={`${light.itemCheck} ${tripFilter === "STATUS_EXTERNAL_PENDING,STATUS_EXTERNAL_COMPLETED,STATUS_EXTERNAL_PAID" && light.active}`}
                    >
                      <img className={light.checkIcon} src={check} alt="check" />
                    </div>
                    <span className={light.itemTitle}>Future trips</span>
                  </button>
                  <button
                    type="button"
                    className={light.valueItem}
                    onClick={() => {
                      setPage((prev) => ({
                        ...prev,
                        currentPage: 1
                      }));
                      setTripFilter("STATUS_INTERNAL_COMPLETED");
                    }}
                  >
                    <div className={`${light.itemCheck} ${tripFilter === "STATUS_INTERNAL_COMPLETED" && light.active}`}>
                      <img className={light.checkIcon} src={check} alt="check" />
                    </div>
                    <span className={light.itemTitle}>Finished trip</span>
                  </button>
                  <button
                    type="button"
                    className={light.valueItem}
                    onClick={() => {
                      setPage((prev) => ({
                        ...prev,
                        currentPage: 1
                      }));
                      setTripFilter("STATUS_EXTERNAL_CANCELLED");
                    }}
                  >
                    <div className={`${light.itemCheck} ${tripFilter === "STATUS_EXTERNAL_CANCELLED" && light.active}`}>
                      <img className={light.checkIcon} src={check} alt="check" />
                    </div>
                    <span className={light.itemTitle}>Cancelled trips</span>
                  </button>
                </div>
              </div>
              {location.pathname.split("/").find((el) => el === "company") && (
                <>
                  <div className={light.filterDivider} />
                  <div className={light.filterColumn}>
                    <span className={light.columnTitle}>User</span>
                    <div className={light.columnInput}>
                      <img className={light.inputIcon} src={search} alt="search" />
                      <input className={light.inputField} type="text" placeholder="Search" />
                    </div>
                  </div>
                </>
              )}
            </div>
          )}
          {type === "Hotels" && (
            <div className={light.tripsFilter}>
              <div className={light.filterColumn}>
                <span className={light.columnTitle}>Sort By</span>
                <div className={light.columnValues}>
                  <button
                    type="button"
                    className={light.valueItem}
                    onClick={() => {
                      setFilter(1);
                    }}
                  >
                    <div className={`${light.itemCheck} ${filter === 1 && light.active}`}>
                      <img className={light.checkIcon} src={check} alt="check" />
                    </div>
                    <span className={light.itemTitle}>Future hotels</span>
                  </button>
                  <button
                    type="button"
                    className={light.valueItem}
                    onClick={() => {
                      setFilter(0);
                    }}
                  >
                    <div className={`${light.itemCheck} ${filter === 0 && light.active}`}>
                      <img className={light.checkIcon} src={check} alt="check" />
                    </div>
                    <span className={light.itemTitle}>Finished hotels</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </ContainerLayout>
    </MainLayout>
  );
};

export default UpcomingPage;
