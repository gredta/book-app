// BookDetails.jsx
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import * as Icons from 'react-feather';


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
        <div className='bg-glass w-7/8 text-white mx-auto mt-10 rounded-3xl border-3 drop-shadow-lg grid grid-cols-4 mb-20'>
          {/* Left Sidebar */}
          <div className='bg-glass text-navy rounded-l-3xl'>
            <h1 className='text-3xl font-kaoly font-bold text-center mt-8 mb-16'>Bookshelf</h1>
            <img className='w-20 mx-auto' src={"/generic-avatar.svg"} alt="avatar" />
            <h2 className='text-2xl font-lora font-extrabold text-center mt-6 mb-20'>Jane Doe</h2>
            <div className="w-fit mx-auto">
              <a href=""><div className="justify-left flex mx-auto gap-4 my-8 items-center">
                <Icons.User className="w-7 h-7 text-primary" /><h3 className="text-xl font-lora text-primary">Profile</h3></div></a>
              <a href=""><div className="justify-left flex mx-auto gap-4 my-8 items-center">
                <Icons.Bell className="w-7 h-7 text-primary" /><h3 className="text-xl font-lora text-primary">Notifications</h3></div></a>
              <a href=""><div className="justify-left flex mx-auto gap-4 my-8 items-center">
                <Icons.Bookmark className="w-7 h-7 text-primary" /><h3 className="text-xl font-lora text-primary">Collections</h3></div></a>
              <a href=""><div className="justify-left flex mx-auto gap-4 my-8 items-center">
                <Icons.Settings className="w-7 h-7 text-primary" /><h3 className="text-xl font-lora text-primary">Settings</h3></div></a>
            </div>
          </div>
    
          {/* Right Sidebar */}
          <div className='w-8/9 mx-auto rounded-r-3xl col-span-3 text-navy'>
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
            </div>
        </div>
  );
}

export default BookDetails;