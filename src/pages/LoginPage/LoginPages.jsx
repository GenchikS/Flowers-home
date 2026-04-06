import { NavLink } from "react-router-dom";
import Login from "../../component/Login/Login.jsx";
import css from "./LoginPages.module.css";
import Loader from "../../component/Loader/Loader.jsx";
import { useSelector } from "react-redux";
import { selectLoading } from "../../redux/user/usersSlice.js";


export default function LoginPages() {
  const isLoader = useSelector(selectLoading);
  return (
    isLoader ?
      (<div>
        <Loader />
        <p className={css.textLoader}>Виконуєсться вхід...</p>
      </div>) :
      <div className={css.containerLoginPages}>
        <Login />
        <p className={css.textInfo}>--------------- Or ---------------</p>
        <NavLink to="/register" className={css.register}>
          Register
        </NavLink>
      </div>
    );
}