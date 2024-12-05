// import Home from "../Home/Home.jsx";
import Flowers from "../Flowers/Flowers.jsx";
import Contacts from "../Contacts/Contacts.jsx";
import css from "./Navigation.module.css";
import { NavLink } from "react-router-dom";



export default function Navigation() {
  return (
    <ul className={css.containerAll}>
      {/* <li><NavLink to="/">Home</NavLink></li> */}
      <li><Flowers /></li>
      <li><Contacts /></li>
    </ul>
  );
}
