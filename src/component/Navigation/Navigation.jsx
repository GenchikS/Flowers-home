import css from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { selectIsLogin, selectItem } from "../../redux/user/usersSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/user/operations.js";


const navi = (props) => {
  return clsx(css.link, props.isActive && css.active);
}

export default function Navigation() {
    const dispatch = useDispatch();
  const userIsLogin = useSelector(selectIsLogin);
  const userItem = useSelector(selectItem);
  // console.log("userItem", userItem);

const handleClick = () => {
       const sessionId = userItem.data.sessionId;
        dispatch(logoutUser({ sessionId: sessionId }));
  }

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
            <NavLink to="/" className={css.userExit} onClick={handleClick}>
              Вихід
            </NavLink>
          </div>
        )}
      </li>
    </ul>
  );
}
