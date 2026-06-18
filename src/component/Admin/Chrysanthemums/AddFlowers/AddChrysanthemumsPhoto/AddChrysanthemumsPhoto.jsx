import { useDispatch, useSelector } from "react-redux";
// import { fetchAddFlowers } from "../../../../redux/flowers/operations.js";
import css from "./AddChrysanthemumsPhoto.module.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  selectId,
  selectIsCode,
  selectIsUrlPhoto,
  selectIsUrlWebPhoto,
} from "../../../../../redux/flowers/flowersSlice.js";
import { fetchAddPhoto, fetchAddPhotoWeb } from "../../../../../redux/flowers/operations.js";

export default function AddChrysanthemumsPhoto() {
  const dispatch = useDispatch();
  const [flower, setFlower] = useState("Хризантема");
  const [preview, setPreview] = useState(null);
    
  const id = useSelector(selectId);
  const codeAdd = useSelector(selectIsCode);
  const isUrlPhoto = useSelector(selectIsUrlPhoto);
  const isUrlWebPhoto = useSelector(selectIsUrlWebPhoto);

    const handleFileChange = (event) => {
      const file = event.target.files[0];
        if (file && file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onloadend = () => setPreview(reader.result);
        reader.readAsDataURL(file);
        dispatch(fetchAddPhoto({file, id}));
          // toast.success("Image upload");
        //   console.log(file);
      } else {
        // toast.error("Please upload a valid image file.");
      }
  };

      const handleFileChangeWeb = (event) => {
        const file = event.target.files[0];
        if (file && file.type.startsWith("image/")) {
          const reader = new FileReader();
          reader.onloadend = () => setPreview(reader.result);
          reader.readAsDataURL(file);
          dispatch(fetchAddPhotoWeb({ file, id }));
          // toast.success("Image upload");
          //   console.log(file);
        } else {
          // toast.error("Please upload a valid image file.");
        }
      };
  
  return (
    <div className={css.containerAll}>
      <div className={css.container}>
        <div className={css.title}>
          <p>Квітка: {flower}</p>
        </div>
        {!codeAdd && (
          <div className={css.naviExitContainer}>
            <NavLink to="/admin/flowers" className={css.naviExit}>
              Закрити
            </NavLink>
          </div>
        )}
        {codeAdd && (
          <div>
            <p>Код: {codeAdd}</p>
            {/* <p>id: {id}</p> */}
            {!isUrlPhoto && (
              <div>
                <p>Завантажити основне фото</p>
                <input
                  id="onChange"
                  type="file"
                  accept="image/*"
                  //  className={styles.fileInput}
                  onChange={handleFileChange}
                />
              </div>
            )}
            {!isUrlWebPhoto &&
              isUrlPhoto && (
                <div>
                  <p>Завантажити додаткове фото</p>
                  <input
                    id="onChange"
                    type="file"
                    accept="image/*"
                    //  className={styles.fileInput}
                    onChange={handleFileChangeWeb}
                  />
                </div>
              )}
          </div>
        )}
      </div>
    </div>
  );
}
