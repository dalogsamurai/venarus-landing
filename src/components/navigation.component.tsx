import { Menu } from "./menu.component";
import "./navigation.component.sass";

export const Navigation = () => {
  return (
    <div className="navigation">
      <div className="navigation__title">ВЕНАРУС</div>
      <div className="navigation__right">
        <div className="navigation__btn">Где купить</div>
        <Menu />
      </div>
    </div>
  );
};
