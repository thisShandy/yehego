// @ts-nocheck
import { useState, useEffect } from "react";
import Progress from "react-circle-progress-bar";

import light from "./style/light.module.scss";

const ClimateSection = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const value = document.querySelector("text");
    value.style.display = "none";

    setTimeout(() => {
      setValue(78);
    }, 50);
  }, []);

  return (
    <div className={light.climateContainer}>
      <Progress
        className={light.climateProgress}
        progress={value}
        strokeWidth={16}
        ballStrokeWidth={16}
        hideValue={false}
        background="#ffffff"
        transitionDuration={0.5}
        gradient={[
          { stop: 0, color: "#15a848" },
          { stop: 1, color: "#FFD464" }
        ]}
      />
      <div className={light.climateContent}>
        <span className={light.contentTitle}>My CO₂ goal</span>
        <span className={light.contentValue}>202/500kg</span>
        <span className={light.contentInfo}>298kg left to max</span>
      </div>
    </div>
  );
};

export default ClimateSection;
