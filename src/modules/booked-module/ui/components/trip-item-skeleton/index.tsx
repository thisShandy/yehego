import SkeletonUi from "~/common/ui/kit/skeleton-ui";

import light from "./styles/light.module.scss";

const TripItemSkeleton = () => {
  return (
    <div className={light.dataSkeleton}>
      <div className={light.skeletonInfo}>
        <SkeletonUi width={96} height={30} />
        <SkeletonUi width={100} height={20} />
        <SkeletonUi width={200} height={40} style={{ marginTop: "1rem" }} />
      </div>
      <div className={light.skeletonDivider} />
      <div className={light.skeletonContent}>
        <SkeletonUi width={96} height={30} />
        <div className={light.contentInfo}>
          <SkeletonUi width={156} height={72} />
          <SkeletonUi width="100%" height={30} />
          <SkeletonUi width={156} height={72} />
        </div>
      </div>
    </div>
  );
};

export default TripItemSkeleton;
