import ImageCard from "../ImageCard/ImageCard";
import style from "./Gallery.module.css";

const Gallery = ({ images }) => {
  return (
    <ul>
      <li>
        <div className={style.wrapper}>
          {images.length > 0 ? (
            images.map((image) => <ImageCard key={image.id} image={image} />)
          ) : (
            <p className={style.p}>Нет результатов</p>
          )}
        </div>
      </li>
    </ul>
  );
};

export default Gallery;
