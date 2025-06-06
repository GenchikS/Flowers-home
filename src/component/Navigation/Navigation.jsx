// import Home from "../Home/Home.jsx";
// import Flowers from "../Flowers/Flowers.jsx";
// import Contacts from "../Contacts/Contacts.jsx";
import css from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import clsx from "clsx";


const navi = (props) => {
  return clsx(css.link, props.isActive && css.active);
}

export default function Navigation() {
  return (
    <ul className={css.containerAll}>
      <li>
        <NavLink to="/" className={navi}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="flowers" className={navi}>
          Квіти
        </NavLink>
      </li>
      <li>
        <NavLink to="contacts" className={navi}>
          Контакти
        </NavLink>
      </li>
    </ul>
  );
}
