import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  background-color: #f9f9f9; /* Light background */
  color: black;
  padding: 40px 20px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1); /* Lighter shadow for depth */
`;

const AboutContent = styled.div`
  background-color: white; /* White content box */
  border-radius: 15px;
  padding: 30px;
  max-width: 800px;
  text-align: center;
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.1); /* Light shadow */
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333; /* Darker text for contrast */
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 20px;
  color: #555; /* Softer text color */
`;

const Highlight = styled.span`
  background-color: rgba(0, 0, 0, 0.05); /* Light highlight */
  padding: 0px 10px;
  border-radius: 5px;
`;

const About = () => {
  return (
    <AboutContainer>
      <AboutContent>
        <Title>About MovieRatings</Title>
        <Paragraph>
          Welcome to <Highlight>MovieRatings</Highlight>, your trusted source for authentic movie reviews, ratings, and recommendations.
        </Paragraph>
        <Paragraph>
          We believe that watching movies should be an enjoyable experience. Our mission is to help you discover and explore movies with reliable ratings and in-depth reviews.
        </Paragraph>
        <Paragraph className='py-3'>
          Whether you are looking for <Highlight>blockbuster hits</Highlight> or <Highlight>indie gems</Highlight>, we are here to guide you to the best movies to watch.
        </Paragraph>
      </AboutContent>
    </AboutContainer>
  );
};

export default About;
