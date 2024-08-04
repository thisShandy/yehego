import type { FC } from "react";

import light from "./styles/light.module.scss";

interface IGroup {
  id: string;
  name: string;
  handleDelete: (id: string) => void;
}

const Group: FC<IGroup> = ({ id, name, handleDelete }) => {
  return (
    <div className={light.groupContainer}>
      <span className={light.groupName}>{name}</span>
      <button type="button" className={light.groupButton} onClick={() => handleDelete(id)}>
        <span className={light.buttonTitle}>+</span>
      </button>
    </div>
  );
};

export default Group;
