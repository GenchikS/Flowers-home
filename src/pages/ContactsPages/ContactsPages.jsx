import css from "./ContactsPages.module.css";

export default function FlowersPages() {
  return (
    <div className={css.containerTitle}>
      <h1 className={css.title}>Contacts:</h1>
      <p1 className={css.textCity}>м. Суми,</p1>
      <p1 className={css.textNext}>вул. Вільного Козацтва буд. 3, кв. 4,</p1>
      <p1 className={css.textNext}>Городецька Тетяна</p1>
      <p1 className={css.textNext}>т. +380956658693</p1>
    </div>
  );
}
