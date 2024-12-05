import css from "./HomePages.module.css";

export default function HomePages() {
  return (
    <div className={css.containerTitle}>
      <h1 className={css.title}>Щастя розквітає зсередини</h1>
      <p1 className={css.text}>
        «Затишний Дім» - це в прямому сенсі будинок, невеликий, гарний, з
        клумбами на терасі, декількома спальнями, санвузлом та кухнею.
      </p1>
    </div>
  );
}
