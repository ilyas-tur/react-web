import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Books = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.itbook.store/1.0/books/${id}`
        );
        const data = await response.json();
        setBook(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBookDetails();
  }, [id]);

  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p className="error">Error: {error}</p>;

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
    </div>
  );
};

export default Books;
