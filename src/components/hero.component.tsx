import { HeroButtonList } from "./hero-button-list.component";
import "./hero.component.sass";

export const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__left">
        <div className="hero__title">Надежный помощник в лечении варикоза</div>
        <HeroButtonList />
      </div>
    </div>
  );
};
