import type { FC, CSSProperties } from "react";

import light from "./styles/light.module.scss";

interface ISkeletonUi {
  width: number | string;
  height: number;
  borderRadius?: number;
  style?: CSSProperties;
}

const SkeletonUi: FC<ISkeletonUi> = ({ width, height, borderRadius, style }) => {
  return (
    <div
      className={light.skeletonContainer}
      style={{
        width,
        height,
        borderRadius: borderRadius ? `${borderRadius}px` : undefined,
        ...style
      }}
    />
  );
};

export default SkeletonUi;
