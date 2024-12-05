import Navigation from "../Navigation/Navigation";
// import HomeTitle from "../../pages/HomePages/HomePages";
import css from "./AppBar.module.css";

export default function AppBar() {
  return (
    <div className={css.containerAll}>
      <Navigation />
    </div>
  );
}
