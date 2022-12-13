import { Hero } from "../components/hero.component";
import { Navigation } from "../components/navigation.component";
import iHeroBackground from "../assets/hero-background.svg";
import "./main.page.sass";
import { Disclaimer } from "../components/disclaimer.component";

export const MainPage = () => {
  return (
    <>
      <div className="main-page layout">
        <Navigation />
        <Hero />
      </div>
      <div className="main-page">
        <Disclaimer />
      </div>
      <img src={iHeroBackground} alt="" className="background" />
    </>
  );
};
