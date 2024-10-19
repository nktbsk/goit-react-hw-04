import style from "./Header.module.css";

const Header = ({ query, setQuery, onSearch, onClear, hasImages }) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };

  return (
    <header className={style.header}>
      <input
        className={style.input}
        type="text"
        autoComplete="off"
        autoFocus
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Enter a search query"
      />

      <button className={style.btn} onClick={onSearch}>
        Search
      </button>
      {hasImages && (
        <button className={style.btn} onClick={onClear}>
          Clear
        </button>
      )}
    </header>
  );
};

export default Header;
