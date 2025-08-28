// import { UserPhgotoModal } from "../UserPhotoModal/UserPhotoModal.jsx";
import { useSelector } from "react-redux";
import { selectModalPhoto } from "../../redux/flowers/flowersSlice.js";
import css from "./ImageCard.module.css"
import { UserPhgotoModal } from "../UserPhotoModal/UserPhotoModal.jsx";
import { useState } from "react";
// import { UserPhgotoModal } from "../UserPhotoModal/UserPhotoModal.jsx";

export default function ImageCard({ flower, color, size, blossom, price, photo }) {

  const [onClick, setOnClick] = useState(useSelector(selectModalPhoto));
  const [url, setUrls] = useState("")
  // const click = useSelector(selectModalPhoto);
  
  const handleClick = (evn) => {
    const urlEnd = evn.currentTarget.getAttribute("src");
    setUrls(urlEnd);
    setOnClick(true);
  // console.log(urlEnd);
  }

  // <UserPhgotoModal url={evn.currentTarget.getAttribute("src")}

  return (onClick ? <UserPhgotoModal url={url} /> : 
    <div className={css.gallery}>
        <a src={photo} onClick={handleClick}>
          <img className={css.image} src={photo} alt="фото" title="фото" />
          <ul className={css.list}>
            <li>
              <p className={css.flower}>{flower}</p>
              <div className={css.text}>
                <p>Колір: </p>
                <p>{color}</p>
              </div>
              <div className={css.text}>
                <p>Розмір:</p>
                <p>{size} см</p>
              </div>
              <div className={css.text}>
                <p>Цвітіння:</p>
                <p>{blossom}</p>
              </div>
              <div className={css.textPrice}>
                <p>Ціна:</p>
                <p>{price} грн.</p>
              </div>
            </li>
          </ul>
        </a>
      </div>
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
     
    // </div>
    
  );
}