import css from "./ButtonList.module.css"

export default function BottomList({ onUpdate, title }) {
  return (
    <div>
      <button onClick={()=>onUpdate({title})} className={css.buttonList}>
        {title}
      </button>
    </div>
  );
}