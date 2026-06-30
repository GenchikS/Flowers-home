// import { useDispatch, useSelector } from "react-redux";
import css from "./DeleteFlower.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  fetchDeleteFlowers,
  ressetIsCode,
} from "../../../../redux/flowers/operations.js";
import { useDispatch } from "react-redux";
import LoaderTwo from "../../../LoaderTwo/LoaderTwo.jsx";

export default function DeleteFlower() {
  const dispatch = useDispatch();
  const [flower, setFlower] = useState("Хризантема");
  const [input, setInput] = useState("");
  const [codeDelete, setCodeDelete] = useState("")
  const [messageDelete, setMessageDelete] = useState("")
  const [messageError, setMessageError] = useState("");
  const [isLoader, setIsLoader] = useState(false)

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
    setInput("")
    try {
          setIsLoader(true)
          const deleteData = await dispatch(fetchDeleteFlowers(input));
          // console.log("deleteData", deleteData);
          setCodeDelete(deleteData.payload.data.code);
          setMessageDelete(deleteData.payload.message);
    } catch (error) {
        setMessageError("Сталася помилка видалення!"); 
    }
    finally
      {setIsLoader(false)}
  };

  const onClickExit = () => {
    setCodeDelete("");
    setMessageDelete("");
    setMessageError("")
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
        {isLoader ? <LoaderTwo /> :
        <div>
          <input
            type="text"
            value={input}
            placeholder="вкажіть порядковий код ідентифікатор"
            className={css.inputText}
            onChange={handleChange}
            required
          />
          {codeDelete && (
            <p className={css.codeDelete}>Видалено код:{codeDelete}</p>
          )}
          {messageDelete && (
            <p className={css.messageDelete}>{messageDelete}</p>
          )}
          {messageError && <p className={css.messageError}>{messageError}</p>}
          <div className={css.naviExitContainer}>
            {!codeDelete && !messageDelete && (
              <button
                type="button"
                className={css.naviDelete}
                onClick={handleSubmit}
              >
                Видалити
              </button>
            )}
            <button
              type="button"
              className={css.naviExit}
              onClick={onClickExit}
            >
              Закрити
            </button>
          </div>
        </div>}
      </div>
    </div>
  );
}