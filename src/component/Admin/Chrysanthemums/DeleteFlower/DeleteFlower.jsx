// import { useDispatch, useSelector } from "react-redux";
import css from "./DeleteFlower.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  fetchDeleteFlowers,
  ressetIsCode,
} from "../../../../redux/flowers/operations.js";
// import {
//   selectId,
//   selectIsCode,
//   selectIsUrlPhoto,
//   selectIsUrlWebPhoto,
//   selectLoadingPhoto,
// } from "../../../../../redux/flowers/flowersSlice.js";
// import {
//   fetchAddPhoto,
//   fetchAddPhotoWeb,
//   ressetIsCode,
// } from "../../../../../redux/flowers/operations.js";
// import LoaderTwo from "../../../../LoaderTwo/LoaderTwo.jsx";
import { useDispatch } from "react-redux";

export default function DeleteFlower() {
  const dispatch = useDispatch();
    const [flower, setFlower] = useState("Хризантема");
    const [input, setInput] = useState("");
//   const [preview, setPreview] = useState(null);

//   const id = useSelector(selectId);
//   const codeAdd = useSelector(selectIsCode);
//   const isUrlPhoto = useSelector(selectIsUrlPhoto);
//   const isUrlWebPhoto = useSelector(selectIsUrlWebPhoto);
//   const isLoadingPhoto = useSelector(selectLoadingPhoto);

  const navigate = useNavigate();

  const handleChange = (event) => {
         const flowersCode = event.target.value;
         // console.log("flowersCode", typeof (flowersCode))
         const codeNumber = Number.parseInt(flowersCode);

      if (isNaN(codeNumber)) return;
      setInput(codeNumber);
  };

  const handleSubmit = async() => {
    //   console.log("input", input);
      const deleteData = await dispatch(fetchDeleteFlowers(input));
    //   const { data, message } = deleteData;
      console.log("data", deleteData.data);
      console.log("message", deleteData.message);

  };

  const onClickExit = () => {
    navigate("/admin/flowers");
    dispatch(ressetIsCode());
  };

  return (
    <div className={css.containerAll}>
      <div className={css.container}>
        <div className={css.containerTitle}>
          <p>
            Квітка: <span className={css.titleSpan}>{flower}</span>
          </p>
        </div>
        {/* {isLoadingPhoto && <LoaderTwo />} */}
        <input
          type="text"
          value={input}
          placeholder="вкажіть порядковий код ідентифікатор"
          className={css.inputText}
          onChange={handleChange}
          required
        />
        <div className={css.naviExitContainer}>
          <button
            type="button"
            className={css.naviExit}
            onClick={handleSubmit}
          >
            Видалити
          </button>
        </div>
        <div className={css.naviExitContainer}>
          <button type="button" className={css.naviExit} onClick={onClickExit}>
            Закрити
          </button>
        </div>
        {/* )} */}
        {/* </div>
        )} */}
      </div>
    </div>
  );
}