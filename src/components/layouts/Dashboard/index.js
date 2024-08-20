import graphicImage from "../../../assets/img/graphic-image.png"
import style from "./dashboard.module.scss";

const Dashboard = () => {
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
          <div className={style.blockText__button}></div>
        </div>
        <img className={style.image} src={graphicImage} alt="graphic" />
      </div>
    </section>
  );
};

export default Dashboard;
