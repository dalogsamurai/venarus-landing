import { FC } from "react";
import "./about-item.component.sass";

type Props = {
  image: any;
  text: string;
};

export const AboutItem: FC<Props> = ({ image, text }) => {
  return (
    <div className="about-item">
      <img src={image} alt="" className="about__image" />
      <div className="about-item__text">{text}</div>
    </div>
  );
};
