import { NavLink } from "react-router-dom";
import css from "./AdminPages.module.css"
import clsx from "clsx";

export default function AdminPages() {

    const navi = (props) => {
      return clsx(css.link, props.isActive && css.active);
  };

  return (
    <ul className={css.container}>
      <li className={css.list}>
        <NavLink to="/admin/flowers/chrysanthemums" className={navi}>
          Хризантеми
        </NavLink>
      </li>
      <li className={css.list}>
        <NavLink to="/admin/flowers/daisies" className={navi}>
          Ромашки
        </NavLink>
      </li>
    </ul>
  );
}