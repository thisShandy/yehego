import light from "./styles/light.module.scss";
import DropdownUi from "~/common/ui/kit/dropdown-ui";

const AmenitiesSection = () => {
  return (
    <div className={light.amenitiesContainer}>
      <span className={light.amenitiesTitle}>Select amenities</span>
      <span className={light.amenitiesWay}>Stockholm - Malmo</span>
      <div className={light.amenitiesInfo}>
        <DropdownUi
          name="Seat characteristic"
          value={"unspecified"}
          config={[
            {
              key: "unspecified",
              value: "Unspecified"
            },
            {
              key: "pets_allowed",
              value: "Pets allowed"
            },
            {
              key: "wheelchair_space",
              value: "Wheelchair space"
            }
          ]}
          handleChange={() => console.log()}
        />
        <DropdownUi
          name="Seat orientation"
          value={"unspecified"}
          config={[
            {
              key: "unspecified",
              value: "Unspecified"
            },
            {
              key: "window",
              value: "Window"
            },
            {
              key: "aisle",
              value: "Aisle"
            }
          ]}
          handleChange={() => console.log()}
        />
        <DropdownUi
          name="Seat reservation"
          value={"yes"}
          config={[
            {
              key: "yes",
              value: "Yes"
            },
            {
              key: "no",
              value: "No"
            }
          ]}
          handleChange={() => console.log()}
        />
      </div>
      <span className={light.amenitiesWay}>Malmo - Gothenburg</span>
      <div className={light.amenitiesInfo}>
        <DropdownUi
          name="Seat characteristic"
          value={"unspecified"}
          config={[
            {
              key: "unspecified",
              value: "Unspecified"
            },
            {
              key: "pets_allowed",
              value: "Pets allowed"
            },
            {
              key: "wheelchair_space",
              value: "Wheelchair space"
            }
          ]}
          handleChange={() => console.log()}
        />
        <DropdownUi
          name="Seat orientation"
          value={"unspecified"}
          config={[
            {
              key: "unspecified",
              value: "Unspecified"
            },
            {
              key: "window",
              value: "Window"
            },
            {
              key: "aisle",
              value: "Aisle"
            }
          ]}
          handleChange={() => console.log()}
        />
        <DropdownUi
          name="Seat reservation"
          value={"yes"}
          config={[
            {
              key: "yes",
              value: "Yes"
            },
            {
              key: "no",
              value: "No"
            }
          ]}
          handleChange={() => console.log()}
        />
      </div>
    </div>
  );
};

export default AmenitiesSection;
