import React from "react";
import { genres } from "../../services/fakeGenreService";
// genres.push({ _id: 1, name: "All Genres" });

const Genres = (props) => {
  const { currentGenre, onGenreChange } = props;
  console.log(currentGenre);
  return (
    <ul className="list-group">
      {genres.map((genre) => (
        <li
          key={genre._id}
          className="list-group-item list-group-item-action"
          onClick={() => onGenreChange(genre.name)}
        >
          {genre.name}
        </li>
      ))}
    </ul>
  );
};

export default Genres;
