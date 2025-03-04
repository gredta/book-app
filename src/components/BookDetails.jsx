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
        const response = await fetch(`https://openlibrary.org/api/books?bibkeys=OLID:${id}&format=json&jscmd=data`);
        if (!response.ok) {
          throw new Error('Failed to fetch book details');
        }
        const data = await response.json();
        setBook(data[`OLID:${id}`]); // Extract book details from the response
      } catch (error) {
        console.error('Error fetching book details:', error);
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
          src={book.cover?.large || 'https://via.placeholder.com/150'}
          alt={book.title}
          className="w-48 h-64 object-cover rounded-lg"
        />
        <h1 className="text-3xl font-bold mt-4">{book.title}</h1>
        <p className="text-lg text-gray-600 mt-2">
          by {book.authors?.map((author) => author.name).join(', ')}
        </p>
        <p className="mt-4">{book.description || 'No description available.'}</p>
        <div className="mt-6">
          <h2 className="text-xl font-bold">Details</h2>
          <p>Published: {book.publish_date}</p>
          <p>Publisher: {book.publishers?.map((publisher) => publisher.name).join(', ')}</p>
          <p>Pages: {book.number_of_pages || 'N/A'}</p>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;