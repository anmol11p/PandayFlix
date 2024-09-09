import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({ currMovie }) => {
  const { Poster, Title, imdbID } = currMovie;
  return (
    <li className="flex flex-col items-center bg-white rounded-md shadow-md text-red-600 sm:w-full md:w-1/4 lg:w-1/5 p-2 my-4">
      <img
        src={Poster}
        alt={Title}
        className="h-80 object-cover rounded-md mb-2 mb-10"
      />
      <NavLink
        className="flex bg-black text-white w-full justify-center items-center p-2 rounded-b-md"
        to={`/movie/${imdbID}`}   // For dynamic routing
      >
        Watch
      </NavLink>
    </li>
  );
};

export default Card;
