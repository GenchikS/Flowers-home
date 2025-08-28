import css from "./UserPhotoModal.module.css";

export const UserPhgotoModal = ({url}) => {
  console.log(url);
  return (
    <div className={css.container}>
      {/* <h3>Hello</h3> */}
      <img className={css.image} src={url} alt="фото" title="фото" />
    </div>
  );
};
