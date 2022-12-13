import { FC } from "react";
import Tooltip from "@material-ui/core/Tooltip";
import "./advantage.component.sass";

type Props = {
  image: any;
  text: string;
  extra?: any;
};

export const Advantage: FC<Props> = ({ image, text, extra }) => {
  return (
    <div className="advantage">
      <img src={image} alt="" className="advantage__img" />
      <div className="advantage__text">
        {text}
        {extra && (
          <Tooltip title="sometext">
            <img
              data-tooltip="Всплывающая подсказка"
              src={extra}
              alt=""
              className="advantage__extra"
            />
          </Tooltip>
        )}
      </div>
    </div>
  );
};
