import styled from "styled-components";

export const DiningContainer = styled.div`
  margin-top: 5%;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 900px) {
    padding: 100px 0;
  }
`;

export const DiningWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 490px;
  max-width: 1500px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 10%;
  justify-content: center;
  background-color: #6db3d7;
  overflow: visible;
  @media screen and (max-width: 900px) {
    padding: 0 0px;
  }
`;

export const DiningRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-column-gap: 4%;
  grid-template-areas: "col1 col2";

  @media screen and (max-width: 900px) {
    grid-template-areas: "col1 col1" "col2 col2";
  }
`;

export const Column1 = styled.div`
  grid-area: col1;
  display: flex;
  justify-content: flex-end;
`;

export const ImgWrap = styled.img`
  width: 75%;
  position: relative;
  top: -7vh;

  /* FIXED: Reset overlap and adjust width for mobile */
  @media screen and (max-width: 900px) {
    top: 0; 
    width: 90%; 
    margin-top: 40px; /* Gives a little breathing room when stacked */
  }
`;

// Col2 Stuff
export const Column2 = styled.div`
  grid-area: col2;
  margin-right: 10%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (max-width: 900px) {
    margin-right: 0; /* Reset for mobile */
    align-items: center; 
    text-align: center;
    padding: 0 20px; /* Adds safe spacing on the edges for mobile */
  }
`;

export const Col2Title = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 50px;
  color: #ffffff;

  /* FIXED: Scales down font size for smaller screens */
  @media screen and (max-width: 900px) {
    font-size: 32px;
    line-height: 40px;
  }
`;

export const Col2Subtext = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 33px;
  color: #ffffff;

  /* FIXED: Scales down font size for smaller screens */
  @media screen and (max-width: 900px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const DiningBtn = styled.button`
  border: none;
  width: 188px;
  height: 56px;
  background: #ffffff;
  border-radius: 110px;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #6db3d7; /* FIXED: Changed from white so text is visible on the white button */
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
    background: #f8f9fa;
  }
`;

export const DiningImage = styled.img`
  height: 50%;
  width: 100%;
  margin-bottom: 7%;
`;

// 2nd Part ------------------------------------------------------------------
export const DiningWrapper2 = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

export const Title = styled.h1`
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

export const SubText2 = styled.span`
  font-style: normal;
  font-weight: 300;
  font-size: 30px;
  line-height: 72px;

  @media screen and (max-width: 900px) {
    font-size: 18px;
    line-height: 42px;
  }
`;

export const ImgWrapCar = styled.img`
  width: 50%;
  @media screen and (max-width: 900px) {
    width: 90%;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 5%;
`;

export const DiningBtn2 = styled.button`
  background: #f7b2b0;
  border-radius: 110px;
  border: none;
  color: #fff;  
  width: 100%; /* FIXED: Changed from 130% to prevent horizontal scrolling */
  max-width: 250px; /* Constrains the button from getting too wide on desktop */
  height: 50px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease;
  
  &:hover {
    background: #d2f2fa; 
    color: #1a202c; /* Optional: Makes text darker on the light blue hover state for better contrast */
  }
  
  @media screen and (max-width: 900px) {
    max-width: 150px; /* Keeps your button neat and compact on mobile */
  }
`;