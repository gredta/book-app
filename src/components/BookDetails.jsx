// BookDetails.jsx
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function BookDetails() {
  const { id } = useParams(); // Get the book ID from the URL
  const [book, setBook] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await fetch(
          `http://localhost:5001/api/books/${id}`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch book details');
        }
        const data = await response.json();
        console.log('API Response:', data); // Log the API response
        setBook(data);
      } catch (error) {
        console.error('Error fetching book details:', error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
  
    fetchBookDetails();
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!book) {
    return <div>Book not found.</div>;
  }

  return (
    <div className="p-8">
      <Link to="/" className="text-primary hover:underline">
        &larr; Back to Home
      </Link>
      <div className="mt-8">
        <img
          src={book.thumbnail || 'https://via.placeholder.com/150'}
          alt={book.title || 'No Title Available'}
          className="w-48 h-64 object-cover rounded-lg"
        />
        <h1 className="text-3xl font-bold mt-4">{book.title || 'No Title Available'}</h1>
        <p className="text-lg text-gray-600 mt-2">
          by {book.author || 'Unknown Author'}
        </p>
        <p className="mt-4">{book.description || 'No description available.'}</p>
        <div className="mt-6">
          <h2 className="text-xl font-bold">Details</h2>
          <p>Categories: {book.categories?.join(', ') || 'No categories available.'}</p>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;