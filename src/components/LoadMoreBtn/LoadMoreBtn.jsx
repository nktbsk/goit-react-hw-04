import style from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onClick }) => (
  <button className={style.button} onClick={onClick}>
    Load more
  </button>
);

export default LoadMoreBtn;
