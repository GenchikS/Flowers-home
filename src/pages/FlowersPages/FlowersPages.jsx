import css from "./FlowersPages.module.css";
import { NavLink} from "react-router-dom";
import clsx from "clsx";


export default function FlowersPages() {
    const navi = (props) => {
      return clsx(css.link, props.isActive && css.active);
  };

  return (
    <ul className={css.container}>
      <li className={css.list}>
        <NavLink
          to="/flowers/chrysanthemums"
          className={navi}
        >
          Хризантеми
        </NavLink>
      </li>
      <li className={css.list}>
        <NavLink to="/flowers/daisies" className={navi}>
          Ромашки
        </NavLink>
      </li>
    </ul>
  );
};




