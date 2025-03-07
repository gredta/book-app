const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = 5001;

// Middleware
app.use(
  cors({
    origin: 'http://localhost:5173',
    methods: ['GET'],
  })
);
app.use(express.json());

// Fetch a single book by ID
app.get('/api/books/:id', async (req, res) => {
  const { id } = req.params;

  try {
    // Fetch book details from OpenLibrary
    const detailsResponse = await axios.get(
      `https://openlibrary.org/works/${id}.json`
    );

    // Fetch cover image (if available)
    const coverResponse = await axios.get(
      `https://openlibrary.org/works/${id}/editions.json`
    );

    // Extract the first cover image from the editions
    const coverId = coverResponse.data.entries[0]?.covers?.[0];

    const book = {
      id: detailsResponse.data.key,
      title: detailsResponse.data.title,
      author: detailsResponse.data.authors?.[0]?.name || 'Unknown Author',
      thumbnail: coverId
        ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
        : 'https://via.placeholder.com/150',
      description: detailsResponse.data.description?.value || 'No description available.',
      categories: detailsResponse.data.subjects || [],
    };

    res.json(book);
  } catch (error) {
    console.error('Error fetching book details:', error);
    res.status(500).json({ message: 'Error fetching book details', error });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});