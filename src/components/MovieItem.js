import React from "react";

const MovieItem = props => {
  console.log(props);
  const {movie, removeMovie} = props;
  return (
    <div key={movie.id}>
      <p>{movie.title}</p>;
      <button onClick={removeMovie.bind(null, movie)}>
        Delete movie
      </button>
    </div>
  );
};

export default MovieItem;
