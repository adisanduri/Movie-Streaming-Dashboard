var categories = [];

export const getMovies = async () => {
  let response = await fetch('/api/movies');
  let movies = await response.json();

  // Set categories
  let duplicatesCategories = movies.map(v=> v.type);
  categories=[...new Set(duplicatesCategories)];

  return movies;
}

export const getMovieById = async (movieId) => {
  let response = await fetch('/api/movies/'+ movieId);
  let movie = await response.json();
  return movie[0];
}

export const getCategories = () => {
  return categories;
}

