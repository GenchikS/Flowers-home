import { NavLink } from "react-router-dom";
import Login from "../../component/Login/Login.jsx";
import css from "./AuthPages.module.css";


export default function AuthPages() {
    return (
      <div className={css.containerAuthPages}>
        <Login />
        <p className={css.textInfo}>--------------- Or ---------------</p>
        <NavLink to="/register" className={css.register}>
          Register
        </NavLink>
      </div>
    );
}