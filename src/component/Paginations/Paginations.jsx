import css from "./Paginations.module.css"
import { useSelector } from "react-redux";
import { selectFlowers } from "../../redux/flowers/flowersSlice.js";
import NumberListPageFlowers from "../NumberListPageFlowers/NumberListPageFlowers.jsx";
import ButtonList from "../ButtonList/ButtonList.jsx";

export default function Paginations({ page, onUpdate }) {
    const flowers = useSelector(selectFlowers);
    console.log("total", flowers.totalPages);
  return (
    <div className={css.listPagnations}>
      {page > 1 && <ButtonList onUpdate={onUpdate} title={"попередня"} />}
      <NumberListPageFlowers />
      {page < flowers.totalPages && <ButtonList onUpdate={onUpdate} title={"наступна"} />}
    </div>
  );
}