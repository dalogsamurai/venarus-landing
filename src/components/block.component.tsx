import { FC } from "react";
import "./block.component.sass";

type Props = {
  title: string;
  description?: string;
  extra?: string;
  children: any;
};

export const Block: FC<Props> = ({ title, description, extra, children }) => {
  return (
    <div className="block">
      <div className="block__text">
        <div className="block__title">{title}</div>
        <div className="block__description">{description}</div>
        {extra && <div className="block__more">{extra}</div>}
      </div>
      <div className="block__content">{children}</div>
    </div>
  );
};
