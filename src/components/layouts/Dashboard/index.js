import { useEffect, useState } from "react";
import graphicImage from "../../../assets/img/graphic-image.png"
import graphicImageMobile from "../../../assets/img/graphic-image-mobile.png"
import Button from "../../common/Button/Button";
import style from "./dashboard.module.scss";

const Dashboard = () => {
  const [image, setImage] = useState(graphicImage);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1060) {
        setImage(graphicImageMobile);
      } else {
        setImage(graphicImage);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [image]);
  return (
    <section className={style.dashboard}>
      <div className={style.wrapper}>
        <div className={style.blockText}>
          <h1 className={style.blockText__title}>Monitor your business on real-time dashboard</h1>
          <p className={style.blockText__subtitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
            nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae
            nibh nunc mattis imperdiet sed nullam.{" "}
          </p>
          <div className={style.blockText__button}><Button isPing={true} text="Try for free" /></div>
        </div>
        <img className={style.image} src={image} alt="graphic" />
      </div>
    </section>
  );
};

export default Dashboard;
