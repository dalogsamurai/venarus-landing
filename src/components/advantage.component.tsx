import { FC } from "react";
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
        {extra && <img src={extra} alt="" className="advantage__extra" />}
      </div>
    </div>
  );
};
