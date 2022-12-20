import { FC } from "react";
import "./helpful-block.component.sass";

type Props = {
  text: string;
  imgClass:string;
  image?: any;
};

export const HelpfulBlock: FC<Props> = ({ text,imgClass,image, }) => {
  return (
    <div className="helpful-block">
      <div className="helpful-block__text">{text}</div>
      {image && <img src={image} alt="" className={`helpful-block__image ${imgClass}`} />}
    </div>
  );
};
