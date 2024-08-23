import CardInSlide from "../../common/CardInSlide";
import { useState } from "react";
import { dataISlides } from "./constants/dataISlides";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import style from "./pricingPlans.module.scss";

const PricingPlans = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(1);

  const handleSlideChange = (swiper) => {
    setActiveSlideIndex(swiper.realIndex);
  };

  return (
    <section className={style.pricingPlans}>
      <h2 className={style.pricingPlans__title}>Pricing Plans</h2>
      <p className={style.pricingPlans__subtitle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi
        aliquet volutpat pellentesque volutpat est.{" "}
      </p>
      <div className={style.pricingPlans__sliderBlock}>
        <Swiper
          className={style.mySwiper}
          centeredSlides={true}
          loop={true}
          onSlideChange={handleSlideChange}
          initialSlide={1}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 5,
            },
            768: {
              slidesPerView: 2.5,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
        >
          {dataISlides.map((slide, index) => {
            const isActive = index === activeSlideIndex;
            return (
              <SwiperSlide key={index} className={style.mySwiperSlide}>
                <CardInSlide
                  isActive={isActive}
                  title={slide.title}
                  subtitle={slide.subtitle}
                  price={slide.price}
                  alertText={slide.alertText}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default PricingPlans;
