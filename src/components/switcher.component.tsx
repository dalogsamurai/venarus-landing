import { useState } from "react";
import iVenarus1 from "../assets/venarus-1.svg";
import iVenarus2 from "../assets/venarus-2.svg";
import iVenarus3 from "../assets/venarus-3.svg";
import iArrow from "../assets/arrow.svg";
import cn from "classnames";
import "./switcher.component.sass";

export const Switcher = () => {
  const items = [iVenarus1, iVenarus2, iVenarus3];
  const [selected, setSelected] = useState(1);

  return (
    <div className="switcher">
      <div className="switcher__content">
        {items.map((item, i) => (
          <img
            src={item}
            alt=""
            className={cn("switcher__item", { _active: selected === i })}
          />
        ))}
      </div>
      <div className="switcher__buttons">
        <img
          className="switcher__arrow"
          onClick={() => {
            if (selected !== 0) {
              setSelected(selected - 1);
            }
          }}
          src={iArrow}
        />
        <img
          className="switcher__arrow right"
          onClick={() => {
            if (selected !== items.length - 1) {
              setSelected(selected + 1);
            }
          }}
          src={iArrow}
        />
      </div>
    </div>
  );
};
