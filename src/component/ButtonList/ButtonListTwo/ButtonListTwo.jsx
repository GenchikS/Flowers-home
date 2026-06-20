import css from "./ButtonListTwo.module.css"

export default function ButtonListTwo({ children, onClick, btnColor = null }) {
  // console.log(btnColor);
  let btn;
  if (btnColor == "btnGr") {
    btn = css["btnGr"]
  } else if (btnColor == "btnRd") {
    btn = css["btnRd"];
  } else if (btnColor == "btnYel") {
    btn = css["btnYel"];
  } else {
    btn = css["btn"];
  }
    return (
      <div className={css.frame}>
        <button
          className={`${css["custom-btn"]} ${btn}`}
          onClick={() => onClick(children)}
        >
          <span>Click!</span>
          <span>{children}</span>
        </button>
      </div>
    );
}