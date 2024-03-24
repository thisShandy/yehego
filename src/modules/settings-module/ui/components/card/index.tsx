import type { FC } from "react";

import light from "./styles/light.module.scss";

interface ICard {
  id: string;
  number: string;
  holder: string;
  handleDelete: (cardId: string) => void;
}

const Card: FC<ICard> = ({
  id, number, holder, handleDelete
}) => {
  return (
    <div className={light.cardContainer}>
      <div className={light.cardNumber}>
        <span className={light.numberShow}>
          {number.slice(0, 4)}
        </span>
        <span className={light.numberHide}>
          ****
        </span>
        <span className={light.numberHide}>
          ****
        </span>
        <span className={light.numberShow}>
          {number.slice(12, 16)}
        </span>
      </div>
      <div className={light.cardControl}>
        <span className={light.controlHolder}>
          {holder}
        </span>
        <button
          type="button"
          className={light.controlButton}
          onClick={() => handleDelete(id)}
        >
          <span
            className={light.buttonTitle}
          >
            +
          </span>
        </button>
      </div>
    </div>
  );
};

export default Card;
