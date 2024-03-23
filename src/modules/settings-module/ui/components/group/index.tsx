import type { FC } from "react";

import light from "./styles/light.module.scss";

interface IGroup {
  name: string;
}

const Group: FC<IGroup> = ({
  name
}) => {
  return (
    <div className={light.groupContainer}>
      <span className={light.groupName}>
        {name}
      </span>
      <button
        type="button"
        className={light.groupButton}
      >
        <span className={light.buttonTitle}>
          +
        </span>
      </button>
    </div>
  );
};

export default Group;
