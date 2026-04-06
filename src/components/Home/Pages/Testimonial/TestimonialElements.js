import styled from "styled-components";

export const TestimonialContainer = styled.div`
  background: #EAF7FC; 
  padding: 80px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  overflow: hidden;
  scroll-margin-top: 100px;

  /* MOBILE FIX: Less padding so it doesn't take up the whole phone screen */
  @media screen and (max-width: 768px) {
    padding: 50px 15px;
  }
`;

export const TitleContainer = styled.div`
  text-align: center;
  margin-bottom: 50px;

  @media screen and (max-width: 768px) {
    margin-bottom: 30px;
  }
`;

export const Title = styled.h1`
  font-size: 46px;
  color: #1a202c;
  font-weight: 800;
  margin-bottom: 15px;
  font-family: 'Inter', sans-serif;
  letter-spacing: -0.5px;

  /* MOBILE FIX: Scaled down heading */
  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
`;

export const SubText = styled.p`
  font-size: 18px;
  color: #718096;
  font-family: 'Inter', sans-serif;
  font-weight: 700;

  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`;

export const SliderWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 0; 

  /* Slick Slider custom styles */
  .slick-slide {
    transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
    opacity: 0.4; 
    transform: scale(0.88); 
    padding: 20px 0; /* Restored proper padding */
  }

  /* The active card in the center pops out beautifully */
  .slick-center {
    opacity: 1;
    transform: scale(1.05); 
    z-index: 10;
  }

  .slick-center div > div {
    box-shadow: 0 20px 40px rgba(236, 72, 153, 0.15);
  }

  .slick-dots li button:before {
    color: #ec4899; 
    font-size: 12px;
  }

  /* MOBILE FIX: Less aggressive scaling on small screens so side cards remain visible */
  @media screen and (max-width: 768px) {
    .slick-slide {
      transform: scale(0.95);
    }
    .slick-center {
      transform: scale(1.02);
    }
  }
`;

export const ReviewCard = styled.div`
  background: #ffffff;
  border-radius: 20px;
  padding: 40px 20px; /* Increased horizontal padding slightly for breathing room */
  display: flex !important; 
  flex-direction: column;
  
  /* --- THE FIX --- */
  /* This shifts the card up 20px safely without breaking Slick Slider */
  position: relative;
  top: -20px;
  /* --------------- */

  align-items: center;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05); 
  margin: 20px 10px; /* Adjusted margins to fit nicely on phones */
  
  /* MOBILE FIX: Changed fixed height to min-height so text wraps correctly on phones */
  min-height: 380px; 
  height: 100%; 
  
  justify-content: space-between;
  border-top: 6px solid #f7b2b0; 
  transition: box-shadow 0.3s ease; /* Removed transform transition here to avoid conflicts */

  /* Large decorative quote mark in the background */
  &::before {
    content: '"';
    position: absolute;
    top: 10px;
    left: 20px;
    font-size: 100px;
    color: rgba(247, 178, 176, 0.15); 
    font-family: serif;
    line-height: 1;
    z-index: 0;
  }

  @media screen and (max-width: 768px) {
    padding: 30px 15px;
  }
`;

export const Stars = styled.div`
  color: #fbbf24; 
  font-size: 26px;
  letter-spacing: 3px;
  margin-bottom: 20px;
  z-index: 1; 

  @media screen and (max-width: 768px) {
    font-size: 22px; /* Slightly smaller stars on mobile */
  }
`;

export const ReviewText = styled.p`
  font-size: 15px;
  color: #4a5568;
  font-style: italic;
  font-weight: 600;
  line-height: 1.8;
  margin-bottom: 20px;
  flex-grow: 1; 
  font-family: 'Inter', sans-serif;
  z-index: 1;

  @media screen and (max-width: 768px) {
    font-size: 14px;
    line-height: 1.6;
  }
`;

export const GoogleLogo = styled.img`
  width: 35px;
  height: 35px;
  margin-bottom: 12px;
  object-fit: contain;
  justify-self: center;
`;

export const ReviewerName = styled.h3`
  font-size: 17px;
  color: #1a202c;
  font-weight: 700;
  margin: 0;
  font-family: 'Inter', sans-serif;

  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`;