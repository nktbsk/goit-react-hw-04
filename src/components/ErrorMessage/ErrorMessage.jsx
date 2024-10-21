// ErrorMessage.js
import styles from "./ErrorMessage.module.css";

const ErrorMessage = ({ message }) => {
  return (
    <div className={styles.error}>
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;
