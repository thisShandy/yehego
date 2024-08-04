import type { FC } from "react";

import light from "./styles/light.module.scss";

interface IUserSelect {
  trip?: boolean;
  label: string;
  passengers: {
    uuid: string;
    email: string;
    firstname: string;
    lastname: string;
    phone: string;
    status: string;
    date_of_birth: string;
  }[];
  handleActive: () => void;
  handleAddOrRemove: (pass: {
    uuid: string;
    email: string;
    firstname: string;
    lastname: string;
    phone: string;
    status: string;
    date_of_birth: string;
  }) => string | undefined;
}

const UserSelect: FC<IUserSelect> = ({ trip, label, passengers, handleActive, handleAddOrRemove }) => {
  return (
    <div className={`${light.userContainer} ${trip && light.trip}`}>
      <span className={light.userLabel}>{label}</span>
      <div className={light.userContent}>
        <button type="button" className={light.contentAdd} onClick={handleActive}>
          <span className={light.addTitle}>+</span>
        </button>
        {passengers.map((pass) => (
          <button key={pass.uuid} type="button" className={light.contentUser} onClick={() => handleAddOrRemove(pass)}>
            <span className={light.userTitle}>
              {pass.firstname} {pass.lastname}
            </span>
            <span className={light.userRemove}>+</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default UserSelect;
