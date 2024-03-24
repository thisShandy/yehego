import MainLayout from "~/common/ui/layouts/main-layout";
import ContainerLayout from "~/common/ui/layouts/container-layout";
import SkeletonUi from "~/common/ui/kit/skeleton-ui";

import light from "./styles/light.module.scss";

const Skeleton = () => {
  return (
    <MainLayout>
      <ContainerLayout>
        <div className={light.skeletonHeader}>
          <div className={light.headerContent}>
            <SkeletonUi width={320} height={40} />
            <SkeletonUi width={240} height={20} borderRadius={6} />
          </div>
          <div className={light.headerButton}>
            <SkeletonUi width="100%" height={56} />
          </div>
        </div>
        <div className={light.skeletonContent}>
          <div className={light.contentItem}>
            <SkeletonUi width={110} height={24} />
            <div className={light.itemData}>
              <SkeletonUi width={132} height={16} borderRadius={6} />
              <SkeletonUi width={164} height={16} borderRadius={6} />
            </div>
            <div className={light.itemData}>
              <SkeletonUi width={128} height={16} borderRadius={6} />
              <SkeletonUi width={172} height={16} borderRadius={6} />
            </div>
            <div className={light.itemData}>
              <SkeletonUi width={96} height={16} borderRadius={6} />
              <SkeletonUi width={132} height={16} borderRadius={6} />
            </div>
            <div className={light.itemData}>
              <SkeletonUi width={76} height={16} borderRadius={6} />
              <SkeletonUi width={108} height={16} borderRadius={6} />
            </div>
          </div>
          <div className={light.contentItem}>
            <SkeletonUi width={132} height={24} />
            <div className={light.itemData}>
              <SkeletonUi width={108} height={16} borderRadius={6} />
              <SkeletonUi width={72} height={16} borderRadius={6} />
            </div>
            <div className={light.itemData}>
              <SkeletonUi width={132} height={16} borderRadius={6} />
              <SkeletonUi width={140} height={16} borderRadius={6} />
            </div>
            <div className={light.itemData}>
              <SkeletonUi width={100} height={16} borderRadius={6} />
              <SkeletonUi width={90} height={16} borderRadius={6} />
            </div>
            <div className={light.itemData}>
              <SkeletonUi width={142} height={16} borderRadius={6} />
              <SkeletonUi width={108} height={16} borderRadius={6} />
            </div>
          </div>
          <div className={light.contentItem}>
            <SkeletonUi width={110} height={24} />
            <div className={light.itemData}>
              <SkeletonUi width={142} height={16} borderRadius={6} />
              <SkeletonUi width={72} height={16} borderRadius={6} />
            </div>
            <div className={light.itemData}>
              <SkeletonUi width={136} height={16} borderRadius={6} />
              <SkeletonUi width={80} height={16} borderRadius={6} />
            </div>
            <div className={light.itemData}>
              <SkeletonUi width={92} height={16} borderRadius={6} />
              <SkeletonUi width={128} height={16} borderRadius={6} />
            </div>
          </div>
        </div>
        <div className={light.skeletonAddition}>
          <div className={light.additionItem}>
            <div className={light.itemHeader}>
              <SkeletonUi width={204} height={32} borderRadius={6}/>
              <SkeletonUi width={40} height={40} borderRadius={6}/>
            </div>
            <div className={light.itemContent}>
              <SkeletonUi width={150} height={18} borderRadius={6}/>
              <div className={light.contentControl}>
                <SkeletonUi width={140} height={16} borderRadius={6}/>
                <SkeletonUi width={20} height={20} borderRadius={6}/>
              </div>
            </div>
          </div>
          <div className={`${light.additionItem} ${light.second}`}>
            <div className={light.itemHeader}>
              <SkeletonUi width={204} height={32} borderRadius={6}/>
              <SkeletonUi width={40} height={40} borderRadius={6}/>
            </div>
            <div className={light.itemContent}>
              <SkeletonUi width={150} height={18} borderRadius={6}/>
              <div className={light.contentControl}>
                <SkeletonUi width={140} height={16} borderRadius={6}/>
                <SkeletonUi width={20} height={20} borderRadius={6}/>
              </div>
            </div>
          </div>
        </div>
      </ContainerLayout>
    </MainLayout>
  );
};

export default Skeleton;
