import type { FC } from "react";

import light from "./styles/light.module.scss";

interface ILoyalty {
  title: string;
  description: string;
  number: string;
  handleDelete: () => void;
}

const Loyalty: FC<ILoyalty> = ({
  title, description, number, handleDelete
}) => {
  return (
    <div className={light.loyaltyContainer}>
      <div className={light.loyaltyInfo}>
        <span className={light.infoTitle}>
          {title}
        </span>
        <span className={light.infoDescription}>
          {description}
        </span>
      </div>
      <div className={light.loyaltyControl}>
        <span className={light.controlNumber}>
          {number}
        </span>
        <button
          type="button"
          className={light.controlButton}
          onClick={handleDelete}
        >
          <span className={light.buttonTitle}>
            +
          </span>
        </button>
      </div>
    </div>
  );
};

export default Loyalty;
