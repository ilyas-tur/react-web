import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Loader from "../components/shared/Loader";
import Error from "../components/shared/Error";
import BookDetails from "../components/books/BookDetails";
import useToggleFavorite from "../hooks/useToggleFavorite";
import { API_BASE_URL } from "../config/api";

const Books = () => {
  const { id } = useParams();
  const {
    data: book,
    loading,
    error,
  } = useFetch(`${API_BASE_URL}/books/${id}`);

  const { toggleFavorite, isFavorite } = useToggleFavorite();

  if (loading) return <Loader />;
  if (error) return <Error />;
  if (!book) return null;

  return (
    <BookDetails
      book={book}
      onToggleFavorite={(e) => toggleFavorite(book, e)}
      isFavorite={isFavorite}
    />
  );
};

export default Books;
