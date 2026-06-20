import css from "./FlowersPages.module.css";
import { useNavigate} from "react-router-dom";
import ButtonListTwo from "../../component/ButtonList/ButtonListTwo/ButtonListTwo.jsx";

export default function FlowersPages() {
  // const userRole = useSelector(selectRole);
  const navigate = useNavigate();

  const handleOnClick = (evn) => {
    // console.log(evn)
    switch (evn) {
      case "Хризантеми":
        navigate("/flowers/chrysanthemums");
        break;
      case "Ромашки":
        navigate("/flowers/daisies");
        break;
      case "Редагувати":
        navigate("/admin/flowers");
        break;
      default:
        navigate("/flowers");
    }
  }

  return (
    <ul className={css.container}>
      {/* {userRole == "admin" && */}
      <li className={css.list}>
        <ButtonListTwo onClick={handleOnClick} btnColor = "btnYel">Редагувати</ButtonListTwo>
      </li>
      {/* } */}
      <li className={css.list}>
        <ButtonListTwo onClick={handleOnClick}>Хризантеми</ButtonListTwo>
      </li>
      <li className={css.list}>
        <ButtonListTwo onClick={handleOnClick}>Ромашки</ButtonListTwo>
      </li>
    </ul>
  );
};




