import css from "./LoaderTwo.module.css"

export default function LoaderTwo() {
    return (
      <div className="css.loader">
        <div className={css.loadingText}>
          Завантаження<span className={css.dot}>.</span>
          <span className={css.dot}>.</span>
          <span className={css.dot}>.</span>
        </div>
        <div className={css.loadingBarBackground}>
          <div className={css.loadingBar}>
            <div className={css.whiteBarsContainer}>
              <div className={css.whiteBar}></div>
              <div className={css.whiteBar}></div>
              <div className={css.whiteBar}></div>
              <div className={css.whiteBar}></div>
              <div className={css.whiteBar}></div>
              <div className={css.whiteBar}></div>
              <div className={css.whiteBar}></div>
              <div className={css.whiteBar}></div>
              <div className={css.whiteBar}></div>
              <div className={css.whiteBar}></div>
            </div>
          </div>
        </div>
      </div>
    );
}