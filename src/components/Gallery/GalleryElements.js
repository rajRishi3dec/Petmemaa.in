import styled from "styled-components";

export const GalleryContainer = styled.div`
  background: #ffffff;
  padding: 5px 20px 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh; /* Ensures the page is at least full height */
`;

export const TextWrapper = styled.div`
  text-align: center;
  max-width: 800px;
  margin-bottom: 50px;
`;

export const Heading = styled.h1`
  font-size: 42px;
  color: #1a202c; 
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 6px; 

  @media screen and (max-width: 768px) {
    font-size: 32px;
    margin-bottom: 8px; 
  }
`;

export const SubHeading = styled.h2`
  font-size: 22px;
  color: #ec4899; /* Slate blue/gray */
  font-weight: 600;
  margin-bottom: 15px;
  font-family: 'Inter', sans-serif;
`;

export const Description = styled.p`
  font-size: 16px;
  color: #718096;
  font-family: 'Inter', sans-serif;
`;

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 columns on desktop */
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  /* Responsive Design: Adjusts columns for smaller screens */
  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr); /* 3 columns on tablets */
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* 2 columns on large phones */
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr; /* 1 column on small phones */
  }
`;

export const ImageCard = styled.div`
  width: 100%;
  height: 350px; /* Forces all images to be the same height */
  border-radius: 16px; /* Rounded corners like the screenshot */
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px); /* Slight hover effect */
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures images fill the box without squishing */
`;