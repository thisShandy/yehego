import type { FC } from "react";

import light from "./styles/light.module.scss";
import location from "~icons/way/location.svg";

interface IHotelItem {
  hotel: any;
}

const HotelItem: FC<IHotelItem> = ({ hotel }) => {
  return (
    <div className={light.hotelContainer}>
      <div className={light.hotelHeader}>
        <span className={light.headerTitle}>{hotel.hotel.name}</span>
        <span className={light.headerUser}>{`${hotel.guest.firstname} ${hotel.guest.lastname}`}</span>
      </div>
      <div className={light.hotelAddress}>
        <img src={location} alt="location" className={light.addressImage} />
        <span className={light.addressText}>{hotel.hotel.address}</span>
      </div>
      <div className={light.hotelDivider} />
      <span className={light.hotelInfo}>Confirmation: {hotel.reference}</span>
      <span className={light.hotelInfo}>Free cancellation until: {hotel.reference}</span>
      <div className={light.hotelFooter}>
        <span className={light.footerPrice}>{`Price: ${hotel.price.amount} ${hotel.price.currency}`}</span>
        <span className={light.footerEmission}>{(hotel.co2.carbonEmissionWeight / 1000).toFixed(1)}kg CO₂</span>
      </div>
    </div>
  );
};

export default HotelItem;
