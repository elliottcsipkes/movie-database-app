import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { useState, useEffect, useRef } from "react";
import MovieList from "./components/MovieList";
import MovieListHeading from "./components/MovieListHeading";
import SearchBox from "./components/SearchBox";
import FavMovieList from "./components/FavMovieList";
import MovieInfo from "./components/MovieInfo";
import Header from "./components/Header";
import { initialMovies } from "./initialMovies";
import Footer from "./components/Footer";

function App() {
  const [movies, setMovies] = useState(initialMovies);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [infoIsActive, setInfoIsActive] = useState(false);
  const [movieId, setMovieId] = useState("");
  const [activeMovie, setActiveMovie] = useState([]);
  const [loading, setLoading] = useState(false);

  const getMovieRequest = async () => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=ebad9dd1`;
    const res = await fetch(url);
    const data = await res.json();
    if (data.Search) {
      setMovies(data.Search);
    }
  };
  const getSingleMovie = async () => {
    setLoading(true);
    const url = `http://www.omdbapi.com/?i=${movieId}&apikey=ebad9dd1`;
    const res = await fetch(url);
    const data = await res.json();
    setActiveMovie(data);
    setLoading(false);
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  useEffect(() => {
    getSingleMovie();
  }, [movieId]);

  useEffect(() => {
    const movieFavorites = JSON.parse(
      localStorage.getItem("react-movie-app-favorites")
    );
    if (movieFavorites) {
      setFavorites(movieFavorites);
    }
  }, []);

  const infoRef = useRef();
  useEffect(() => {
    const handleInfoClose = (e) => {
      if (!infoRef.current.contains(e.target)) {
        setInfoIsActive(false);
      }
    };

    document.body.addEventListener("mousedown", handleInfoClose);
    return () => {
      document.body.removeEventListener("mousedown", handleInfoClose);
    };
  }, [infoIsActive]);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("react-movie-app-favorites", JSON.stringify(items));
  };

  const addFavoriteMovie = (movie) => {
    if (!favorites.includes(movie)) {
      const newFavoriteList = [...favorites, movie];
      setFavorites(newFavoriteList);
      saveToLocalStorage(newFavoriteList);
    }
  };
  const removeFavoriteMovie = (movie) => {
    const newFavoriteList = favorites.filter(
      (favorite) => favorite.imdbID !== movie.imdbID
    );
    setFavorites(newFavoriteList);
    saveToLocalStorage(newFavoriteList);
  };
  const handleMovieInfo = (movie) => {
    if (movieId !== movie.imdbID) {
      setMovieId(movie.imdbID);
      setActiveMovie(movie);
    }
    setInfoIsActive(true);
  };

  return (
    <>
      <div className="container-fluid movie-app">
        <Header />
        {infoIsActive && (
          <MovieInfo
            movie={activeMovie}
            setInfoIsActive={setInfoIsActive}
            loading={loading}
            infoRef={infoRef}
          />
        )}
        <div className="row d-flex align-items-center mt-4 mb-2">
          <MovieListHeading heading="Movies" />
          <SearchBox
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </div>
        <div className="row">
          <MovieList
            handleFavorites={addFavoriteMovie}
            searchValue={searchValue}
            movies={movies}
            handleMovieInfo={handleMovieInfo}
          />
        </div>
        <div className="row d-flex align-items-center mt-4 mb-2">
          <MovieListHeading heading="Favorites" />
        </div>
        <div className="row">
          <FavMovieList
            favorites={favorites}
            handleRemoveFavorites={removeFavoriteMovie}
            handleMovieInfo={handleMovieInfo}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
