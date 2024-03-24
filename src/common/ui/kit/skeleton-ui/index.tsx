import type { FC } from "react";

import light from "./styles/light.module.scss";

interface ISkeletonUi {
  width: number | string;
  height: number;
  borderRadius?: number;
}

const SkeletonUi: FC<ISkeletonUi> = ({
  width, height, borderRadius
}) => {
  return (
    <div
      className={light.skeletonContainer}
      style={{
        width,
        height,
        borderRadius: borderRadius ? `${borderRadius}px` : undefined
      }}
    />
  );
};

export default SkeletonUi;
