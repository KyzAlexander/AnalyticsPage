import RegistrationForm from "../../common/RegistrationForm";
import { dataFeatureBlocks } from "./constants/dataFeatureBlocks";
import style from "./mainFeatures.module.scss";

const MainFeatures = () => {
  return (
    <section className={style.mainFeatures}>
      <h2 className={style.title}>Main Features</h2>
      <p className={style.subtitle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi
        aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh
        nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus
        pulvinar sit amet. Id vel in nam malesuada.
      </p>
      <div className={style.featureBlocks}>
        {dataFeatureBlocks.map((block, index) => {
          return (
            <div className={style.featureBlock} key={index}>
              <div className={style.featureBlock__icon}>{block.icon}</div>
              <h5 className={style.featureBlock__title}>{block.title}</h5>
              <p className={style.featureBlock__subtitle}>{block.subtitle}</p>
            </div>
          );
        })}
      </div>
      <RegistrationForm />
    </section>
  );
};

export default MainFeatures;
