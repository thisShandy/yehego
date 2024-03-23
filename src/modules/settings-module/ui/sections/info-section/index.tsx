import type { FC } from "react";

import light from "./styles/light.module.scss";

interface IInfoSection {
  name: string;
  data: { name: string, value: string }[];
}

const InfoSection: FC<IInfoSection> = ({
  name, data
}) => {
  return (
    <div className={light.infoContainer}>
      <span className={light.infoTitle}>
        {name}
      </span>
      <div className={light.infoContent}>
        {data.map(item => (
          <div className={light.contentItem}>
            <span className={light.itemTitle}>
              {item.name}
            </span>
            <span className={light.itemValue}>
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoSection;
