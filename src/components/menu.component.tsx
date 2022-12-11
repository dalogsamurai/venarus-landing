import { useEffect, useState } from "react";
import cn from "classnames";
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
      </div>
      <div className="header__btn" onClick={toggleMenu}>
        <div className={cn("header__btn-row", { _opened: isOpen })} />
        <div className={cn("header__btn-row", { _opened: isOpen })} />
        <div className={cn("header__btn-row", { _opened: isOpen })} />
      </div>
    </>
  );
};
