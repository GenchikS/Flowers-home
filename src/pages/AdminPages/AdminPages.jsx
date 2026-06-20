import { useNavigate } from "react-router-dom";
import css from "./AdminPages.module.css"
import ButtonListTwo from "../../component/ButtonList/ButtonListTwo/ButtonListTwo.jsx";

export default function AdminPages() {

 const navigate = useNavigate();

 const handeleOnClick = (evn) => {
  //  console.log(evn);
   switch (evn) {
     case "Хризантеми":
       navigate("/admin/flowers/chrysanthemums");
       break;
     case "Ромашки":
       navigate("/admin/flowers/daisies");
       break;
     default:
       navigate("/flowers");
   }
 };

  return (
    <ul className={css.container}>
      <li className={css.list}>
        <ButtonListTwo onClick={handeleOnClick}>Хризантеми</ButtonListTwo>
      </li>
      <li className={css.list}>
        <ButtonListTwo onClick={handeleOnClick}>Ромашки</ButtonListTwo>
      </li>
    </ul>
  );
}