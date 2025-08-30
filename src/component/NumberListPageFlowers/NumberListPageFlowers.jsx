import { useSelector } from "react-redux";
import css from "./NumberListPageFlowers.module.css"
import { selectFlowers } from "../../redux/flowers/flowersSlice.js";

export default function NumberListPageFlowers() {
    const flowers = useSelector(selectFlowers);
    // console.log("flowers ", flowers.page);
    return <p className={css.numberListPage}>{flowers.page}</p>;
}