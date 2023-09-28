import React from "react";
import style from "./Navbar.module.css";
import NavbarLinks from "../../data/NavbarLinks.json";
import SearchComponent from "./components/Search";
import CartIcon from "../../assets/icons/CartIcon";
import UserIcon from "../../assets/icons/UserIcon";
import TextButton from "../../components/textbutton/TextButton";
import HarmBurgerIcon from "../../assets/icons/HarmBurgerIcon";

function Navbar() {
  return (
    <nav className={style.NavbarStyle}>
      <img src="/logo.png" alt="logo" className={style.NavbarLogo} />
      <li className={style.linksSection}>
        {NavbarLinks.map((link, index) => {
          return (
            <a href="/" key={index} className={style.NavbarLink}>
              {index !== 0 && <div className={style.vr} />}
              {link.title}
              {index === 2 && <SearchComponent />}
            </a>
          );
        })}
      </li>
      <div className={style.endSection}>
        <CartIcon width={20} height={20} />
        <TextButton> Login </TextButton>
        <div className={style.endSectionInner}>
          <div className={style.borderSection}>
            <div className={style.cart}>
              <UserIcon width={20} height={20} />
            </div>
            <HarmBurgerIcon width={30} height={30} />
          </div>
          <img src="/english.png" className={style.lang} alt="language" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
