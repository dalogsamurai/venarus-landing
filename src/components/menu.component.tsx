import { useEffect, useState } from "react";
import iPurpleLine1 from "../assets/purple-line-1.svg";
import iPurpleLine2 from "../assets/purple-line-2.svg";
import iPurpleLine3 from "../assets/purple-line-3.svg";
import iPurpleLine4 from "../assets/purple-line-4.svg";
import iPurpleLine5 from "../assets/purple-line-5.svg";
import cn from "classnames";
import iMenuWave from "../assets/menu-wave.svg";
import "./menu.component.sass";

export const Menu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen((state) => !state);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      <div className={cn("menu", { _open: isOpen })}>
        <div className="menu__item">Где купить</div>
        <div className="menu__item">О препарате</div>
        <div className="menu__item">О варикозе</div>
        <div className="menu__item">Решение</div>
        <div className="menu__item">Специалистам</div>
        <img className="purple-line" src={iPurpleLine1} />
        <img className="purple-line" src={iPurpleLine2} />
        <img className="purple-line" src={iPurpleLine3} />
        <img className="purple-line" src={iPurpleLine4} />
        <img className="purple-line" src={iPurpleLine5} />
      </div>
      <div className="header__btn" onClick={toggleMenu}>
        <img
          src={iMenuWave}
          className={cn("header__btn-row", { _opened: isOpen })}
        />
        <img
          src={iMenuWave}
          className={cn("header__btn-row", { _opened: isOpen })}
        />
        <img
          src={iMenuWave}
          className={cn("header__btn-row", { _opened: isOpen })}
        />
      </div>
    </>
  );
};
