import style from "./ImageCard.module.css";

const ImageCard = ({ image }) => (
  <div className={style.card}>
    <img
      className={style.image}
      src={image.urls.small}
      alt={image.alt_description}
    />
  </div>
);

export default ImageCard;
