import css from "./RegisterPages.module.css"
import Register from "../../component/Register/Register.jsx";
import { NavLink } from "react-router-dom";


export default function RegisterPages() {
    return (
      <div className={css.containerRegister}>
        <Register />
        <p className={css.textInfo}>--------------- Or ---------------</p>
        <NavLink to="/login" className={css.login}>
          Login
        </NavLink>
      </div>
    );
}