import css from "./Filters.module.css"
import { useId } from "react"

export default function Filters({ value, onSelect }) {
  const selectId = useId();
  console.log("value", value);
return (
    <div className={css.container}>
      <label htmlFor={selectId} className={css.labelColor}>
        Обрати колір квітів
        <select
          id={selectId}
          value={value.color}
          onChange={(evt) => {
            if (evt.target.value === value.color) {
              onSelect.setColor(evt.target.value);
            } else {
              onSelect.setColor(evt.target.value);
              onSelect.setPage(1);
            }
          }}
          className={css.selectColor}
        >
          <option value="всі">всі</option>
          <option value="білий">білий</option>
          <option value="оранжевий">оранжевий</option>
          <option value="фіолетовий">фіолетовий</option>
          <option value="зелений">зелений</option>
          <option value="жовтий">жовтий</option>
          <option value="червоний">червоний</option>
        </select>
      </label>
      <label htmlFor={selectId} className={css.labelSize}>
        Обрати розмір квітів
        <select
          id={selectId}
          value={value.size}
          onChange={(evt) => {
            if (evt.target.value === value.size) {
              onSelect.setSize(evt.target.value);
            } else {
              onSelect.setSize(evt.target.value);
              onSelect.setPage(1);
            }
          }}
          className={css.selectSize}
        >
          <option value="всі">всі</option>
          <option value="30">30 см</option>
          <option value="50">50 см</option>
          <option value="80">80 см</option>
        </select>
      </label>
      <label htmlFor={selectId} className={css.labelPerPage}>
        Кількість фото на сторінці
        <select
          id={selectId}
          value={value.perPage}
          onChange={(evt) => onSelect.setPerPage(evt.target.value)}
          className={css.selectPerPage}
        >
          <option value="4">4</option>
          <option value="6">6</option>
          <option value="8">8</option>
          <option value="10">10</option>
        </select>
      </label>
    </div>
  );
}
