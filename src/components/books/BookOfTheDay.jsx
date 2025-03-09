import React from "react";
import classNames from "classnames";

const BookOfTheDay = ({
  book,
  flip,
  onCardClick,
  onFavoriteToggle,
  isFavorite,
  timeLeft,
}) => {
  return (
    <div className="book-of-the-day">
      <h2 className="botd-title">Книга дня</h2>
      <div className={classNames("botd-card", { flip })} onClick={onCardClick}>
        <img src={book.image} alt={book.title} className="botd-image" />
        <div className="botd-info">
          <h3 className="botd-book-title">{book.title}</h3>
          <p className="botd-subtitle">{book.subtitle}</p>
          <p className="botd-price">{book.price}</p>
          <button className="botd-button">Посмотреть</button>
        </div>
      </div>
      <button onClick={onFavoriteToggle} className="favorite-button">
        {isFavorite(book.isbn13) ? "Remove from Favorites" : "Add to Favorites"}
      </button>
      {timeLeft && (
        <div className="countdown">
          Обновление через:{" "}
          {`${timeLeft.hours?.toString().padStart(2, "0") || "00"}:${
            timeLeft.minutes?.toString().padStart(2, "0") || "00"
          }:${timeLeft.seconds?.toString().padStart(2, "0") || "00"}`}
        </div>
      )}
    </div>
  );
};

export default BookOfTheDay;
