import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

const useToggleFavorite = () => {
  const { addFavorite, removeFavorite, isFavorite } =
    useContext(FavoritesContext);

  const toggleFavorite = (book, e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (isFavorite(book.isbn13)) {
      removeFavorite(book.isbn13);
    } else {
      addFavorite(book);
    }
  };

  return { toggleFavorite, isFavorite };
};

export default useToggleFavorite;
