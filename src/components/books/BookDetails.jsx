import React from "react";
import "../../assets/css/books.css";

const BookDetails = ({ book, onToggleFavorite, isFavorite }) => {
  return (
    <div className="book-details">
      <h1 className="book-title">{book.title}</h1>
      <p>
        <strong>Authors:</strong> {book.authors}
      </p>
      <p>
        <strong>Publisher:</strong> {book.publisher}
      </p>
      <p>
        <strong>Pages:</strong> {book.pages}
      </p>
      <p>
        <strong>Price:</strong> {book.price}
      </p>
      <p>
        <strong>Year:</strong> {book.year}
      </p>
      <img src={book.image} alt={book.title} className="book-image" />
      <p>
        <strong>Description:</strong> {book.desc}
      </p>
      <a
        href={book.url}
        target="_blank"
        rel="noopener noreferrer"
        className="book-link"
      >
        View on IT Bookstore
      </a>
      <button onClick={onToggleFavorite} className="favorite-button">
        {isFavorite(book.isbn13) ? "Remove from Favorites" : "Add to Favorites"}
      </button>
    </div>
  );
};

export default BookDetails;
