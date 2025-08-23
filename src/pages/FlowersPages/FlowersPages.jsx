import css from "./FlowersPages.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFlowers } from "../../redux/flowers/operations.js";
import ImageCard from "../../component/ImageCard/ImageCard.jsx";
import {
  selectFlowers,
  selectLoading,
} from "../../redux/flowers/flowersSlice.js";
import Loader from "../../component/Loader/Loader.jsx";


export default function FlowersPages() {
  const dispatch = useDispatch();
  const flowers = useSelector(selectFlowers);
  const isLoader = useSelector(selectLoading);
  
  const flowersItems = flowers !== undefined && flowers.data;
    
  //  console.log("isLoader ", isLoader);
  
  useEffect(() => {
    dispatch(fetchFlowers());
  }, [dispatch]);

  return isLoader ? <Loader /> : 
      <ul className={css.containerTitle}>
    {flowersItems.length &&
      flowersItems.map((flower) => (
        <li key={flower._id}>
          {/* {console.log(flower.photo)} */}
          <ImageCard
            flower={flower.flower}
            color={flower.color}
            size={flower.size}
            price={flower.price}
            blossom={flower.blossom}
            photo={flower.photo}
          />
        </li>
      ))
    }
  </ul>
  };



