import css from "./FlowersPages.module.css";
import photo1 from "../../img/1.jpg";
import photo2 from "../../img/2.jpg";
import photo3 from "../../img/3.jpg";
import photo4 from "../../img/4.jpg";
import photo5 from "../../img/5.jpg";
import photo6 from "../../img/6.jpg";
import photo7 from "../../img/7.jpg";
import photo8 from "../../img/8.jpg";
import photo9 from "../../img/9.jpg";
import photo10 from "../../img/10.jpg";
import photo11 from "../../img/11.jpg";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchFlowers } from "../../redux/flowers/operations.js";


export default function FlowersPages() {
  const dispatch = useDispatch();

  useEffect(() => {
     dispatch(fetchFlowers());
  }, [dispatch]);
  
return (
    <div className={css.containerTitle}>
      {/* <h1 className={css.title}>Flowers</h1> */}
      <img src={photo1} alt="" />
      <img src={photo2} alt="" />
      <img src={photo3} alt="" />
      <img src={photo4} alt="" />
      <img src={photo5} alt="" />
      <img src={photo6} alt="" />
      <img src={photo7} alt="" />
      <img src={photo8} alt="" />
      <img src={photo9} alt="" />
      <img src={photo10} alt="" />
      <img src={photo11} alt="" />
    </div>
  );
}
