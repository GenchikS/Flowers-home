import css from "./ContactsPages.module.css";

export default function FlowersPages() {
  return (
    <div className={css.containerTitle}>
      <h2 className={css.title}>Контакти:</h2>
      <div className={css.textContoiner}>
        <p className={css.textRegion}>Харківська обл., Ізюмський р-н.,</p>
        <p className={css.textCity}>сел. Савинці,</p>
        <p className={css.textStreet}>вул. Івана Тихого буд. 58,</p>
        <p className={css.textTel}>т. +380989979464</p>
        <p className={css.textNp}>Відправляємо: Новою Поштою</p>
      </div>
    </div>
  );
}
