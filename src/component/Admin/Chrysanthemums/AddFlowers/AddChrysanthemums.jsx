import css from "./AddChrysanthemums.module.css"
import { useState } from "react";

export default function AddChrysanthemums() {
    const [flower, setFlower] = useState("Хризантема");
    const [flowerSize, setFlowerSize] = useState("30");
    const [flowerColor, setFlowerColor] = useState("білий");
    const [flowerBlossom, setFlowerBlossom] = useState("вересень");
    const [flowerAvailability, setFlowerAvailability] = useState("так");
    const [flowerPrice, setFlowerPrice] = useState("50");
    const [downloadFlower, setDownloadFlower] = useState([]);



    const handleChange = (evt) => {
        const flowersCode = evt.target.value;
        // console.log("flowersCode", flowersCode)
        const downloadFlower = {
          flower: flower,
          size: flowerSize,
          blossom: flowerBlossom,
          color: flowerColor,
          price: flowerPrice,
          availability: flowerAvailability,
          code: flowersCode,
        };
    setDownloadFlower(downloadFlower);    
    }

    const handleClick = () => {
        console.log(downloadFlower);
    }
    
    return (
      <div className={css.containerAll}>
        <div className={css.container}>
          <div className={css.title}>
            <p>Квітка: {flower}</p>
          </div>
          <div className={css.containerSelect}>
            <label className={css.label}>
              Оберіть розмір квітки:
              <select
                value={flowerSize}
                onChange={(evn) => setFlowerSize(evn.target.value)}
                className={css.select}
              >
                <option value="30">30 см</option>
                <option value="50">50 см</option>
                <option value="80">80 см</option>
              </select>
            </label>
            <label className={css.label}>
              Оберіть колір квітки
              <select
                value={flowerColor}
                onChange={(evn) => setFlowerColor(evn.target.value)}
                className={css.select}
              >
                <option value="білий">білий</option>
                <option value="оранжевий">оранжевий</option>
                <option value="фіолетовий">фіолетовий</option>
                <option value="зелений">зелений</option>
                <option value="жовтий">жовтий</option>
                <option value="червоний">червоний</option>
              </select>
            </label>
            <label className={css.label}>
              Оберіть цвітіння квітки
              <select
                value={flowerBlossom}
                onChange={(evn) => setFlowerBlossom(evn.target.value)}
                className={css.select}
              >
                <option value="вересень">вересень</option>
                <option value="жовтень">жовтень</option>
                <option value="листопад">листопад</option>
              </select>
            </label>
            <label className={css.label}>
              Оберіть наявність
              <select
                value={flowerAvailability}
                onChange={(evn) => setFlowerAvailability(evn.target.value)}
                className={css.select}
              >
                <option value="так">так</option>
                <option value="ні">ні</option>
              </select>
            </label>
            <label className={css.label}>
              Оберіть ціну (грн)
              <select
                value={flowerPrice}
                onChange={(evn) => setFlowerPrice(evn.target.value)}
                className={css.select}
              >
                <option value="50">50</option>
                <option value="100">100</option>
                <option value="150">150</option>
                <option value="200">200</option>
                <option value="250">250</option>
                <option value="300">300</option>
                <option value="350">350</option>
                <option value="400">400</option>
                <option value="450">450</option>
                <option value="500">500</option>
                <option value="550">550</option>
                <option value="600">600</option>
              </select>
            </label>
          </div>

          <input
            type="text"
            placeholder="вкажіть порядковий код ідентифікатор"
            className={css.inputText}
            onChange={handleChange}
          />
          <button type="button" onClick={handleClick}>
            Завантажити
          </button>

          {/* <button type="button" onClick={handleClick}>
            Завантажити
          </button> */}
        </div>
      </div>
    );
}