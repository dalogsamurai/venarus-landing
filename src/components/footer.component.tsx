import iVkLogo from "../assets/vk-logo.svg";
import iOkLogo from "../assets/ok-logo.svg";
import iPharmStudioLogo from "../assets/pharm-studio-logo.svg";
import "./footer.component.sass";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__column">
        <div className="footer__item underline">
          Сообщить о нежелательном явлении
        </div>
      </div>
      <div className="footer__column">
        <div className="footer__item underline">
          Условия пользования сайтом и файлами Cookies
        </div>
        <div className="footer__item text">
          г. Москва, ул. Шаболовка, д. 31, стр. 11 Телефон: +7 (495) 555-55-55
        </div>
      </div>
      <div className="footer__column">
        <div className="footer__item">
          <img src={iVkLogo} alt="" className="footer__social-logo" />
          <img src={iOkLogo} alt="" className="footer__social-logo" />
        </div>
        <div className="footer__item">
          <img
            src={iPharmStudioLogo}
            alt=""
            className="footer__developer-logo"
          />
          <div className="text">Создание сайтов Фарм-студия №1 в Рунете</div>
        </div>
      </div>
    </div>
  );
};
