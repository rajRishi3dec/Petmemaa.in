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
  font-size: 42px;
  color: #1a202c; /* Dark slate blue/black */
  font-weight: 800;
  margin-bottom: 15px;
  font-family: 'Inter', sans-serif;

  @media screen and (max-width: 768px) {
    font-size: 34px;
  }
`;

export const AboutSubheading = styled.h2`
  font-size: 22px;
  color: #4a5568;
  font-weight: 600;
  margin-bottom: 20px;
  font-family: 'Inter', sans-serif;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

export const AboutText = styled.p`
  font-size: 16px;
  color: #718096;
  line-height: 1.6;
  margin-bottom: 35px;
  max-width: 550px;
  font-family: 'Inter', sans-serif;

  @media screen and (max-width: 900px) {
    text-align: center;
  }
`;

export const EnquireButton = styled.a`
  /* Gradient background matching the screenshot (light blue to light pink) */
  background: linear-gradient(90deg, #ccecf8 0%, #f7b2b0 100%);
  color: #1a202c;
  padding: 12px 30px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  font-family: 'Inter', sans-serif;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  }
`;