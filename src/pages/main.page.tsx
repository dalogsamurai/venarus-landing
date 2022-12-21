import { Hero } from "../components/hero.component";
import { Navigation } from "../components/navigation.component";
import iHeroBackground from "../assets/hero-background.svg";
import { Disclaimer } from "../components/disclaimer.component";
import { useState } from "react";
import { Running } from "../components/running.component";
import { AdvantageList } from "../components/advantage-list.component";
import { Block } from "../components/block.component";
import { AboutList } from "../components/about-list.component";
import { Swiper } from "../components/swiper.component";
import { Helpful } from "../components/helpful.component";
import { Buy } from "../components/buy.component";
import "./main.page.sass";

export const MainPage = () => {
  const [disclaimerVisible, setDisclaimerVisible] = useState(true);

  return (
    <div className="shadow">
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
        <Block
          title="О препарате"
          description="Венарус показан для терапии симптомов хронических заболеваний&nbsp;вен (устранения и&nbsp;облегчения симптомов)."
          extra="Подробнее >"
          children={<AboutList />}
        />
        <Block
          title="Мнение специалистов"
          description="Фармакотерапия — неотъемлемый компонент современного лечения хронического заболевания вен."
          children={<Swiper />}
        />
        <Block title="Полезная информация" children={<Helpful />} />
        <Block
          title="Где купить"
          description="Ветонизирующее средство ВЕНАРУС вы можете приобрести в аптеках вашего города"
          children={<Buy />}
        />
      </div>
      <img src={iHeroBackground} alt="" className="background" />
    </div>
  );
};
