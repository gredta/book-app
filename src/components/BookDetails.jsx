import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const BookDetails = () => {
  const { id } = useParams(); // Get the book ID from the URL
  const [book, setBook] = useState(null);

  useEffect(() => {
    // Fetch book details by ID
    fetch(`http://localhost:5001/api/books/${id}`)
      .then((response) => response.json())
      .then((data) => setBook(data))
      .catch((error) => console.error('Error fetching book details:', error));
  }, [id]);

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div className="book-details">
      <h1>{book.title}</h1>
      <img src={book.thumbnail} alt={book.title} />
      <p>{book.author}</p>
      <p>{book.description}</p>
      {/* Add other book details here */}
    </div>
  );
};

export default BookDetails;
