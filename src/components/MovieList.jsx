import React from "react";
import "./MovieList.css";

function MovieList({ movies }) {
  return (
    <div className="movies">
      {movies.map((movie, index) => (
        <div key={index} className="movie-card">
          <img src={movie.poster} alt={movie.title} />
          <h3>{movie.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
