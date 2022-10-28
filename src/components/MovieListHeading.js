import React from "react";

const MovieListHeading = (props) => {
  return (
    <div className="col">
      <h1 style={{ cursor: "default", fontSize: "36px" }}>{props.heading}</h1>
    </div>
  );
};

export default MovieListHeading;
