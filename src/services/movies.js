var categories = [];

const uniqueCategories = (movies) => {
  let duplicatesCategories = movies.map(v=> v.type);
  return [...new Set(duplicatesCategories)];
}

export const getMovies = async () => {
  let response = await fetch('/api/movies');
  let movies = await response.json();

  categories = uniqueCategories(movies)

  return movies;
}

export const getMovieById = async (movieId) => {
  let response = await fetch(`/api/movies/${movieId}`);
  let movie = await response.json();
  return movie[0];
}

export const getCategories = () => {
  return categories;
}


