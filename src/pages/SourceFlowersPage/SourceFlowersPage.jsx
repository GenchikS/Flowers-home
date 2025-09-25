import css from "./SourceFlowersPage.module.css"
import { useDispatch, useSelector } from "react-redux";
import Paginations from "../../component/Paginations/Paginations.jsx";
import { selectFlowers, selectLoading } from "../../redux/flowers/flowersSlice.js";
import ImageCard from "../../component/ImageCard/ImageCard.jsx";
import Loader from "../../component/Loader/Loader.jsx";
import Filters from "../../component/Filters/Filters.jsx";
import { useEffect, useState } from "react";
import { fetchFlowers } from "../../redux/flowers/operations.js";



export default function SourceFlowersPage({ titleSource }) {
  // console.log("titleSourceFlowers", titleSourceFlowers);

  const flowers = useSelector(selectFlowers);
  const isLoader = useSelector(selectLoading);

  const flowersItems = flowers !== undefined && flowers.data;

  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState("6");
  const [color, setColor] = useState(`всі`);
  const [size, setSize] = useState(`всі`);
  // const [titleSource, setTitleSourse] = useState(titleSourceFlowers);

  const handleClick = ({ title }) => {
    if (title === page + 1) {
      setPage(page + 1);
    } else if (title === page - 1) {
      setPage(page - 1);
    }
  };

  useEffect(() => {
    // console.log("page1", page);
    // console.log("perPage1", perPage);
    // console.log("color1", color);
    dispatch(fetchFlowers({ page, perPage, color, titleSource, size }));
  }, [dispatch, page, perPage, color, size]);

  return isLoader ? (
    <div>
      <Loader />
      <p className={css.textLoader}>Завантаження галереї...</p>
    </div>
  ) : (
    <div className={css.containerFlowersPage}>
      <Filters
        value={{ color, perPage, size }}
        onSelect={{ setPage, setPerPage, setColor, setSize }}
      />
      <div className={css.containerCartPaginations}>
        <ul className={css.containerTitle}>
          {/* {console.log("flowersItems.length", flowersItems.length)} */}
          {flowersItems.length ? (
            flowersItems
              // .filter((flower) => flower.color === color)
              .map((flower) => (
                <li key={flower._id}>
                  {/* {console.log(flower.photo)} */}
                  <ImageCard
                    code={flower.code}
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
              ))
          ) : (
            <p className={css.nowArray}>По запиту нічого не знайдено </p>
          )}
        </ul>

        {flowersItems.length ? (
          <Paginations page={page} onUpdate={handleClick} />
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
}