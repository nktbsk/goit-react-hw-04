import { useState, useEffect } from "react";
import axios from "axios";
import Gallery from "./Components/Gallery/Gallery";
import LoadMoreBtn from "./Components/LoadMoreBtn/LoadMoreBtn";
import Header from "./Components/Header/Header";

const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [searchQuery, setSearchQuery] = useState(query);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const searchImages = async () => {
      try {
        const { data } = await axios.get(
          "https://api.unsplash.com/search/photos",
          {
            headers: {
              Authorization:
                "Client-ID tiMMCYYTmgvcAIKgv6TxUXtwKw0rm05ydEpPZ846qow",
            },
            params: {
              query: searchQuery,
              page,
              per_page: 12,
            },
          }
        );
        if (page === 1) {
          setImages(data.results);
        } else {
          setImages((prevImages) => [...prevImages, ...data.results]);
        }
      } catch (error) {
        console.error("Ошибка при поиске изображений:", error);
      }
    };

    searchImages();
  }, [searchQuery, page]);

  // Функция для выполнения поиска при нажатии кнопки или нажатии Enter
  const handleSearch = () => {
    setPage(1);
    setSearchQuery(query);
  };

  // Функция для очистки всех данных
  const handleClear = () => {
    setQuery("");
    setImages([]);
  };

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div>
      <Header
        query={query}
        setQuery={setQuery}
        onSearch={handleSearch}
        onClear={handleClear}
        hasImages={images.length > 0}
      />
      <Gallery images={images} />
      {images.length > 0 && <LoadMoreBtn loadMore={loadMore} />}
    </div>
  );
};

export default App;
