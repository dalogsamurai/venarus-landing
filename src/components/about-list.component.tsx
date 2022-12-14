import iAbout1 from "../assets/about-1.svg";
import iAbout2 from "../assets/about-2.svg";
import iAbout3 from "../assets/about-3.svg";
import { AboutItem } from "./about-item.component";
import "./about-list.component.sass";

export const AboutList = () => {
  return (
    <div className="about-list">
      <AboutItem image={iAbout1} text="Помогает предотвратить&nbsp;судороги" />
      <AboutItem
        image={iAbout2}
        text="Способствует снижению&nbsp;тяжести в ногах"
      />
      <AboutItem
        image={iAbout3}
        text="Способствует&nbsp;снижению болевых ощущений"
      />
    </div>
  );
};
