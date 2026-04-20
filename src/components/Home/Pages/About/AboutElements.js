import styled from "styled-components";

export const AboutContainer = styled.div`
  scroll-margin-top: 100px; /* ADDED THIS: Prevents the navbar from hiding the heading! */
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px 20px;
  width: 100%;
`;

export const AboutWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  gap: 50px;

  /* Stack image on top of text for mobile/tablets */
  @media screen and (max-width: 900px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const AboutImageWrap = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AboutImage = styled.img`
  max-width: 100%;
  width: 500px; /* Adjust based on your actual image size */
  height: auto;
  object-fit: contain;

  @media screen and (max-width: 900px) {
    width: 80%;
  }
`;

export const AboutContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media screen and (max-width: 900px) {
    align-items: center;
  }
`;

export const AboutHeading = styled.h1`
  font-size: 38px;
  color: #1a202c; 
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 6px; 

  @media screen and (max-width: 768px) {
    font-size: 32px;
    margin-bottom: 8px; 
  }
`;

export const AboutSubheading = styled.h2`
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 24px;
  color: #ec4899;
  margin-bottom: 12px;

  @media screen and (max-width: 480px) {
    font-size: 20px;
  }
`;

export const AboutPoints = styled.ul`
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 0.3px;
  color: #444;

  margin-bottom: 35px;
  max-width: 550px;
  padding-left: 18px;

  li {
    margin-bottom: 14px;
    text-align: justify; /* LEFT + RIGHT ALIGN */
    list-style: none;
    position: relative;
  }

  /* Custom bullet */
  li::before {
    content: "🐾";
    position: absolute;
    left: -22px;
    top: 2px;
  }

  @media screen and (max-width: 900px) {
    text-align: center;

    li {
      text-align: center;
    }

    li::before {
      position: static;
      margin-right: 6px;
    }
  }

  @media screen and (max-width: 480px) {
    font-size: 15px;
  }
`;

export const EnquireButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 55px;
  padding: 0 25px;
  border-radius: 30px;
  color: white;
  font-size: 16px;
  font-weight: 600;
  font-family: 'Inter', sans-serif;
  text-decoration: none;
  background-color: #ec4899; /* PetMeMaa Pink */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(236, 72, 153, 0.4); /* Glowing pink shadow on hover */
  }

  @media screen and (max-width: 900px) {
    width: 100%;
    max-width: 280px; /* Keeps it from stretching too wide on phones */
    height: 50px;
    padding: 0 20px;
    font-size: 15px;
  }
`;

export const HighlightName = styled.span`
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 16px;

  @media screen and (max-width: 480px) {
    font-size: 15px;
  }
`;