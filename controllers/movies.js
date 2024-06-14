const Movie = require('../models/Movie');

exports.createMovie = async (req, res) => {
  const { title, director, genre, releaseDate, rating } = req.body;

  try {
    const newMovie = new Movie({
      title,
      director,
      genre,
      releaseDate,
      rating,
    });

    const movie = await newMovie.save();
    res.json(movie);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};


