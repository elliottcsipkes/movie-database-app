import React from "react";
import RemoveFavorite from "./RemoveFavorite";

const FavMovieList = ({
  favorites,
  handleRemoveFavorites,
  handleMovieInfo,
}) => {
  return (
    <>
      {favorites.map((movie, index) => {
        return (
          <div
            key={favorites.imdbID}
            className="image-container d-flex justify-content-start m-3"
          >
            <img
              src={movie.Poster}
              alt="movie"
              onClick={() => handleMovieInfo(movie)}
            />
            <div
              onClick={() => handleRemoveFavorites(movie)}
              className="overlay d-flex align-items-center justify-content-center"
            >
              <RemoveFavorite />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default FavMovieList;
