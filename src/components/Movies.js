import React from "react";
import { movies } from "../data";

function Movies() {
  return(
  <div>
  <h1>Movies Page</h1>
  <div>
    {movies.map((movie) => (
      <div key={movie.title}>
        <h2>{movie.title}</h2>
        <p>Time: {movie.time} minutes</p>
        <ul>
          {movie.genres.map((genre, index) => (
            <li key={index}>{genre}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
</div>
);
}

export default Movies;
