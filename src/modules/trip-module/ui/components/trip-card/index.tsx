import light from "./styles/light.module.scss";

const TripCard = () => {
  return (
    <div className={light.tripContainer}>
      <div className={light.tripHeader}>
        <span className={light.headerTitle}>Stockholm - London</span>
        <span className={light.headerDescription}>17.05.2024 | 1 passenger | 196kg CO₂</span>
      </div>
      <div className={light.tripWay}>
        <div className={light.wayItem}>
          <span className={light.itemTitle}>Stockholm Airport</span>
          <span className={light.itemAirport}>Flight, Norwegian Air International</span>
        </div>
        <div className={light.wayItem}>
          <span className={light.itemTitle}>London Airport</span>
          <span className={light.itemAirport}>Flight, Norwegian Air International</span>
        </div>
      </div>
      <div className={light.tripJourney}>
        <span className={light.journeyTime}>13:40</span>
        <div className={light.journeyWay}>
          <span className={light.wayTitle}>Flight time: 2 hours</span>
        </div>
        <span className={light.journeyTime}>15:40</span>
      </div>
    </div>
  );
};

export default TripCard;
