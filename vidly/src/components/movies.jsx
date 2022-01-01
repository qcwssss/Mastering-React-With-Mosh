import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  handleDelete = (movie) => {};

  render() {
    return (
      <div>
        <h1>Hello Movies</h1>
        <ul>
          {this.state.movies.forEach((movie) => {
            <li key={movie.title}> {movie.title} </li>;
          })}
          <button>delete</button>
        </ul>
      </div>
    );
  }
}

export default Movies;
