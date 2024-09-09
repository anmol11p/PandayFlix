import React from "react";
import { useLoaderData, NavLink } from "react-router-dom";
import styled from "styled-components";

const Box = styled.div`
  background-color: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15); /* Dark shadow */
  border-radius: 10px;
  width: 250px; /* Set a smaller fixed width */
  padding: 12px; /* Add some padding */
`;

const MovieDetails = () => {
  const data = useLoaderData();
  console.log(data);

  const { Poster, Title, imdbID } = data;

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col lg:flex-row justify-start items-center lg:items-start gap-6">
        {/* Movie Poster */}
        <Box className="w-full lg:w-auto grid justify-start py-2">
          <img
            src={Poster}
            alt={Title}
            className="rounded-md mb-4 max-h-80" /* Smaller poster size */
          />

          <NavLink
            className="flex bg-gray-800 hover:bg-black  text-white py-1.5 px-3 justify-center items-center rounded-md"
            to={`/movie/${imdbID}/details`} // for dynamic routing
          >
            Watch Now
          </NavLink>
        </Box>
      </div>
    </div>
  );
};

export default MovieDetails;
