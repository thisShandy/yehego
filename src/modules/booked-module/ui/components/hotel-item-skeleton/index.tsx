import SkeletonUi from "~/common/ui/kit/skeleton-ui";

import light from "./styles/light.module.scss";

const HotelItemSkeleton = () => {
  return (
    <div className={light.hotelContainer}>
      <div className={light.hotelHeader}>
        <SkeletonUi width={256} height={32} />
        <SkeletonUi width={156} height={24} />
      </div>
      <SkeletonUi style={{ marginTop: "1rem" }} width={156} height={24} />
      <div className={light.hotelDivider} />
      <SkeletonUi style={{ marginBottom: ".5rem" }} width={172} height={20} />
      <SkeletonUi width={196} height={20} />
      <div className={light.hotelFooter}>
        <SkeletonUi width={156} height={24} />
        <SkeletonUi width={72} height={20} />
      </div>
    </div>
  );
};

export default HotelItemSkeleton;
