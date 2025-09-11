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
          onChange={(evt) => { if (evt.target.value === value.color) {onSelect.setColor(evt.target.value)} else {onSelect.setColor(evt.target.value); onSelect.setPage(1)} }}
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
// onSelect.setColor(evt.target.value)
// { evt.color === evt.target.value ? onSelect.setColor(evt.target.value)}