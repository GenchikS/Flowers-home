import css from "./ContactsPages.module.css";

export default function FlowersPages() {
  return (
    <div className={css.containerTitle}>
      {/* <div className={css.textContoiner}> */}
      <h2 className={css.title}>Контакти:</h2>
      <p className={css.textRegion}>Харківська обл., Ізюмський р-н.,</p>
      <p className={css.textCity}>сел. Савинці,</p>
      <p className={css.textStreet}>вул. Івана Тихого буд. 58,</p>
      <ul className={css.icons}>
        <li className={css.photoTel}></li>
        <li className={css.photoTelegram}></li>
        <li className={css.photoViber}></li>
        <li className={css.listTel}>
          <p className={css.textTel}>+38 (098) 997 94 64</p>
        </li>
      </ul>
      <p className={css.textNp}>Відправляємо: Новою Поштою</p>
      {/* </div> */}
    </div>
  );
}
