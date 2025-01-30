import css from "./HomePages.module.css";

export default function HomePages() {
  return (
    <div className={css.containerTitle}>
      <h1 className={css.title}>Щастя розквітає зсередини</h1>
      <p className={css.text}>
        «Затишний Дім» - це в прямому сенсі будинок, невеликий, гарний, з
        клумбами на терасі, декількома спальнями, санвузлом та кухнею.
      </p>
    </div>
  );
}
