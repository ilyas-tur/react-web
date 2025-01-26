import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/home.css";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("https://api.itbook.store/1.0/new");
        const data = await response.json();
        setBooks(data.books);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p className="error">Error: {error}</p>;

  return (
    <div className="container">
      <h1 className="title">New Books</h1>
      <div className="books-grid">
        {books.map((book) => (
          <Link
            key={book.isbn13}
            to={`/books/${book.isbn13}`}
            className="book-card"
          >
            <img src={book.image} alt={book.title} className="book-image" />
            <h2 className="book-title">{book.title}</h2>
            <p className="book-subtitle">{book.subtitle}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
