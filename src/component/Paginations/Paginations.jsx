import css from "./Paginations.module.css"
import { useSelector } from "react-redux";
import { selectFlowers } from "../../redux/flowers/flowersSlice.js";
import NumberListPageFlowers from "../NumberListPageFlowers/NumberListPageFlowers.jsx";
import ButtonList from "../ButtonList/ButtonList.jsx";

export default function Paginations({ page, onUpdate }) {
    const flowers = useSelector(selectFlowers);
    // console.log("page3", page);
  return (
    <div className={css.listPagnations}>
      {page > 1 && <ButtonList onUpdate={onUpdate} title={page-1} />}
      <NumberListPageFlowers />
      {page < flowers.totalPages && <ButtonList onUpdate={onUpdate} title={page+1} />}
    </div>
  );
}