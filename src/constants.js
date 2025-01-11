import axios from "axios";

const TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OTA1ZTg1ODY0NDFhY2E0MWNkMmM2NTRkMTEyZjQ3YSIsIm5iZiI6MTczNjQ1MzEyMC41MTIsInN1YiI6IjY3ODAyYzAwMmIyOWE5MThkMDRlNTFiMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cCh3WXNUA0iCflAdBKh4wWgGTBr3LjbNWDJTEkXS358";
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers.common["Authorization"] = "Bearer " + TOKEN;

axios.defaults.headers.common["accept"] = "application/json";

export async function getHomePageFilms() {
  const response = await axios.get("/trending/movie/day", {
    params: { language: "en-US" },
  });
  return response.data.results;
}

export async function getFilmById(id) {
  const response = await axios.get(`/movie/${id}`, {
    params: { language: "en-US" },
  });
  return response.data;
}

export async function getCastById(id) {
  const response = await axios.get(`/movie/${id}/credits`, {
    params: { language: "en-US" },
  });
  return response.data.cast;
}

export async function getReviewsById(id) {
  const response = await axios.get(`/movie/${id}/reviews`, {
    params: { language: "en-US" },
  });
  return response.data.results;
}

export async function getSearchFilms(query) {
  const response = await axios.get("/search/movie", {
    params: { language: "en-US", query },
  });
  return response.data.results;
}
