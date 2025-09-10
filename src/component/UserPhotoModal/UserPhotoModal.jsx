// import FlowersPages from "../../pages/FlowersPages/FlowersPages.jsx";
import css from "./UserPhotoModal.module.css";

export const UserPhgotoModal = ({ url }) => {
  // console.log(url);
  return (
    <div className={css.container}>
      <div>
        <img className={css.image} src={url} alt="фото" title="фото" />
      </div>
    </div>
  );
};
