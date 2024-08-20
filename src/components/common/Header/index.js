import { Link } from "react-router-dom";
import { MainLogo } from "../../../assets/svg/mainLogo";
import { dataItems } from "./constants/dataItems";
import style from "./header.module.scss";

const Header = () => {
  return <header className={style.header}>
    <div className={style.wrapper}>
      <Link to="/" className={style.header__logo}><MainLogo /></Link>
      <ul className={style.header__items}>
        {dataItems.map((item, index) => {
          return (
            <Link className={style.item} key={index} to={item.link}>{item.item}</Link>
          )
        })}
      </ul>
      <div className={style.header__button}></div>
    </div>
  </header>;
};

export default Header;
