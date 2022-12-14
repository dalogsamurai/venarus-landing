import { useEffect, useState } from "react";
import iVideoPreview1 from "../assets/video-preview-1.svg";
import iVideoPreview2 from "../assets/video-preview-2.png";
import iVideoPreview3 from "../assets/video-preview-3.jpg";
import cn from "classnames";
import "./swiper.component.sass";

export const Swiper = () => {
  let items = [iVideoPreview1, iVideoPreview2, iVideoPreview3];
  const [active, setActive] = useState(0);

  const timeout = async (time: number) => {
    const delay = (ms: number) =>
      new Promise((resolve) => setTimeout(resolve, ms));
    await delay(time);
  };

  //   useEffect(() => {
  //     timeout(2000);
  //     setActive(active + 1);
  //   }, [active]);

  return (
    <div className="swiper">
      <img src={items[active]} alt="" className="swiper__image" />
      <div className="swiper__buttons">
        <div
          className={cn("swiper__button", { active: active === 0 })}
          onClick={() => setActive(0)}
        />
        <div
          className={cn("swiper__button", { active: active === 1 })}
          onClick={() => setActive(1)}
        />
        <div
          className={cn("swiper__button", { active: active === 2 })}
          onClick={() => setActive(2)}
        />
      </div>
    </div>
  );
};
