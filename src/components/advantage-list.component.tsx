import { Advantage } from "./advantage.component";
import iAdvantage1 from "../assets/advantage-1.svg";
import iAdvantage2 from "../assets/advantage-2.svg";
import iAdvantage3 from "../assets/advantage-3.svg";
import iAdvantageExtra from "../assets/advantage-extra.svg";
import "./advantage-list.component.sass";

export const AdvantageList = () => {
  return (
    <div className="advantage-list">
      <Advantage image={iAdvantage1} text="Доказанная  эффективность" />
      <Advantage image={iAdvantage2} text="Новая дозировка 100 мг + 900 мг" />
      <Advantage
        image={iAdvantage3}
        text="Удобный прием. Одна&nbsp;таблетка&nbsp;в&nbsp;сутки*"
        extra={iAdvantageExtra}
      />
    </div>
  );
};
