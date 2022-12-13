import { HeroButtonList } from "./hero-button-list.component";
import iHeroBackground from "../assets/hero-background.svg";
import { Switcher } from "./switcher.component";
import "./hero.component.sass";

export const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__left">
        <div className="hero__title">Надежный помощник в лечении варикоза</div>
        <HeroButtonList />
      </div>
      <div className="hero__right">
        <Switcher />
      </div>
      {/* <img src={iHeroBackground} alt="" className="hero__background" /> */}
    </div>
  );
};
