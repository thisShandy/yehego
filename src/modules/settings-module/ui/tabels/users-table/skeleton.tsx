import SkeletonUi from "~/common/ui/kit/skeleton-ui";

import light from "./styles/light.module.scss";

const UsersTableSkeleton = () => {
  return (
    <div className={light.usersSkeleton}>
      <div className={light.usersGrid}>
        <div className={light.gridRow}>
          <SkeletonUi width={60} height={26} borderRadius={6}/>
          <SkeletonUi width={56} height={26} borderRadius={6}/>
          <SkeletonUi width={48} height={26} borderRadius={6}/>
          <SkeletonUi width={64} height={26} borderRadius={6}/>
          <span/>
        </div>
        <div className={light.gridRow}>
          <SkeletonUi width={164} height={26} borderRadius={6}/>
          <SkeletonUi width={200} height={26} borderRadius={6}/>
          <SkeletonUi width={128} height={26} borderRadius={6}/>
          <SkeletonUi width={96} height={26} borderRadius={6}/>
          <div className={light.rowControl}>
            <SkeletonUi width={108} height={36} borderRadius={8}/>
            <SkeletonUi width={26} height={26} borderRadius={6}/>
          </div>
        </div>
        <div className={light.gridRow}>
          <SkeletonUi width={134} height={26} borderRadius={6}/>
          <SkeletonUi width={256} height={26} borderRadius={6}/>
          <SkeletonUi width={120} height={26} borderRadius={6}/>
          <SkeletonUi width={108} height={26} borderRadius={6}/>
          <div className={light.rowControl}>
            <SkeletonUi width={108} height={36} borderRadius={8}/>
            <SkeletonUi width={26} height={26} borderRadius={6}/>
          </div>
        </div>
        <div className={light.gridRow}>
          <SkeletonUi width={156} height={26} borderRadius={6}/>
          <SkeletonUi width={256} height={26} borderRadius={6}/>
          <SkeletonUi width={108} height={26} borderRadius={6}/>
          <SkeletonUi width={72} height={26} borderRadius={6}/>
          <div className={light.rowControl}>
            <SkeletonUi width={108} height={36} borderRadius={8}/>
            <SkeletonUi width={26} height={26} borderRadius={6}/>
          </div>
        </div>
        <div className={light.gridRow}>
          <SkeletonUi width={208} height={26} borderRadius={6}/>
          <SkeletonUi width={172} height={26} borderRadius={6}/>
          <SkeletonUi width={108} height={26} borderRadius={6}/>
          <SkeletonUi width={124} height={26} borderRadius={6}/>
          <div className={light.rowControl}>
            <SkeletonUi width={108} height={36} borderRadius={8}/>
            <SkeletonUi width={26} height={26} borderRadius={6}/>
          </div>
        </div>
        <div className={light.gridRow}>
          <SkeletonUi width={190} height={26} borderRadius={6}/>
          <SkeletonUi width={172} height={26} borderRadius={6}/>
          <SkeletonUi width={132} height={26} borderRadius={6}/>
          <SkeletonUi width={90} height={26} borderRadius={6}/>
          <div className={light.rowControl}>
            <SkeletonUi width={108} height={36} borderRadius={8}/>
            <SkeletonUi width={26} height={26} borderRadius={6}/>
          </div>
        </div>
        <div className={light.gridRow}>
          <SkeletonUi width={134} height={26} borderRadius={6}/>
          <SkeletonUi width={256} height={26} borderRadius={6}/>
          <SkeletonUi width={120} height={26} borderRadius={6}/>
          <SkeletonUi width={108} height={26} borderRadius={6}/>
          <div className={light.rowControl}>
            <SkeletonUi width={108} height={36} borderRadius={8}/>
            <SkeletonUi width={26} height={26} borderRadius={6}/>
          </div>
        </div>
        <div className={light.gridRow}>
          <SkeletonUi width={156} height={26} borderRadius={6}/>
          <SkeletonUi width={256} height={26} borderRadius={6}/>
          <SkeletonUi width={108} height={26} borderRadius={6}/>
          <SkeletonUi width={72} height={26} borderRadius={6}/>
          <div className={light.rowControl}>
            <SkeletonUi width={108} height={36} borderRadius={8}/>
            <SkeletonUi width={26} height={26} borderRadius={6}/>
          </div>
        </div>
        <div className={light.gridRow}>
          <SkeletonUi width={208} height={26} borderRadius={6}/>
          <SkeletonUi width={172} height={26} borderRadius={6}/>
          <SkeletonUi width={108} height={26} borderRadius={6}/>
          <SkeletonUi width={124} height={26} borderRadius={6}/>
          <div className={light.rowControl}>
            <SkeletonUi width={108} height={36} borderRadius={8}/>
            <SkeletonUi width={26} height={26} borderRadius={6}/>
          </div>
        </div>
        <div className={light.gridRow}>
          <SkeletonUi width={190} height={26} borderRadius={6}/>
          <SkeletonUi width={172} height={26} borderRadius={6}/>
          <SkeletonUi width={132} height={26} borderRadius={6}/>
          <SkeletonUi width={90} height={26} borderRadius={6}/>
          <div className={light.rowControl}>
            <SkeletonUi width={108} height={36} borderRadius={8}/>
            <SkeletonUi width={26} height={26} borderRadius={6}/>
          </div>
        </div>
        <div className={light.gridRow}>
          <SkeletonUi width={208} height={26} borderRadius={6}/>
          <SkeletonUi width={172} height={26} borderRadius={6}/>
          <SkeletonUi width={108} height={26} borderRadius={6}/>
          <SkeletonUi width={124} height={26} borderRadius={6}/>
          <div className={light.rowControl}>
            <SkeletonUi width={108} height={36} borderRadius={8}/>
            <SkeletonUi width={26} height={26} borderRadius={6}/>
          </div>
        </div>
      </div>
      <div className={light.usersPagination}>
        <SkeletonUi width={28} height={28} borderRadius={4}/>
        <SkeletonUi width={28} height={28} borderRadius={4}/>
        <SkeletonUi width={28} height={28} borderRadius={4}/>
        <SkeletonUi width={28} height={28} borderRadius={4}/>
      </div>
    </div>
  );
};

export default UsersTableSkeleton;
