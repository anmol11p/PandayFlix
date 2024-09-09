import React from "react";
import Card from "../UI/Card";
import { useLoaderData } from "react-router-dom";
const Movie = () => {
  const movieData = useLoaderData(); // Getting Data from App.jsx
  return (
    <ul className="flex flex-wrap gap-4 justify-center ">
      {movieData.Search.map((currMovie) => (
        <Card currMovie={currMovie} key={currMovie.imdbID} />
      ))}
    </ul>
  );
};

export default Movie;
