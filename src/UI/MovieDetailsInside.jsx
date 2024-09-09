import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Box = styled.div`
  background-color: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
  border-right: 40px solid #f472b6; /* Adjust border color */
  border-radius: 10px;
  padding: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const DataOverlay = styled.div`
  position: absolute;
  top: 60%; /* Adjust for vertical centering */
  right:-180px; /* Matches the width of the border */
//   background-color: #f472b6;
  color: white;
  padding: 10px;
  border-radius: 5px;
  transform: rotate(-90deg);
  transform-origin: left center;
  white-space: nowrap;
  font-size: 1rem; /* Adjust font size as needed */
  text-align: center; /* Center the text inside the overlay */
`;

const MovieDetailsInside = () => {
  const data = useLoaderData();
  const navigate = useNavigate();
  const {
    Poster,
    Title,
    Actors,
    Country,
    DVD,
    Language,
    Plot,
    Runtime,
    Genre,
    BoxOffice
  } = data;

  // Convert runtime to hours and minutes
  const runtimeMinutes=Runtime.split(' ')[0];
  const hours = Math.floor(runtimeMinutes/ 60);
  const minutes = runtimeMinutes % 60;


  return (
    <Container className="container mx-auto p-4">
      {/* Flex container for row layout */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Movie Poster */}
        <div className="lg:w-1/3 flex-shrink-0">
          <img
            src={Poster}
            alt={Title}
            className="rounded-md max-h-80 object-cover mt-16"
          />
        </div>

        {/* Movie Details */}
        <Box className="w-full lg:w-2/3">
          {/* Data overlay */}
          <DataOverlay>
           <span className="text-xl text-center font-bold p-2">{BoxOffice?BoxOffice:"no"}</span>
          </DataOverlay>

          <h2 className="text-2xl font-bold mb-2">{Title}</h2>
          <p><strong>Actors:</strong> {Actors}</p>
          <p><strong>Country:</strong> {Country}</p>
          <p><strong>DVD Release:</strong> {DVD}</p>
          <p><strong>Language:</strong> {Language}</p>
          <p><strong>Runtime:</strong> {hours} {hours > 0 ? 'hour' : ''} {minutes} minutes</p>
          <p><strong>Genre:</strong> {Genre}</p>
          <p><strong>Plot:</strong> {Plot}</p>
          <span className="flex justify-center items-center mt-4">
            <button
              className="bg-pink-400 pl-4 pr-4 rounded-full text-white hover:bg-pink-600 min-w-full p-1"
              onClick={() => navigate(-1)}
            >
              Go Back
            </button>
          </span>
        </Box>
      </div>
    </Container>
  );
};

export default MovieDetailsInside;
