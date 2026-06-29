import { useDispatch, useSelector } from "react-redux";
import css from "./AddChrysanthemumsPhoto.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  selectId,
  selectIsCode,
  selectIsUrlPhoto,
  selectIsUrlWebPhoto,
  selectLoadingPhoto,
} from "../../../../../redux/flowers/flowersSlice.js";
import { fetchAddPhoto, fetchAddPhotoWeb, ressetIsCode } from "../../../../../redux/flowers/operations.js";
import LoaderTwo from "../../../../LoaderTwo/LoaderTwo.jsx";

export default function AddChrysanthemumsPhoto() {
  const dispatch = useDispatch();
  const [flower, setFlower] = useState("Хризантема");
  const [preview, setPreview] = useState(null);
    
  const id = useSelector(selectId);
  const codeAdd = useSelector(selectIsCode);
  const isUrlPhoto = useSelector(selectIsUrlPhoto);
  const isUrlWebPhoto = useSelector(selectIsUrlWebPhoto);
  const isLoadingPhoto = useSelector(selectLoadingPhoto);

  const navigate = useNavigate();

    const handleFileChange = (event) => {
      const file = event.target.files[0];
        if (file && file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onloadend = () => setPreview(reader.result);
        reader.readAsDataURL(file);
        dispatch(fetchAddPhoto({file, id}));
      }
    };

    const handleFileChangeWeb = (event) => {
        const file = event.target.files[0];
        if (file && file.type.startsWith("image/")) {
          const reader = new FileReader();
          reader.onloadend = () => setPreview(reader.result);
          reader.readAsDataURL(file);
          dispatch(fetchAddPhotoWeb({ file, id }))
        }
  };
  
  const onClickExit = () => {
    navigate("/admin/flowers");
    dispatch(ressetIsCode());
  }
  
  return (
    <div className={css.containerAll}>
      <div className={css.container}>
        <div className={css.containerTitle}>
          <p>
            Квітка: <span className={css.titleSpan}>{flower}</span>
          </p>
        </div>
        {isLoadingPhoto && <LoaderTwo />}
        {codeAdd && (
          <div className={css.containerPhoto}>
            {!isLoadingPhoto && <p className={css.code}>Код: {codeAdd}</p>}
            {/* <p>id: {id}</p> */}
            {!isUrlPhoto && !isLoadingPhoto && (
              <div>
                <p className={css.downloadPhoto}>Завантажити photo</p>
                <label htmlFor="file-upload" className={css.uploadBtn}>
                  Обрати photo
                </label>
                {/* <span>{isUrlPhoto || "Файл не выбран"}</span> */}
                <input
                  id="file-upload"
                  type="file"
                  accept="image/*"
                  className={css.fileInput}
                  onChange={handleFileChange}
                />
              </div>
            )}
            {!isUrlWebPhoto && isUrlPhoto && !isLoadingPhoto && (
              <div>
                <p className={css.downloadPhoto}>Завантажити photoWeb</p>
                <label htmlFor="file-upload" className={css.uploadBtn}>
                  Обрати photoWeb
                </label>
                {/* <span>{isUrlPhoto || "Файл не выбран"}</span> */}
                <input
                  id="file-upload"
                  type="file"
                  accept="image/*"
                  className={css.fileInput}
                  onChange={handleFileChangeWeb}
                />
              </div>
            )}
            {isUrlPhoto && isUrlWebPhoto && (
              <div className={css.naviExitContainer}>
                <button
                  type="button"
                  className={css.naviExit}
                  onClick={onClickExit}
                >
                  Закрити
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
