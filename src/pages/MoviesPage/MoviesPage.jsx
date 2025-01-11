import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import MovieList from "../../components/MovieList/MovieList";
import { API_KEY } from "/src/constants.js";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearch = useCallback(async () => {
    if (!query) return;
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
    );
    setMovies(response.data.results);
  }, [query]);

  useEffect(() => {
    const queryParam = searchParams.get("query");
    if (queryParam) {
      setQuery(queryParam);
      handleSearch();
    }
  }, [searchParams, handleSearch]);

  const handleSearchClick = () => {
    if (query) {
      setSearchParams({ query });
      handleSearch();
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for movies..."
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />
      <button onClick={handleSearchClick}>Search</button>
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;
