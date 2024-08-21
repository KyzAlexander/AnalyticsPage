import { Link } from "react-router-dom";
import { FooterLogo } from "../../../assets/svg/mainLogos";
import { dataItems } from "../../../constants/dataItems";
import style from "./footer.module.scss";
import { dataIcons } from "./constants/dataIcons";


const Footer = () => {
  return <footer className={style.footer}>

    <Link to="/" className={style.footer__logo}><FooterLogo /></Link>
    <ul className={style.footer__items}>
      {dataItems.map((item, index) => {
        return (
          <Link className={style.item} key={index} to={item.link}>{item.item}</Link>
        )
      })}
    </ul>
    <div className={style.footer__messengersBlock}>
      {dataIcons.map((icon, index) => {
        return (
          <Link to={icon.link} className={style.icon} key={index} target="_blank">{icon.icon}</Link>
        )
      })}
    </div>

  </footer>;
};

export default Footer;
