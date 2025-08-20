import css from "./ImageCard.module.css"

export default function ImageCard({ flower, color, size, blossom, price, photo }) {
    return (
      <div>
        <img src={photo} alt="Фото хрезантема" className={css.image}></img>
        <ul className={css.container}>
          <li>
            <p className={css.flower}>{flower}</p>
            <div className={css.text}>
              <p>Колір: </p>
              <p>{color}</p>
            </div>
            <div className={css.text}>
              <p>Розмір:</p>
              <p>{size} см</p>
            </div>
            <div className={css.text}>
              <p>Цвітіння:</p>
              <p>{blossom}</p>
            </div>
            <div className={css.text}>
              <p>Ціна:</p>
              <p>{price} грн.</p>
            </div>
          </li>
        </ul>
      </div>
    );
}