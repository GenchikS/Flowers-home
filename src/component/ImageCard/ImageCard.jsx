// import { UserPhgotoModal } from "../UserPhotoModal/UserPhotoModal.jsx";
import { useSelector } from "react-redux";
import { selectModalPhoto } from "../../redux/flowers/flowersSlice.js";
import css from "./ImageCard.module.css"
import { UserPhgotoModal } from "../UserPhotoModal/UserPhotoModal.jsx";
import { useState } from "react";
// import { UserPhgotoModal } from "../UserPhotoModal/UserPhotoModal.jsx";

export default function ImageCard({
  flower,
  color,
  size,
  blossom,
  price,
  photo,
  photoWeb,
  availability,
}) {
  const [onClick, setOnClick] = useState(useSelector(selectModalPhoto));
  // const [url, setUrls] = useState("");
  // const click = useSelector(selectModalPhoto);

  const availabilityAll = availability.includes("так");
  // console.log("availabilityAll", availabilityAll);

  const handleClickOn = () => {
    // const urlEnd = evn.currentTarget.getAttribute("src");
    // setUrls(urlEnd);
    setOnClick(true);
    // console.log(urlEnd);
};

  const handleClickOff = () => {
    setOnClick(!true);
  };
  // <UserPhgotoModal url={evn.currentTarget.getAttribute("src")}

  return onClick ? (
    <a onClick={handleClickOff}>
      <UserPhgotoModal url={photo} />
    </a>
  ) : (
    <div className={css.gallery}>
      <a src={photoWeb} onClick={handleClickOn}>
        <img className={css.image} src={photoWeb} alt="фото" title="фото" />
        <ul className={css.list}>
          <li>
            <p className={css.flower}>{flower}</p>
            <div className={css.containerText}>
              <p className={css.text}>Колір: </p>
              <p className={css.text}>{color}</p>
            </div>
            <div className={css.containerText}>
              <p className={css.text}>Розмір:</p>
              <p className={css.text}>{size} см</p>
            </div>
            <div className={css.containerText}>
              <p className={css.text}>Цвітіння:</p>
              <p className={css.text}>{blossom}</p>
            </div>
            <div className={css.containerText}>
              <p className={css.text}>Наявність:</p>
              <p
                className={
                  availabilityAll
                    ? css.textAvailability
                    : css.textAvailabilityNot
                }
              >
                {availability}
              </p>
            </div>
            <div className={css.containerText}>
              <p className={css.textPrice}>Ціна:</p>
              {availabilityAll ? (
                <p className={css.textPrice}>{price} грн.</p>
              ) : (
                <p className={css.textAvailabilityNot}>---</p>
              )}
            </div>
          </li>
        </ul>
      </a>
    </div>
  );
  // <div>
  //   <div className={css.gallery}>
  //     <a src={photo} onClick={handleClick}>
  //       <img className={css.image} src={photo} alt="фото" title="фото" />
  //       <ul className={css.list}>
  //         <li>
  //           <p className={css.flower}>{flower}</p>
  //           <div className={css.text}>
  //             <p>Колір: </p>
  //             <p>{color}</p>
  //           </div>
  //           <div className={css.text}>
  //             <p>Розмір:</p>
  //             <p>{size} см</p>
  //           </div>
  //           <div className={css.text}>
  //             <p>Цвітіння:</p>
  //             <p>{blossom}</p>
  //           </div>
  //           <div className={css.textPrice}>
  //             <p>Ціна:</p>
  //             <p>{price} грн.</p>
  //           </div>
  //         </li>
  //       </ul>
  //     </a>
  //   </div>

  // availability;

  // </div>
}