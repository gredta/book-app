const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Fetch books by search query
app.get('/api/books', async (req, res) => {
    const { query } = req.query;
  
    try {
      // Step 1: Search for books
      const searchResponse = await axios.get(
        `https://openlibrary.org/search.json?q=${query}`
      );
  
      // Step 2: Fetch details for each book (including categories)
      const books = await Promise.all(
        searchResponse.data.docs.slice(0, 10).map(async (book) => {
          const workId = book.key; // Extract the work ID
          const detailsResponse = await axios.get(
            `https://openlibrary.org${workId}.json`
          );
          console.log('Full book details:', detailsResponse.data);
console.log('Subjects:', detailsResponse.data.subjects);

  
          // Log the subjects (categories) for debugging
          console.log('Subjects for book:', detailsResponse.data.subjects);
  
          return {
            id: workId,
            title: book.title,
            author: book.author_name?.[0] || 'Unknown Author',
            thumbnail: book.cover_i
                ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
                : 'https://via.placeholder.com/150',  // Fallback if no image
            categories: detailsResponse.data.subjects || [],  // Use an empty array as fallback if no subjects
        };
        })
      );
  
      res.json(books);
    } catch (error) {
      console.error('Error fetching books:', error);
      res.status(500).json({ message: 'Error fetching books', error });
    }
  });
  
  
  

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});