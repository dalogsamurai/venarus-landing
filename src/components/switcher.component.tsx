import { useState } from "react";
import iHeroBackground from "../assets/hero-background.svg";
import iArrow from "../assets/arrow.svg";
import "./switcher.component.sass";

export const Switcher = () => {
  const [selected, isSelected] = useState(0);

  return (
    <div className="switcher">
      <div className="switcher__content"></div>
      <div className="switcher__buttons">
        <img className="switcher__arrow" src={iArrow} />
        <img className="switcher__arrow right" src={iArrow} />
      </div>
    </div>
  );
};
