import { Link } from "react-router-dom";
import { HeaderLogo } from "../../../assets/svg/mainLogos";
import { dataItems } from "../../../constants/dataItems";
import style from "./header.module.scss";
import Button from "../Button/Button";


const Header = () => {
  return <header className={style.header}>
    <div className={style.wrapper}>
      <Link to="/" className={style.header__logo}><HeaderLogo /></Link>
      <ul className={style.header__items}>
        {dataItems.map((item, index) => {
          return (
            <Link className={style.item} key={index} to={item.link}>{item.item}</Link>
          )
        })}
      </ul>
      <div className={style.header__button}><Button isPing={false} text="Sign UP" /></div>
    </div>
  </header>;
};

export default Header;
