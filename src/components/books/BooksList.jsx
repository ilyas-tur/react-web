import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/consts";

const BooksList = ({ books, onFavoriteToggle, isFavorite }) => {
  return (
    <div className="books-grid">
      {books.map((book) => (
        <div key={book.isbn13} className="book-card">
          <Link to={ROUTES.BOOKS.replace(":id", book.isbn13)}>
            <img src={book.image} alt={book.title} className="book-image" />
            <h2 className="book-title">{book.title}</h2>
            <p className="book-subtitle">{book.subtitle}</p>
          </Link>
          <button
            onClick={(e) => onFavoriteToggle(book, e)}
            className="favorite-button"
          >
            {isFavorite(book.isbn13)
              ? "Remove from Favorites"
              : "Add to Favorites"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default BooksList;
