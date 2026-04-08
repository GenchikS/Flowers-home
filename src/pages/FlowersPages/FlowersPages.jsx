import css from "./FlowersPages.module.css";
import { NavLink} from "react-router-dom";
import clsx from "clsx";
// import { useSelector } from "react-redux";
// import { selectRole } from "../../redux/user/usersSlice.js";


export default function FlowersPages() {
  // const userRole = useSelector(selectRole);

    const navi = (props) => {
      return clsx(css.link, props.isActive && css.active);
  };

  return (
    <ul className={css.container}>
      {/* {userRole == "admin" && */}
        <li className={css.list}>
        <NavLink to="/admin/flowers" className={css.textCorrecte}>
          Редагувати
        </NavLink>
        </li>
        {/* } */}
      <li className={css.list}>
        <NavLink to="/flowers/chrysanthemums" className={navi}>
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




