import css from "./ContactsPages.module.css";

export default function FlowersPages() {
  return (
    <div className={css.containerTitle}>
      <h1 className={css.title}>Contacts:</h1>
      <p className={css.textCity}>Харківська обл., Ізюмський р-н.,</p>
      <p className={css.textCity}>сел. Савинці,</p>
      <p className={css.textNext}>вул. Івана Тихого буд. 58,</p>
      {/* <p className={css.textNext}>Пазій Лариса</p> */}
      <p className={css.textNext}>т. +380989979464</p>
      <p className={css.textNext}>Відправляємо: Новою Поштою</p>
    </div>
  );
}
