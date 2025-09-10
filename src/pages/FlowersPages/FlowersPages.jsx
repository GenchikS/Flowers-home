import css from "./FlowersPages.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFlowers } from "../../redux/flowers/operations.js";
import ImageCard from "../../component/ImageCard/ImageCard.jsx";
import {
  selectFlowers,
  selectLoading} from "../../redux/flowers/flowersSlice.js";
import Loader from "../../component/Loader/Loader.jsx";
import Filters from "../../component/Filters/Filters.jsx";
import Paginations from "../../component/Paginations/Paginations.jsx";


export default function FlowersPages() {
  const dispatch = useDispatch();
  const flowers = useSelector(selectFlowers);
  const isLoader = useSelector(selectLoading);
  
  const [page, setPage] = useState(1);

  const flowersItems = flowers !== undefined && flowers.data;

  const handleClick = ({ title }) => {
    if (title === page+1) {
      setPage(page + 1);
    } else if (title === page-1) {
      setPage(page - 1);
    }
  };
  
  // console.log("page", page);
  //  console.log("flowers ", flowers);

  useEffect(() => {
    dispatch(fetchFlowers(page));
    // console.log("page", page);
  }, [dispatch, page]);

  return isLoader ? (
    <Loader />
  ) : (
    <div>
      <Filters />
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
                photoWeb={flower.photoWeb}
                availability={flower.availability}
              />
            </li>
          ))}
      </ul>
      {flowersItems.length && (
        <Paginations page={page} onUpdate={handleClick} />
      )}
    </div>
  );
};



