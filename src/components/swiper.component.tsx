import { useEffect, useState } from "react";
import iVideoPreview1 from "../assets/video-preview-1.svg";
import iVideoPreview2 from "../assets/video-preview-2.png";
import iVideoPreview3 from "../assets/video-preview-3.jpg";
import cn from "classnames";
import "./swiper.component.sass";

export const Swiper = () => {
  let items = [iVideoPreview1, iVideoPreview2, iVideoPreview3];
  const [active, setActive] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (!isClicked) {
      timer = setTimeout(() => setActive(active === 2 ? 0 : active + 1), 2000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [active]);

  return (
    <div className="swiper">
      <img src={items[active]} alt="" className="swiper__image" />
      <div className="swiper__buttons">
        <div
          className={cn("swiper__button", { active: active === 0 })}
          onClick={() => {
            setActive(0);
            setIsClicked(true);
          }}
        />
        <div
          className={cn("swiper__button", { active: active === 1 })}
          onClick={() => {
            setActive(1);
            setIsClicked(true);
          }}
        />
        <div
          className={cn("swiper__button", { active: active === 2 })}
          onClick={() => {
            setActive(2);
            setIsClicked(true);
          }}
        />
      </div>
    </div>
  );
};
