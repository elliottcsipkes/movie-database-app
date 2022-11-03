import React from "react";
import { FaTimes } from "react-icons/fa";
import { RotatingLines } from "react-loader-spinner";

const MovieInfo = ({ movie, setInfoIsActive, loading, infoRef }) => {
  const {
    Title,
    Year,
    Rated,
    Genre,
    Runtime,
    Director,
    Actors,
    Plot,
    Poster,
    BoxOffice,
    Metascore,
    imdbRating,
  } = movie;
  return (
    <div className="outside">
      <div className="info-card" ref={infoRef}>
        <div className={`${loading ? "loading" : "no-display"}`}>
          <RotatingLines
            strokeColor="white"
            strokeWidth="3"
            animationDuration="1"
            width="40"
            className="center"
            visible={loading}
          />
        </div>
        <div className={`${loading ? "no-display" : "info-body"}`}>
          <div className="info-head">
            <FaTimes
              variant="light"
              className="close-icon"
              onClick={() => setInfoIsActive(false)}
            />
          </div>
          <div className="info-top">
            <h5>{Title}</h5>
            <p>
              <strong>{Year}</strong>
            </p>
          </div>
          <div className="info-content">
            <div className="left">
              <img src={Poster} alt={`${Title} poster`} className="poster" />
            </div>
            <div className="right">
              <div className="ratings">
                <p>
                  <strong>IMDB Rating:</strong>
                  {` ${imdbRating}`}
                </p>
                <p>
                  {" "}
                  <strong>Metacritic Rating:</strong>
                  {` ${Metascore}`}
                </p>
              </div>

              <div className="info-bot">
                <p>
                  <strong>Rated:</strong>
                  {` ${Rated}`}
                </p>
                <p>
                  <strong>Genre:</strong>
                  {` ${Genre}`}
                </p>
                <p>
                  <strong>Runtime:</strong>
                  {` ${Runtime}`}
                </p>
                <p>
                  <strong>Director:</strong>
                  {` ${Director}`}
                </p>
                <p>
                  <strong>Actors:</strong>
                  {` ${Actors}`}
                </p>
                <p>
                  <strong>Box Office Sales:</strong>
                  {` ${BoxOffice}`}
                </p>
                <p>
                  <strong>Plot:</strong>
                  {` ${Plot}`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
