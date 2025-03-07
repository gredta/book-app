// Home.jsx
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as Icons from 'react-feather';

function Home() {
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 8; // Show 8 books per page
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch books from the backend
  useEffect(() => {
    fetch('http://localhost:5001/api/books')
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error('Error fetching books:', error));
  }, []);

  // Filter out books without thumbnails
  const filteredBooks = books.filter((book) => book.thumbnail);

  // Calculate the books to display for the current page
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);

  // Calculate total pages
  const totalPages = Math.ceil(filteredBooks.length / booksPerPage);

  // Generate page numbers
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  // Pagination functions
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleSearch = () => {
    fetch(`http://localhost:5001/api/books?query=${searchQuery}`)
      .then((response) => response.json())
      .then((data) => {
        console.log('Fetched books:', data);
        setBooks(data);
        setCurrentPage(1); // Reset to the first page after a new search
      })
      .catch((error) => console.error('Error fetching books:', error));
  };

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
      <div className='w-8/9 mx-auto rounded-r-3xl col-span-3 '>
        <div className='mt-8 bg-glass rounded-xl px-4 py-2 my-12 flex place-content-between'>
          <div className="text-navy justify-left flex items-center gap-4">
            <Icons.Menu className="w-5 h-5 text-primary cursor-pointer" />
            <input
              type="text"
              placeholder="Search for books..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSearch(); // Trigger search when Enter key is pressed
                }
              }}
              className="p-2 rounded-lg border border-none focus:outline-none focus:border-primary"
            />
          </div>
          <div className="flex justify-right items-center text-navy">
            <button
              onClick={handleSearch}
              className="bg-primary text-navy p-2 rounded-lg hover:bg-primary-dark transition-colors cursor-pointer"
            >
              <Icons.Search className="w-5 h-5" />
            </button>
          </div>
        </div>
        <h2 className="font-playfair text-2xl text-navy my-8 font-black">Featured Books</h2>
        <div className='bg-glass rounded-xl py-8 mb-10 grid grid-cols-4 gap-4 px-8'>
          {currentBooks.map((book) => (
            <div key={book.id} className=''>
              <Link to={`/book/${book.id.replace('/works/', '')}`}>
                <img
                  src={book.thumbnail}
                  alt={book.title}
                  className="w-45 h-60 bg-navy rounded-2xl object-cover cursor-pointer"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/150';
                  }}
                />
              </Link>
              <h3 className="text-lg text-navy pt-2 font-lora cursor-pointer">{book.title}</h3>
              <p className="text-sm text-navy font-lora">{book.author}</p>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center gap-2 mt-8 mb-8">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className="bg-primary text-navy rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50"
          >
            <Icons.ArrowLeft className="w-7 h-7 text-primary" />
          </button>

          {/* Page Numbers */}
          {pageNumbers.map((number) => (
            <button
              key={number}
              onClick={() => setCurrentPage(number)}
              className={`p-2 rounded-lg ${
                currentPage === number
                  ? 'bg-primary text-navy' // Highlight the current page
                  : 'bg-gray-200 text-navy hover:bg-gray-300' // Default style for other pages
              }`}
            >
              {number}
            </button>
          ))}

          <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className="bg-primary text-navy rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50"
          >
            <Icons.ArrowRight className="w-7 h-7 text-primary" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;