// @ts-nocheck
import type { FC } from "react";
import type { IUser } from "~/common/lib/types/user/user.type.ts";

import { useEffect } from "react";
import { useRecoilValue } from "recoil";

import { offerState } from "~/modules/trip-module/model/recoil/offer.ts";
import { orderState } from "~/modules/trip-module/model/recoil/order.ts";

import ExtraBaggage from "~/modules/trip-module/ui/components/extra-baggage";

import light from "./styles/light.module.scss";

interface IExtraBaggageSection {
  users: IUser[];
  partIndex: number;
}

const ExtraBaggageSection: FC<IExtraBaggageSection> = ({ users, partIndex }) => {
  const offer = useRecoilValue(offerState);
  const order = useRecoilValue(orderState);

  useEffect(() => {
    console.log("order", order);
  }, []);

  return (
    <div key={`users_${users.length}`} className={light.baggageContainer}>
      <span className={light.baggageTitle}>Select baggage</span>
      <div className={light.baggageInfo}>
        {users.map((user) => (
          <ExtraBaggage
            key={user.uuid}
            user={user}
            active={
              order?.find((traveler) => traveler.traveler_uuid === user.uuid).parts_info[partIndex]
                .chargeable_checked_bags
            }
            bags={
              offer?.travelers[0].parts_info[partIndex].travel_classes.classes.find(
                (airClass) => airClass.id === order[0].parts_info[partIndex].travel_classes
              )!.chargeable_checked_bags
            }
            partIndex={partIndex}
          />
        ))}
      </div>
    </div>
  );
};

export default ExtraBaggageSection;
