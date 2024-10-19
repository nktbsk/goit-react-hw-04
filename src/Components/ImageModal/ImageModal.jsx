import Modal from "react-modal";
import styles from "./ImageModal.module.css";

Modal.setAppElement("#root");

const ImageModal = ({ isOpen, onRequestClose, image }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={styles.modalContent}
      overlayClassName={styles.modalOverlay}
      shouldCloseOnOverlayClick={true}
    >
      <button className={styles.closeButton} onClick={onRequestClose}>
        &times;
      </button>
      <img
        src={image.urls.regular}
        alt={image.alt_description}
        className={styles.modalImage}
      />
    </Modal>
  );
};

export default ImageModal;
