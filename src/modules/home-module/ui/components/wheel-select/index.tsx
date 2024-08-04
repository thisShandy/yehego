// @ts-nocheck
import type { FC } from "react";

import { useState, useEffect, useRef } from "react";
import { useKeenSlider } from "keen-slider/react";

import light from "./styles/light.module.scss";

interface IWheelSelect {
  data: string[];
  perspective: string;
  handleUpdate: (value: string) => void;
}

const WheelSelect: FC<IWheelSelect> = ({ data, perspective, handleUpdate }) => {
  const wheelSize = 16;
  const slidesPerView = 9;
  const slides = data.length;
  const slideDegree = 360 / wheelSize;

  const [sliderState, setSliderState] = useState(null);
  const size = useRef(0);

  const options = useRef({
    slides: {
      number: slides,
      origin: "center",
      perView: slidesPerView
    },

    vertical: true,

    initial: 0,
    loop: true,
    dragSpeed: (val) => {
      const height = size.current;
      return val * (height / ((height / 2) * Math.tan(slideDegree * (Math.PI / 180))) / slidesPerView);
    },
    created: (s) => {
      size.current = s.size;
    },
    updated: (s) => {
      console.log("updated", s);
      size.current = s.size;
    },
    detailsChanged: (s) => {
      const activeIndex = s.track.details.slides.findIndex((el) => el.abs === s.track.details.abs).toString();
      if (activeIndex === "0") {
        handleUpdate(activeIndex);
      } else {
        handleUpdate(data[activeIndex]);
      }
      setSliderState(s.track.details);
    },
    rubberband: true,
    mode: "free-snap"
  });

  const [sliderRef, slider] = useKeenSlider(options.current);

  const [radius, setRadius] = useState(0);

  useEffect(() => {
    if (slider.current) setRadius(slider.current.size / 2);
  }, [slider]);

  return (
    <div
      className={`${light.wheelContainer} keen-slider ${perspective === "right" && light.right} ${
        perspective === "left" && light.left
      }`}
      ref={sliderRef}
    >
      <div
        className={light.wheelShadow}
        style={{
          transform: `translateZ(${radius}px)`,
          WebkitTransform: `translateZ(${radius}px)`
        }}
      />
      <div className={light.wheelContent}>
        <div className={light.contentSlides} style={{ width: "100%" }}>
          {data.map((value, index) => {
            const offset = 1 / 2 - 1 / slidesPerView / 2;

            const distance = sliderState ? (sliderState.slides[index].distance - offset) * slidesPerView : 0;

            const rotate = Math.abs(distance) > wheelSize / 2 ? 180 : distance * (360 / wheelSize) * -1;

            const style = {
              transform: `rotateX(${rotate}deg) translateZ(${radius}px)`,
              WebkitTransform: `rotateX(${rotate}deg) translateZ(${radius}px)`
            };

            const active = rotate.toFixed(0).replace("-", "") === "0";

            return (
              <div key={index} className={`${light.slidesItem} ${active && light.active}`} style={style}>
                <span className={light.itemTitle}>{value}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div
        className={`${light.wheelShadow} ${light.bottom}`}
        style={{
          transform: `translateZ(${radius}px)`,
          WebkitTransform: `translateZ(${radius}px)`
        }}
      />
    </div>
  );
};

export default WheelSelect;
