import { Hero } from "../components/hero.component";
import { Navigation } from "../components/navigation.component";
import iHeroBackground from "../assets/hero-background.svg";
import { Disclaimer } from "../components/disclaimer.component";
import { useState } from "react";
import { Running } from "../components/running.component";
import { AdvantageList } from "../components/advantage-list.component";
import "./main.page.sass";

export const MainPage = () => {
  const [disclaimerVisible, setDisclaimerVisible] = useState(true);

  return (
    <>
      <div className="main-page layout">
        <Navigation />
        <Hero />
      </div>
      <div className="main-page">
        {disclaimerVisible && (
          <Disclaimer close={() => setDisclaimerVisible(false)} />
        )}
        <Running />
      </div>
      <div className="main-page layout">
        <AdvantageList />
      </div>
      <img src={iHeroBackground} alt="" className="background" />
    </>
  );
};
