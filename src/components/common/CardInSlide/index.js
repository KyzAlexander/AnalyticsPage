import Button from "../Button/Button";
import style from "./cardInSlide.module.scss";

const CardInSlide = ({ isActive, title, subtitle, price, alertText }) => {
  return (
    <div
      className={`${style.cardInSlide} ${isActive ? style.activeCardInSlide : ""}`}
    >
      <h2
        className={`${style.cardInSlide__title} ${isActive ? style.activeTitle : ""}`}
      >
        {title}
      </h2>
      <p className={style.cardInSlide__subtitle}>{subtitle}</p>
      <h1
        className={`${style.cardInSlide__price} ${isActive ? style.activePrice : ""}`}
      >
        {price}
      </h1>
      <p className={style.cardInSlide__priceText}>per month</p>
      <div className={style.cardInSlide__button}>
        <Button
          isPing={isActive}
          text="Order"
          onClick={() => alert(alertText)}
        />
      </div>
    </div>
  );
};

export default CardInSlide;
