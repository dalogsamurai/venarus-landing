import { FC, useState } from "react";
import iClose from "../assets/close.svg";
import "./disclaimer.component.sass";

type Props = {
  close: () => void;
};

export const Disclaimer: FC<Props> = ({ close }) => {
  const [visible, setVisible] = useState(true);

  return (
    <div className="disclaimer">
      <div className="disclaimer__text">
        Имеются противопоказания, необходимо ознакомиться с инструкцией или
        получить консультацию специалиста
      </div>
      <img className="disclaimer__close" src={iClose} onClick={() => close()} />
    </div>
  );
};
