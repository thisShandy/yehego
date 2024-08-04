// @ts-nocheck
import type { ITrainClass } from "~/modules/trip-module/lib/types/train-class.type.ts";
import type { IAirClass } from "~/modules/trip-module/lib/types/air-class.type.ts";

import { useRecoilValue } from "recoil";
import { useMatches } from "react-router-dom";

import { useBooking } from "~/modules/trip-module/model/hooks/useBooking.ts";

import { offerState } from "~/modules/trip-module/model/recoil/offer.ts";

import ButtonUi from "~/common/ui/kit/button-ui";
import MainLayout from "~/common/ui/layouts/main-layout";
import ContainerLayout from "~/common/ui/layouts/container-layout";
import SeatMapSection from "~/modules/trip-module/ui/sections/seat-map-section";
import AmenitiesSection from "~/modules/trip-module/ui/sections/amenities-section";
import TrainClassSection from "~/modules/trip-module/ui/sections/train-class-section";
import FlightClassSection from "~/modules/trip-module/ui/sections/flight-class-section";
import ExtraBaggageSection from "~/modules/trip-module/ui/sections/extra-baggage-section";

import light from "./style/light.module.scss";

const DetailsPage = () => {
  const matches = useMatches();
  const offer = useRecoilValue(offerState);
  const { loading, order, users } = useBooking(matches[0].params.id);

  if (loading) {
    return (
      <MainLayout>
        <ContainerLayout>
          <span>Loading</span>
        </ContainerLayout>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <ContainerLayout>
        {offer?.trip_offer.parts.map((part, index) => (
          <>
            {index === 1 && <div key={part.uuid} className={light.wayDivider} />}
            <div key={part.uuid} className={light.wayContainer}>
              <div className={light.wayHeader}>
                <span className={light.headerType}>
                  {offer?.trip_offer.parts.length === 1 && "One-way"}
                  {offer?.trip_offer.parts.length === 2 && "Round trip"}
                </span>
                <span className={light.headerCity}>
                  {index === 0 && `${offer?.trip_offer.from_city} - ${offer?.trip_offer.to_city}`}
                  {index === 1 && `${offer?.trip_offer.to_city} - ${offer?.trip_offer.from_city}`}
                </span>
                <span className={light.headerStart}>
                  {index === 0 && "Outward"}
                  {index === 1 && "Inward"}
                </span>
              </div>
              {part.transport_type === "TRAIN" && (
                <>
                  <TrainClassSection
                    classes={offer?.travelers[0].parts_info[index].travel_classes.classes as unknown as ITrainClass[]}
                    partIndex={index}
                  />
                  {/*<SeatMapSection />*/}
                  <AmenitiesSection />
                </>
              )}
              {part.transport_type === "AIR" && (
                <>
                  <FlightClassSection
                    classes={offer?.travelers[0].parts_info[index].travel_classes.classes as unknown as IAirClass[]}
                    partIndex={index}
                  />
                  <ExtraBaggageSection users={users} partIndex={index} />
                  {offer?.travelers[0].parts_info[index].travel_classes.classes
                    .find((airClass) => airClass.id === order[0].parts_info[index].travel_classes)
                    .segmentClasses.map((segment, segmentIndex) => {
                      if (segment.has_seatmap) {
                        return (
                          <SeatMapSection
                            key={`seatmap_${part.uuid}_${segmentIndex}`}
                            users={users}
                            partUuid={part.uuid}
                            partIndex={index}
                            segment={segment}
                            segmentIndex={segmentIndex}
                            airClass={offer?.travelers[0].parts_info[index].travel_classes.classes.find(
                              (airClass) => airClass.id === order[0].parts_info[index].travel_classes
                            )}
                          />
                        );
                      }
                    })}
                </>
              )}
            </div>
          </>
        ))}
        <div className={light.bottom} />
        <div className={light.waySummary}>
          <ContainerLayout>
            <div className={light.summaryContainer}>
              <div className={light.summary}>
                {order?.map((trav) => (
                  <div key={`travel_summary_${trav.traveler_uuid}`} className={light.summaryUser}>
                    <span className={light.userTitle}>
                      {`${users?.find((us) => us.uuid === trav.traveler_uuid) && users?.find((us) => us.uuid === trav.traveler_uuid)?.firstname} ${users?.find((us) => us.uuid === trav.traveler_uuid) && users?.find((us) => us.uuid === trav.traveler_uuid)?.lastname}:`}
                    </span>
                    <div className={light.userClasses}>
                      {trav.parts_info?.map((part, partIndex) => (
                        <>
                          {partIndex !== 0 && <span>{">"}</span>}
                          <span key={`summary_parts_${part.uuid}`}>
                            {
                              offer?.travelers[0].parts_info[partIndex].travel_classes.classes.find(
                                (flightClass) => flightClass.id === part.travel_classes
                              ).segmentClasses[0].branded_fare
                            }
                          </span>
                        </>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className={light.summaryContinue}>
                <ButtonUi label="Add to Cart" onClick={() => console.log("")} />
              </div>
            </div>
          </ContainerLayout>
        </div>
        {/*<div className={light.wayContainer}>*/}
        {/*  <div className={light.wayHeader}>*/}
        {/*    <span className={light.headerType}>Round trip</span>*/}
        {/*    <span className={light.headerCity}>Stockholm - London</span>*/}
        {/*    <span className={light.headerStart}>Outward</span>*/}
        {/*  </div>*/}
        {/*  <FlightClassSection />*/}
        {/*  <ExtraBaggageSection />*/}
        {/*  <SeatMapSection />*/}
        {/*</div>*/}
        {/*<div className={light.wayContainer}>*/}
        {/*  <div className={light.wayHeader}>*/}
        {/*    <span className={light.headerType}>Round trip</span>*/}
        {/*    <span className={light.headerCity}>Stockholm - Gothenburg</span>*/}
        {/*    <span className={light.headerStart}>Inward</span>*/}
        {/*  </div>*/}
        {/*  <TrainClassSection />*/}
        {/*  <SeatMapSection />*/}
        {/*  <AmenitiesSection />*/}
        {/*</div>*/}
        {/*<div className={light.wayDivider} />*/}
        {/*<div className={light.wayContainer}>*/}
        {/*  <div className={light.wayHeader}>*/}
        {/*    <span className={light.headerType}>Round trip</span>*/}
        {/*    <span className={light.headerCity}>London - Stockholm</span>*/}
        {/*    <span className={light.headerStart}>Inward</span>*/}
        {/*  </div>*/}
        {/*  <FlightClassSection />*/}
        {/*  <ExtraBaggageSection />*/}
        {/*  <SeatMapSection />*/}
        {/*</div>*/}
      </ContainerLayout>
    </MainLayout>
  );
};

export default DetailsPage;
