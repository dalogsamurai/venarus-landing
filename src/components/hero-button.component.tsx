import { FC } from "react";
import "./hero-button.component.sass";

type Props = {
  text: string;
  image: any;
};

export const HeroButton: FC<Props> = ({ text, image }) => {
  return (
    <div className="hero-button">
      <div className="hero-button__text">{text}</div>
      <img src={image} alt="" className="hero-button__img" />
    </div>
  );
};
