const fetchData = async url => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZjE1ODRkODUyN2E3NGQyMGQxNDVhY2U0YTY3MDQxNSIsInN1YiI6IjY2NjE4ZTI3OGNlMGFlYzRkYzAwYmYxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DJqz3xpPLRJkRoA5Xl4lFV82XaEbMVKQlweONxPDdz8',
    },
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const trendingMovies = async () => {
  const trendingURL = 'https://api.themoviedb.org/3/trending/all/day';
  const trendingData = await fetchData(trendingURL);
  return trendingData.results;
};

export const movieDetails = async movieId => {
  const movieURL = `https://api.themoviedb.org/3/movie/${movieId}`;
  const movieData = await fetchData(movieURL);
  return movieData;
};

export const castData = async movieId => {
  const castURL = `https://api.themoviedb.org/3/movie/${movieId}/credits`;
  const castResponse = await fetchData(castURL);
  return castResponse.cast;
};

export const reviewsData = async movieId => {
  const reviewsURL = `https://api.themoviedb.org/3/movie/${movieId}/reviews`;
  const reviewsResponse = await fetchData(reviewsURL);
  return reviewsResponse.results;
};

export const filterMovies = async (query, page) => {
  const queryURL = `https://api.themoviedb.org/3/search/movie?query=${query}&page=${page}`;
  const searchedMovies = await fetchData(queryURL);
  return searchedMovies.results;
};
