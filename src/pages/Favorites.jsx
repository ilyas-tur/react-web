import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FavoritesContext } from "../context/FavoritesContext";
import { ROUTES } from "../utils/consts";
import "../assets/css/home.css";

const Favorites = () => {
  const { favorites, removeFavorite } = useContext(FavoritesContext);

  return (
    <div className="container">
      <h1>My Favorite Books</h1>
      {favorites.length === 0 ? (
        <p>No favorite books added yet.</p>
      ) : (
        <div className="books-grid">
          {favorites.map((book) => (
            <div key={book.isbn13} className="book-card">
              <Link to={ROUTES.BOOKS.replace(":id", book.isbn13)}>
                <img src={book.image} alt={book.title} className="book-image" />
                <h2 className="book-title">{book.title}</h2>
              </Link>
              <button
                onClick={() => removeFavorite(book.isbn13)}
                className="remove-button"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
