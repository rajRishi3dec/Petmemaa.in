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
    padding: 0 0px;
  }
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;

  /* Grid template area, used to define orientation of the columns */
  grid-template-areas: "col1 col2";

  @media screen and (max-width: 900px) {
    grid-template-areas: "col1 col1" "col2 col2";
  }
`;

// Declare what col1 is
export const Column1 = styled.div`
  padding: 0 8px;
  grid-area: col1;
`;

// Declare what col2 is
export const Column2 = styled.div`
  padding: 0 0 0 120px;
  grid-area: col2;
  @media screen and (max-width: 900px) {
    padding: 0 0 0 50px;
  }
`;

export const ImgWrap = styled.img`
  max-width: 500px;
  @media screen and (max-width: 900px) {
    max-width: 290px;
    margin-bottom: 50px;
  }
`;

export const TextWrapper = styled.div`
  max-width: 600px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const TopLine = styled.span`
  font-weight: 300;
  opacity: 0.8;
  letter-spacing: 1.4px;
  font-size: 52px;
  line-height: 78px;
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
  @media screen and (max-width: 480px) {
    font-size: 32px;
    line-height: 40px;
  }
`;

export const Heading = styled.p`
  font-family: 'Inter', sans-serif;
  font-style: normal;
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
  height: 50px;
  padding-right: 10px;
  padding-left: 10px;

  margin-right: 10%;
  margin-top: 5%;
  &:hover {
    background: #d2f2fa; /* Set your desired hover color here */
  }
`;

export const OurLovingTeam = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5%;
  font-weight: 500px;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 0.3px;
`;

export const OurLovingTeamHeading = styled.span`
  font-style: normal;
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
  /* Added padding so the massive scale(5.0) image and text have room to expand downwards */
  padding-bottom: 120px; 
`;

/* The new wrapper that controls both the image and the name tag */
export const TeamMemberWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  /* Normal State for the Name (Hidden) */
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

  /* What happens when you hover over the team member */
  &:hover {
    img {
      transform: scale(5.0); 
      z-index: 10; 
      border-radius: 30%; 
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15); 
    }
    
    span {
      opacity: 1; 
      bottom: -140px; /* Drops down under the 5.0 image */
      transform: scale(1); 
    }
  }
`;

export const TeamImage = styled.img`
  width: 64px;
  height: 64px;
  margin-right: 2%;
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
  margin-top: 10px;
  margin-bottom: 6px; 
  margin-top: 0;

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
  margin-bottom: 8px;
  margin-top: 0;
`;

export const FounderTitle = styled.p`
  margin-bottom: 30px;
  margin-top: 0;
  font-weight: 400;
  font-family: 'Inter', sans-serif;
  font-style: normal;
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
`;

export const QuoteText = styled.p`
  font-family: 'Inter', sans-serif;
  font-style: Italic;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 0.3px;
  color: #444;
  margin: 0;
  text-align: justify; 

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const SecondaryContainer = styled.div`
  scroll-margin-top: 100px; 
  /* ZERO bottom padding to remove the gap above the next image */
  padding: 100px; 
  background: #EAF7FC;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0;
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
  }
`;

export const ImgWrapLook = styled.img`
  /* INCREASED size based on previous request */
  max-width: 550px;
  width: 100%; 
  height: auto; 
  border-radius: 20px;
  object-fit: contain; 

  @media screen and (max-width: 900px) {
    max-width: 400px;
    height: auto; 
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
    .quote-container {
       text-align: left;
    }
  }
`;