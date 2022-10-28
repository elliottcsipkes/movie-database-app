import React from "react";
import AddFavorite from "./AddFavorite";

const MovieList = ({ movies, handleFavorites, handleMovieInfo }) => {
  return (
    <>
      {movies.map((movie, index) => {
        return (
          <div
            key={movie.imdbID}
            className="image-container d-flex justify-content-start m-3"
          >
            <img
              src={movie.Poster}
              alt="movie"
              onClick={() => handleMovieInfo(movie)}
            />
            <div
              onClick={() => handleFavorites(movie)}
              className="overlay d-flex align-items-center justify-content-center fav-btn"
            >
              <AddFavorite />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default MovieList;
