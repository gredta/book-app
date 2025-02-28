const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Fetch books from Open Library API
app.get('/api/books', async (req, res) => {
  const { query } = req.query; // Get search query from the frontend

  try {
    const response = await axios.get(
      `https://openlibrary.org/search.json?q=${query}`
    );

    // Format the data for the frontend
    const books = response.data.docs
      .map((book) => ({
        id: book.key, // Use the book key as the ID
        title: book.title,
        author: book.author_name ? book.author_name.join(', ') : 'Unknown Author',
        thumbnail: book.cover_i
          ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` // Medium-sized cover
          : '', // Fallback for missing covers
      }))
      .filter((book) => book.thumbnail); // Filter out books without thumbnails

    res.json(books);
  } catch (error) {
    console.error('Error fetching books from Open Library API:', error);
    res.status(500).json({ message: 'Error fetching books', error });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});