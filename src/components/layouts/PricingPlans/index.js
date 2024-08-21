import CardInSlide from "../../common/CardInSlide";
import style from "./pricingPlans.module.scss";

const PricingPlans = () => {
  return (
    <section className={style.pricingPlans}>
      <h2 className={style.pricingPlans__title}>Pricing Plans</h2>
      <p className={style.pricingPlans__subtitle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi
        aliquet volutpat pellentesque volutpat est.{" "}
      </p>
      <div className={style.pricingPlans__sliderBlock}>
        <CardInSlide isActive={false} title="111111" subtitle="wbswr" price={55} />
      </div>
    </section>
  );
};

export default PricingPlans;
