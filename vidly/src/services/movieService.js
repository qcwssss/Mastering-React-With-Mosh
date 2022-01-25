import http from "./httpService";
import config from "../config.json";

const apiEndpoint = config.apiUrl + "/movies";

export function getMovies() {
  return http.get(apiEndpoint);
}

export function getMovie(movieId) {
  return http.get(apiEndpoint + "/" + movieId);
}

export function saveMovie(movie) {
  return http.post(apiEndpoint);
}

export function deleteMovie(movieId) {
  return http.delete(apiEndpoint + "/" + movieId);
}
