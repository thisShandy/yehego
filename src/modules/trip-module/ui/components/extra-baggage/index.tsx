import type { FC } from "react";
import type { IUser } from "~/common/lib/types/user/user.type.ts";
import type { IAirBag } from "~/modules/trip-module/lib/types/air-bag.type.ts";

import light from "./styles/light.module.scss";
import { useOrder } from "~/modules/trip-module/model/hooks/useOrder.ts";
import { useRecoilValue } from "recoil";
import { orderState } from "~/modules/trip-module/model/recoil/order.ts";

interface IExtraBaggage {
  user: IUser;
  active: string;
  bags: {
    options: IAirBag[];
    selected: string;
  };
  partIndex: number;
}

const ExtraBaggage: FC<IExtraBaggage> = ({ user, active, bags, partIndex }) => {
  const order = useRecoilValue(orderState);
  const { handleBaggageSelect } = useOrder();

  return (
    <div className={light.extraContainer}>
      <span className={light.extraTitle}>{`${user.firstname} ${user.lastname}:`}</span>
      <div className={light.extraContent}>
        {bags.options.map((option) => (
          <button
            key={option.uuid}
            type="button"
            className={`${light.contentBaggage} ${active === option.uuid && light.active}`}
            onClick={() =>
              handleBaggageSelect(
                option.uuid,
                partIndex,
                order.findIndex((trav) => trav.traveler_uuid === user.uuid)
              )
            }
          >
            <span className={light.baggageTitle}>{option.name}</span>
            <span className={light.baggagePrice}>{`${option.price_users_total} ${option.price_users_currency}`}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ExtraBaggage;
