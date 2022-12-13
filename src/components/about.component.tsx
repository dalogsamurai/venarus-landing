import "./about.component.sass";

export const About = () => {
  return (
    <div className="about">
      <div className="about__text">
        <div className="about__title">О препарате</div>
        <div className="about__description">
          Венарус показан для терапии симптомов хронических заболеваний вен
          (устранения и облегчения симптомов).
        </div>
        <div className="about__more">Подробнее {">"}</div>
      </div>
    </div>
  );
};
