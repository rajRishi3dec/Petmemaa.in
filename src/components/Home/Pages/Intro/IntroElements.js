import styled from "styled-components";

export const InfoContainer = styled.div`
  padding-top: 3%;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    335deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(255, 239, 239, 0.6125043767507004) 100%
  );
  @media screen and (max-width: 900px) {
    padding: 10px 0;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: auto;
  width: 100%;
  max-width: 1500px;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;

  @media screen and (max-width: 900px) {
    padding: 0 15px; /* Added slight padding so text doesn't touch screen edges */
  }
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: "col1 col2";

  @media screen and (max-width: 900px) {
    grid-template-areas: "col1 col1" "col2 col2";
    gap: 20px; /* Added gap to separate stacked columns on mobile */
  }
`;

export const Column1 = styled.div`
  padding: 0 8px;
  grid-area: col1;
  @media screen and (max-width: 900px) {
    padding: 0;
    text-align: center; /* Center text on mobile for better flow */
  }
`;

export const Column2 = styled.div`
  padding: 0 0 0 120px;
  grid-area: col2;
  @media screen and (max-width: 900px) {
    padding: 0;
    display: flex;
    justify-content: center; /* Centers the image perfectly on mobile */
  }
`;

export const ImgWrap = styled.img`
  max-width: 500px;
  width: 100%; /* Ensures it shrinks on very small screens */
  height: auto;
  @media screen and (max-width: 900px) {
    max-width: 290px;
    margin-bottom: 30px;
  }
`;

export const TextWrapper = styled.div`
  max-width: 600px;
  padding-top: 0;
  padding-bottom: 60px;
  @media screen and (max-width: 900px) {
    padding-bottom: 20px; /* Reduced padding for mobile */
  }
`;

export const TopLine = styled.span`
  font-weight: 300;
  opacity: 0.8;
  letter-spacing: 1.4px;
  font-size: 52px;
  line-height: 78px;
  @media screen and (max-width: 900px) {
    font-size: 38px;
    line-height: 48px;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
    line-height: 40px;
  }
`;

export const TopLineBold = styled.span`
  font-weight: 550;
  letter-spacing: 1.4px;
  font-size: 52px;
  line-height: 78px;
  @media screen and (max-width: 900px) {
    font-size: 38px;
    line-height: 48px;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
    line-height: 40px;
  }
`;

export const Heading = styled.p`
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 0.3px;
  color: #444;
  @media screen and (max-width: 480px) {
    font-size: 15px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  font-size: 18px;
  line-height: 24px;
  @media screen and (max-width: 900px) {
    margin-left: auto;
    margin-right: auto; /* Centers the subtitle on mobile */
  }
`;

export const GifWrap = styled.img`
  width: 20%;
  max-height: 60px;
  border-radius: 63px;
  @media screen and (max-width: 900px) {
    width: 15%;
    max-height: 70px;
  }
`;

export const ContactBtn = styled.button`
  background: #f7b2b0;
  color: #FFF;
  border-radius: 110px;
  border: none;
  width: 100%;
  max-width: 300px; /* Prevents button from being massively wide on desktop */
  height: 50px;
  padding: 0 20px;
  margin-top: 5%;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #d2f2fa;
    color: #333;
  }

  @media screen and (max-width: 900px) {
    margin: 20px auto 0 auto; /* Centers the button on mobile */
    display: block;
  }
`;

export const OurLovingTeam = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5%;
  font-weight: 500; /* FIXED TYPO: removed 'px' */
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 0.3px;

  @media screen and (max-width: 900px) {
    align-items: center; /* Center team title on mobile */
  }
`;

export const OurLovingTeamHeading = styled.span`
  font-weight: 600;
  font-size: 22px;
  line-height: 27px;
  display: block; 
`;

export const OurLovingTeamImages = styled.div`
  margin-top: 30px; 
  display: flex;
  align-items: center;
  gap: 40px; 
  padding-bottom: 120px; 

  /* FIXED FOR MOBILE: Makes the images wrap to a new line instead of overflowing */
  @media screen and (max-width: 900px) {
    flex-wrap: wrap; 
    justify-content: center; 
    padding-bottom: 60px; /* Reduced bottom padding for mobile */
    gap: 20px;
  }
`;

export const TeamMemberWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  span {
    position: absolute;
    bottom: -10px; 
    opacity: 0; 
    background: #ec4899; 
    color: #ffffff;
    padding: 6px 14px;
    border-radius: 20px;
    font-size: 13px;
    font-weight: 600;
    font-family: 'Inter', sans-serif;
    white-space: nowrap;
    z-index: 12;
    pointer-events: none; 
    box-shadow: 0 4px 10px rgba(236, 72, 153, 0.4); 
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transform: scale(0.5); 
  }

  &:hover {
    img {
      transform: scale(5.0); 
      z-index: 10; 
      border-radius: 30%; 
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15); 
    }
    
    span {
      opacity: 1; 
      bottom: -140px; 
      transform: scale(1); 
    }
  }

  /* Adjust hover scale on mobile so it doesn't break the screen layout */
  @media screen and (max-width: 900px) {
    &:hover {
      img {
        transform: scale(3.5); /* Slightly smaller scale for mobile */
      }
      span {
        bottom: -90px;
      }
    }
  }
`;

export const TeamImage = styled.img`
  width: 64px;
  height: 64px;
  transform: scale(1.5); 
  border-radius: 45%; 
  object-fit: cover; 
  position: relative; 
  z-index: 1; 
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
`;

export const TeamImageText = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0.03em;
  opacity: 0.5;
`;

// components for secondary.js
// ------------------------------------------------------------------
export const MainHeading = styled.h1`
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

export const Highlight = styled.span`
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    position: absolute;
    bottom: 4px;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: #fca5a5; 
  }
`;

export const FounderName = styled.h2`
  font-size: 28px;
  color: #ec4899; 
  font-weight: 400;
  margin-top: 0;
  margin-bottom: 8px;
`;

export const FounderTitle = styled.p`
  margin-top: 0;
  margin-bottom: 30px;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 0.3px;
  color: #444;
`;

export const QuoteContainer = styled.div`
  border-left: 4px solid #fca5a5; 
  padding-left: 20px;
  margin-left: 4px;

  @media screen and (max-width: 900px) {
    margin-left: 0; /* Align perfectly on mobile */
  }
`;

export const QuoteText = styled.p`
  font-family: 'Inter', sans-serif;
  font-style: italic;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 0.3px;
  color: #444;
  margin: 0;
  text-align: justify; 
`;

export const SecondaryContainer = styled.div`
  scroll-margin-top: 100px; 
  padding: 100px; 
  background: #EAF7FC;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0;

  /* FIXED FOR MOBILE: 100px padding is way too large for phones */
  @media screen and (max-width: 900px) {
    padding: 50px 20px; 
  }
`;

export const SecondaryWrapper = styled.div`
  display: flex;
  align-items: center; 
  justify-content: center;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  gap: 60px; 

  @media screen and (max-width: 900px) {
    flex-direction: column; 
    align-items: center; 
    text-align: center;
    gap: 30px; /* Reduced gap between stacked items on mobile */
  }
`;

export const ImgWrapLook = styled.img`
  max-width: 550px;
  width: 100%; 
  height: auto; 
  border-radius: 20px;
  object-fit: contain; 

  @media screen and (max-width: 900px) {
    max-width: 100%; /* Allows image to fill the safe mobile area */
  }
`;

export const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 600px;

  @media screen and (max-width: 900px) {
    align-items: center;
    width: 100%;
    
    .quote-container {
       text-align: left;
    }
  }
`;