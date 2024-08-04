import type { FC, ChangeEvent } from "react";

import OutsideLayout from "~/common/ui/layouts/outside-layout";

import light from "./styles/light.module.scss";

interface IPassengerModal {
  active: boolean;
  handleActive: () => void;
  passengers: {
    uuid: string;
    email: string;
    firstname: string;
    lastname: string;
    phone: string;
    status: string;
    date_of_birth: string;
  }[];
  loading: boolean;
  error: boolean;
  passengersValue: string;
  passengersResults: {
    uuid: string;
    email: string;
    firstname: string;
    lastname: string;
    phone: string;
    status: string;
    date_of_birth: string;
  }[];
  handleUpdate: (e: ChangeEvent<HTMLInputElement>) => void;
  handleAddOrRemove: (pass: any) => string | void;
}

const PassengerModal: FC<IPassengerModal> = ({
  active,
  handleActive,
  passengers,
  loading,
  // error,
  passengersValue,
  passengersResults,
  handleUpdate,
  handleAddOrRemove
}) => {
  return (
    <>
      {active && (
        <div className={light.passengerWrapper}>
          <OutsideLayout active={active} setActive={handleActive}>
            <div className={light.passengerContainer}>
              <div className={light.passengerHeader}>
                <span className={light.headerTitle}>Passengers</span>
                <button type="button" className={light.headerClose} onClick={handleActive}>
                  <span className={light.closeIcon}>+</span>
                </button>
              </div>
              <div className={light.passengerSearch}>
                <input
                  value={passengersValue}
                  placeholder="Enter passenger name here"
                  className={light.searchField}
                  onChange={handleUpdate}
                />
              </div>
              <div className={`${light.passengerList} ${loading && light.loading}`}>
                {loading && <div className={light.lostLoader} />}
                {!loading &&
                  !passengersResults.length &&
                  passengers.map((pass) => (
                    <button
                      key={pass.uuid}
                      type="button"
                      className={light.listItem}
                      onClick={() => {
                        handleActive();
                        handleAddOrRemove(pass);
                      }}
                    >
                      <div className={light.itemInfo}>
                        <span className={light.infoTitle}>
                          {pass.firstname} {pass.lastname}
                        </span>
                        <span className={light.infoEmail}>{pass.email}</span>
                      </div>
                      <div className={light.itemRemove}>
                        <span className={light.removeIcon}>+</span>
                      </div>
                    </button>
                  ))}
                {!loading &&
                  !!passengersResults.length &&
                  passengersResults.map((pass) => (
                    <button
                      key={pass.uuid}
                      type="button"
                      className={light.listItem}
                      onClick={() => {
                        handleActive();
                        handleAddOrRemove(pass);
                      }}
                    >
                      <div className={light.itemInfo}>
                        <span className={light.infoTitle}>
                          {pass.firstname} {pass.lastname}
                        </span>
                        <span className={light.infoEmail}>{pass.email}</span>
                      </div>
                      {passengers.find((el) => el.uuid === pass.uuid) ? (
                        <div className={light.itemRemove}>
                          <span className={light.removeIcon}>+</span>
                        </div>
                      ) : (
                        <div className={light.itemAdd}>
                          <span className={light.removeIcon}>+</span>
                        </div>
                      )}
                    </button>
                  ))}
              </div>
            </div>
          </OutsideLayout>
        </div>
      )}
    </>
  );
};

export default PassengerModal;
