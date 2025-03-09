import React from "react";
import useToggleFavorite from "../../hooks/useToggleFavorite";

export default function BookItem({
  isbn13,
  title,
  subtitle,
  price,
  image,
  url,
}) {
  const { toggleFavorite, isFavorite } = useToggleFavorite();
  const book = { isbn13, title, subtitle, price, image, url };

  return (
    <div className="book-item">
      <img src={image} alt={title} className="book-image" />
      <h2 className="book-title">{title}</h2>
      <p className="book-subtitle">{subtitle}</p>
      <p className="book-price">{price}</p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="book-link"
      >
        View on IT Bookstore
      </a>
      <button
        onClick={(e) => toggleFavorite(book, e)}
        className="favorite-button"
      >
        {isFavorite(isbn13) ? "Remove from Favorites" : "Add to Favorites"}
      </button>
    </div>
  );
}
