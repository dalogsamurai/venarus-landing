import { FC } from "react";
import "./button.component.sass";

type Props = {
  text: string;
};
export const Button: FC<Props> = ({ text }) => {
  return <div className="button">{text}</div>;
};
