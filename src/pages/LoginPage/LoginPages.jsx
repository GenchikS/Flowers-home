import { NavLink } from "react-router-dom";
import Login from "../../component/Login/Login.jsx";
import css from "./LoginPages.module.css";


export default function LoginPages() {
    return (
      <div className={css.containerLoginPages}>
        <Login />
        <p className={css.textInfo}>--------------- Or ---------------</p>
        <NavLink to="/register" className={css.register}>
          Register
        </NavLink>
      </div>
    );
}