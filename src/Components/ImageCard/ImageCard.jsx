import style from "./ImageCard.module.css";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";

const ImageCard = ({ image }) => {
  return (
    <div className={style.wrapper}>
      <img
        className={style.img}
        src={image.urls.small}
        alt={image.alt_description}
      />
      <div className={style.wrapperInfo}>
        <p className={style.author}>
          <AiOutlineUser className={style.authorIcon} /> {image.user.name}
        </p>
        <p className={style.likes}>
          <AiOutlineLike className={style.likeIcon} /> {image.likes}
        </p>
      </div>
    </div>
  );
};

export default ImageCard;
