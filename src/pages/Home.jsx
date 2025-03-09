import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import useCountdown from "../hooks/useCountdown";
import Loader from "../components/shared/Loader";
import Error from "../components/shared/Error";
import BookOfTheDay from "../components/books/BookOfTheDay";
import BooksList from "../components/books/BooksList";
import { ROUTES } from "../utils/consts";
import useToggleFavorite from "../hooks/useToggleFavorite";
import useBookOfTheDay from "../hooks/useBookOfTheDay";
import { API_BASE_URL } from "../config/api";
import "../assets/css/home.css";

const Home = () => {
  const navigate = useNavigate();
  const { toggleFavorite, isFavorite } = useToggleFavorite();
  const { data, loading, error } = useFetch(`${API_BASE_URL}/new`);

  const books = data && data.books ? data.books : [];

  const { bookOfTheDay, expiryTimestamp } = useBookOfTheDay(books);
  const timeLeft = useCountdown(expiryTimestamp);

  const [flip, setFlip] = useState(false);

  const handleCardClick = useCallback(
    (e) => {
      e.preventDefault();
      setFlip(true);
      setTimeout(() => {
        navigate(ROUTES.BOOKS.replace(":id", bookOfTheDay.isbn13));
      }, 600);
    },
    [navigate, bookOfTheDay]
  );

  if (loading) return <Loader />;
  if (error) return <Error />;

  return (
    <div className="container">
      {bookOfTheDay && (
        <BookOfTheDay
          book={bookOfTheDay}
          flip={flip}
          onCardClick={handleCardClick}
          onFavoriteToggle={(e) => toggleFavorite(bookOfTheDay, e)}
          isFavorite={isFavorite}
          timeLeft={timeLeft}
        />
      )}
      <h1 className="title">New Books</h1>
      <BooksList
        books={books}
        onFavoriteToggle={(book, e) => toggleFavorite(book, e)}
        isFavorite={isFavorite}
      />
    </div>
  );
};

export default Home;
