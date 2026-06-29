import { useNavigate } from "react-router-dom";
import css from "./Chrysanthemums.module.css";
import ButtonListTwo from "../../ButtonList/ButtonListTwo/ButtonListTwo.jsx";

export default function Chrysanthemums() {
  const navigate = useNavigate();

  const handleOnClick = (evn) => {
    // console.log(evn);
    switch (evn) {
      case "Додати":
        navigate("/admin/flowers/chrysanthemums/add");
        break;
      case "Змінити":
        navigate("/admin/flowers/flowers/chrysanthemums/update");
        break;
      case "Видалити":
        navigate("/admin/flowers/flowers/chrysanthemums/delete");
        break;
      default:
        navigate("/flowers");
    }
  };

  return (
    <ul className={css.containerAll}>
      <li className={css.list}>
        <ButtonListTwo onClick={handleOnClick} btnColor="btnGr">
          Додати
        </ButtonListTwo>
      </li>
      <li className={css.list}>
        <ButtonListTwo onClick={handleOnClick}>Змінити</ButtonListTwo>
      </li>
      <li className={css.list}>
        <ButtonListTwo onClick={handleOnClick} btnColor="btnRd">
          Видалити
        </ButtonListTwo>
      </li>
    </ul>
  );
}