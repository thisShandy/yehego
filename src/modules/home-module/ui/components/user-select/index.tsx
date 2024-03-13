import type { FC } from "react";

import light from "./styles/light.module.scss";

interface IUserSelect {
  trip?: boolean;
  label: string;
}

const UserSelect: FC<IUserSelect> = ({ trip, label }) => {
  return (
    <div className={`${light.userContainer} ${trip && light.trip}`}>
      <span className={light.userLabel}>{label}</span>
      <div className={light.userContent}>
        <button type="button" className={light.contentUser}>
          <span className={light.userTitle}>GP</span>
          <span className={light.userRemove}>+</span>
        </button>
        <button type="button" className={light.contentAdd}>
          <span className={light.addTitle}>+</span>
        </button>
      </div>
    </div>
  );
};

export default UserSelect;
