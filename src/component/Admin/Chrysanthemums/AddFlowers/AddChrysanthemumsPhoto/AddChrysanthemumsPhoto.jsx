import { useDispatch, useSelector } from "react-redux";
// import { fetchAddFlowers } from "../../../../redux/flowers/operations.js";
import css from "./AddChrysanthemumsPhoto.module.css";
import { useState } from "react";
// import { NavLink } from "react-router-dom";
import { selectIsCode } from "../../../../../redux/flowers/flowersSlice.js";

export default function AddChrysanthemumsPhoto() {
//   const dispatch = useDispatch();
  const [flower, setFlower] = useState("Хризантема");
//   const [flowerSize, setFlowerSize] = useState("");
//   const [flowerColor, setFlowerColor] = useState("");
//   const [flowerBlossom, setFlowerBlossom] = useState("");
//   const [flowerAvailability, setFlowerAvailability] = useState("");
//   const [flowerPrice, setFlowerPrice] = useState("");
//   const [downloadFlower, setDownloadFlower] = useState([]);
//   const [input, setInput] = useState("");
//   const [isCode, setIsCode] = useState("");

  const codeAdd = useSelector(selectIsCode);

//   const handleChange = (evt) => {
//     const flowersCode = evt.target.value;
//     // console.log("flowersCode", typeof (flowersCode))
//     const codeNumber = Number.parseInt(flowersCode);

    // console.log("code", code);
    // if (isNaN(codeNumber)) return;

//     const downloadFlower = {
//       flower: flower,
//       size: flowerSize,
//       blossom: flowerBlossom,
//       color: flowerColor,
//       price: flowerPrice,
//       availability: flowerAvailability,
//       code: codeNumber,
//     };
//     setDownloadFlower(downloadFlower);
//     setInput(codeNumber);
//   };

//   const handleClick = () => {
//     console.log(downloadFlower);
//     // const data = fetchAddFlowers(downloadFlower);
//     // console.log(data);
//     // dispatch(fetchAddFlowers(downloadFlower));
//     setFlowerSize("");
//     setFlowerColor("");
//     setFlowerBlossom("");
//     setFlowerAvailability("");
//     setInput("");
//   };

  return (
    <div className={css.containerAll}>
      <div className={css.container}>
        <div className={css.title}>
          <p>Квітка: {flower}</p>
        </div>
        {codeAdd && (
          <div>
            <p>Код: {codeAdd}</p>
          </div>
        )}
      </div>
    </div>
  );
}
