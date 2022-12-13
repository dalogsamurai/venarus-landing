import { Hero } from "../components/hero.component";
import { Navigation } from "../components/navigation.component";
import iHeroBackground from "../assets/hero-background.svg";
import "./main.page.sass";
import { Disclaimer } from "../components/disclaimer.component";
import { useState } from "react";

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
      </div>
      <img src={iHeroBackground} alt="" className="background" />
    </>
  );
};
