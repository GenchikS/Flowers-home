import css from "./ContactsPages.module.css";

export default function FlowersPages() {
  return (
    <div className={css.containerTitle}>
      <h1 className={css.title}>Contacts:</h1>
      <p className={css.textCity}>м. Суми,</p>
      <p className={css.textNext}>вул. Вільного Козацтва буд. 3, кв. 4,</p>
      <p className={css.textNext}>Городецька Тетяна</p>
      <p className={css.textNext}>т. +380956658693</p>
    </div>
  );
}
