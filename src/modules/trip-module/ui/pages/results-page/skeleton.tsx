import SkeletonUi from "~/common/ui/kit/skeleton-ui";

import light from "./style/light.module.scss";

const ResultsPageSkeleton = () => {
  return (
    <div className={light.skeletonContainer}>
      <div className={light.skeletonContent}>
        <SkeletonUi width={56} height={28} />
        <SkeletonUi width={272} height={470} borderRadius={16} />
      </div>
      <div className={light.skeletonData}>
        <SkeletonUi width={128} height={28} />
        <SkeletonUi width="100%" height={164} borderRadius={16} />
        <SkeletonUi width="100%" height={164} borderRadius={16} />
        <SkeletonUi width="100%" height={164} borderRadius={16} />
        <SkeletonUi width="100%" height={164} borderRadius={16} />
        <SkeletonUi width="100%" height={164} borderRadius={16} />
        <SkeletonUi width="100%" height={164} borderRadius={16} />
      </div>
      <div className={light.skeletonContent}>
        <SkeletonUi width={102} height={28} />
        <SkeletonUi width={272} height={360} borderRadius={16} />
      </div>
    </div>
  );
};

export default ResultsPageSkeleton;
