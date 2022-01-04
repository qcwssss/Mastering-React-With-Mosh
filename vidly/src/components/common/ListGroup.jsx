import React from "react";
import { genres } from "../../services/fakeGenreService";
// genres.push({ _id: 1, name: "All Genres" });

const ListGroup = (props) => {
  const { currentGenre, onItemSelect } = props;
  console.log(currentGenre);
  return (
    <ul className="list-group">
      {genres.map((genre) => (
        <li
          key={genre._id}
          className="list-group-item list-group-item-action"
          onClick={() => onItemSelect(genre.name)}
        >
          {genre.name}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
