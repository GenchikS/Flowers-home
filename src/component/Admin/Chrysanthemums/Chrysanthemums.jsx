import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Chrysanthemums.module.css";

export default function Chrysanthemums() {
        const navi = (props) => {
          return clsx(css.link, props.isActive && css.active);
      };
  return (
    <ul className={css.containerAll}>
      <li className={css.list}>
        <NavLink to="/admin/flowers/chrysanthemums/add" className={navi}>
          Додати
        </NavLink>
      </li>
      <li className={css.list}>
        <NavLink
          to="/admin/flowers/flowers/chrysanthemums/update"
          className={navi}
        >
          Змінити
        </NavLink>
      </li>
      <li className={css.list}>
        <NavLink
          to="/admin/flowers/flowers/chrysanthemums/delete"
          className={navi}
        >
          Видалити
        </NavLink>
      </li>
    </ul>
  );
}