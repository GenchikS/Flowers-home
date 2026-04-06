import css from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { selectIsLogin, selectItem } from "../../redux/user/usersSlice.js";
import { useSelector } from "react-redux";


const navi = (props) => {
  return clsx(css.link, props.isActive && css.active);
}

export default function Navigation() {
  const userIsLogin = useSelector(selectIsLogin);
  const userItem = useSelector(selectItem);
  // console.log("userItem", userItem);

  return (
    <ul className={css.containerAll}>
      <li>
        <NavLink to="/" className={navi}>
          Flowers Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/flowers" className={navi}>
          Квіти
        </NavLink>
      </li>
      <li>
        <NavLink to="/contacts" className={navi}>
          Контакти
        </NavLink>
      </li>
      <li>
        {!userIsLogin ? (
          <NavLink to="/login" className={navi}>
            LogIn
          </NavLink>
        ) : (
          <div className={css.userContainer}>
            <p className={css.userName}>{userItem.data.name}</p>
            <NavLink to="/logout" className={css.userExit}>
              Вихід
            </NavLink>
          </div>
        )}
      </li>
    </ul>
  );
}
