import React, { createContext, useState, useEffect } from "react";

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const localData = localStorage.getItem("favorites");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (book) => {
    setFavorites((prevFavorites) => {
      if (!prevFavorites.some((item) => item.isbn13 === book.isbn13)) {
        return [...prevFavorites, book];
      }
      return prevFavorites;
    });
  };

  const removeFavorite = (bookId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((item) => item.isbn13 !== bookId)
    );
  };

  const isFavorite = (bookId) =>
    favorites.some((item) => item.isbn13 === bookId);

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
