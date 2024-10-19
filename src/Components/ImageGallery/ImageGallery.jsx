import ImageCard from "../ImageCard/ImageCard";
import style from "./ImageGallery.module.css";

const ImageGallery = ({ images, onClick }) => (
  <ul className={style.gallery}>
    {images.map((image) => (
      <li key={image.id} onClick={() => onClick(image)}>
        <ImageCard image={image} />
      </li>
    ))}
  </ul>
);

export default ImageGallery;
