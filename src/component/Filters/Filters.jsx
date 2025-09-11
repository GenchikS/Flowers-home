import { useId } from "react"

export default function Filters({ value, onSelect }) {
  const selectId = useId();
  // console.log("value", value);
  return (
    <div>
      <label htmlFor={selectId}>
        Обрати колір
        <select
          id={selectId}
          value={value.color}
          onChange={(evt) => onSelect.setColor(evt.target.value)}
        >
          <option value="всі">всі</option>
          <option value="білий">білий</option>
          <option value="оранжевий">оранжевий</option>
          <option value="фіолетови">фіолетови</option>
        </select>
      </label>
      <label htmlFor={selectId}>
        Кількість фото на сторінці
        <select
          id={selectId}
          value={value.perPage}
          onChange={(evt) => onSelect.setPerPage(evt.target.value)}
        >
          <option value="4">4</option>
          <option value="6">6</option>
          <option value="8">8</option>
          <option value="10">10</option>
        </select>
      </label>
      {/* <button type="button" disabled={!hasAccepted}>
          фільтр
        </button> */}
    </div>
  );
}