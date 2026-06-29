import css from "./ButtonList.module.css"

export default function BottomList({ onUpdate, title, name }) {
  return (
    <div>
      <button onClick={() => onUpdate({ title })} className={css.buttonList}>
        {/* {title} */}
        {name}
      </button>
    </div>
  );
}