import iHelpful1 from "../assets/helpful-1.jpg";
import iHelpful2 from "../assets/helpful-2.jpeg";
import iHelpful3 from "../assets/helpful-3.jpg";
import { HelpfulBlock } from "./helpful-block.component";
import "./helpful.component.sass";

export const Helpful = () => {
  return (
    <div className="helpful">
      <HelpfulBlock
        image={iHelpful1}
        text="Профилак-тические упражнения"
        imgClass="first"
      />
      <HelpfulBlock
        image={iHelpful2}
        text="Диагностика и&nbsp;способы лечения"
        imgClass="second"
      />
      <HelpfulBlock
        image={iHelpful3}
        text="Планы по питанию "
        imgClass="third"
      />
      {/* TODO */}
      {/* <HelpfulBlock text="Факты о варикозе" imgClass="fourth" /> */}
    </div>
  );
};
