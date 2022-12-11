import { Menu } from "./menu.component";
import iLogo from "../assets/logo.svg";
import "./navigation.component.sass";

export const Navigation = () => {
  return (
    <div className="navigation">
      <img src={iLogo} className="navigation__logo" />
      <div className="navigation__right">
        <div className="navigation__btn">Где купить</div>
        <Menu />
      </div>
    </div>
  );
};
