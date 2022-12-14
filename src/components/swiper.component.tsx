import { useState } from "react";
import iVideoPreview1 from "../assets/video-preview-1.svg";
import iVideoPreview2 from "../assets/video-preview-2.png";
import iVideoPreview3 from "../assets/video-preview-3.jpg";
import "./swiper.component.sass";

export const Swiper = () => {
  let items = [iVideoPreview1, iVideoPreview2, iVideoPreview3];
  const [active, setActive] = useState(0);

  return (
    <div className="swiper">
      <img src={items[active]} alt="" className="swiper__image" />
      <div className="swiper__buttons">
        <div className="swiper__button" onClick={() => setActive(0)} />
        <div className="swiper__button" onClick={() => setActive(1)} />
        <div className="swiper__button" onClick={() => setActive(2)} />
      </div>
    </div>
  );
};
