import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageModal from "./components/ImageModal/ImageModal";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import { fetchImages } from "./api";
import { Toaster, toast } from "react-hot-toast";

const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    if (!query) return;

    const loadImages = async () => {
      setLoading(true);
      try {
        const data = await fetchImages(query, page);
        setImages((prev) => [...prev, ...data.results]);
        setHasMore(page < data.total_pages);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadImages();
  }, [query, page]);

  const handleSearch = (newQuery) => {
    if (newQuery.trim() === "") {
      toast.error("Please enter a search term!");
      return;
    }
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  };

  const handleLoadMore = () => setPage((prev) => prev + 1);

  const openModal = (image) => setModalImage(image);
  const closeModal = () => setModalImage(null);

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      <ImageGallery images={images} onClick={openModal} />
      {loading && <Loader />}
      {hasMore && !loading && <LoadMoreBtn onClick={handleLoadMore} />}
      {modalImage && (
        <ImageModal
          isOpen={!!modalImage}
          onRequestClose={closeModal}
          image={modalImage}
        />
      )}
      <Toaster position="top-right" reverseOrder={false} />{" "}
    </div>
  );
};

export default App;
