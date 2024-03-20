import type { FC } from "react";

import light from "./styles/light.module.scss";
import arrow_dropdown from "~icons/arrow/arrow_down.svg";

interface IBackUi {
  handleClick: () => void;
}

const BackUi: FC<IBackUi> = ({
  handleClick
}) => {
  return (
    <button
      type="button"
      onClick={handleClick}
      className={light.backContainer}
    >
      <img
        className={light.backImage}
        src={arrow_dropdown}
        alt="arrow_dropdown"
      />
      <span className={light.backTitle}>
        Back
      </span>
    </button>
  );
};

export default BackUi;
