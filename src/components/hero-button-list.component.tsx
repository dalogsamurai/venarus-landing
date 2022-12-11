import { HeroButton } from "./hero-button.component";
import iHeroPlayBtn from "../assets/hero-btn-play.svg";
import iHeroDownloadBtn from "../assets/hero-btn-download.svg";
import iHeroMapBtn from "../assets/hero-btn-map.svg";
import "./hero-button-list.component.sass";

export const HeroButtonList = () => {
  return (
    <div className="hero-button-list">
      <HeroButton image={iHeroPlayBtn} text="Схема приема" />
      <HeroButton image={iHeroDownloadBtn} text="Инструкция" />
      <HeroButton image={iHeroMapBtn} text="Где купить" />
    </div>
  );
};
