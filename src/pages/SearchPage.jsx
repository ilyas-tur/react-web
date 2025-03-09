import React from "react";
import { useSearchParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Loader from "../components/shared/Loader";
import Error from "../components/shared/Error";
import BookItem from "../components/books/BookItem";
import "../assets/css/search.css";
import { API_BASE_URL } from "../config/api";

export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  const url = query ? `${API_BASE_URL}/search/${query}` : null;
  const { data, loading, error } = useFetch(url);

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <Error />;
  }

  const books = data?.books || [];

  return (
    <div className="wrapper">
      <h1 className="wrapper-title">Search Results</h1>
      <div className="book-list">
        {books.length > 0 ? (
          books.map((book) => (
            <BookItem
              key={book.isbn13}
              isbn13={book.isbn13}
              title={book.title}
              subtitle={book.subtitle}
              price={book.price}
              image={book.image}
              url={book.url}
            />
          ))
        ) : (
          <p>No books found. Try another search!</p>
        )}
      </div>
    </div>
  );
}
