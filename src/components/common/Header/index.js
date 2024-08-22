import { Link } from "react-router-dom";
import { HeaderLogo } from "../../../assets/svg/mainLogos";
import { dataItems } from "../../../constants/dataItems";
import style from "./header.module.scss";
import Button from "../Button/Button";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={style.header}>
      <div className={style.wrapper}>
        <div className={style.header__wrapperLogo}>
          <Link to="/" className={style.logo}>
            <HeaderLogo />
          </Link>
          <div className={style.menuToggle} onClick={toggleMenu}>
            <div
              className={`${style.burger} ${isMenuOpen ? style.open : ""}`}
            ></div>
          </div>
        </div>

        <ul className={style.header__items}>
          {dataItems.map((item, index) => {
            return (
              <Link className={style.item} key={index} to={item.link}>
                {item.item}
              </Link>
            );
          })}
        </ul>
        <div className={style.header__button}>
          <Button isPing={false} text="Sign UP" />
        </div>
        {isMenuOpen && (
          <div className={style.mobileMenu} onClick={toggleMenu}>
            <div className={style.overlayContent}>
              <div className={style.closeButton} onClick={toggleMenu}>
                X
              </div>
              <ul className={style.overlayItems}>
                {dataItems.map((item, index) => (
                  <Link className={style.item} key={index} to={item.link}>
                    {item.item}
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
