import iVenarus3 from "../assets/venarus-3.svg";
import iVenarus2 from "../assets/venarus-2.svg";
import "./buy.component.sass";

export const Buy = () => {
  return (
    <div className="buy">
      <div className="buy__top">
        <img src={iVenarus3} alt="" className="buy__img" />
        <img src={iVenarus2} alt="" className="buy__img" />
      </div>
      <div className="buy__bottom"></div>
    </div>
  );
};
