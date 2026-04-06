import styled from "styled-components";


export const TestimonialContainer = styled.div`
  background: #EAF7FC; /* Kept your light blue background */
  padding: 80px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  overflow: hidden;
  scroll-margin-top: 100px;
`;

export const TitleContainer = styled.div`
  text-align: center;
  margin-bottom: 50px;
`;

export const Title = styled.h1`
  font-size: 46px;
  color: #1a202c;
  font-weight: 800;
  margin-bottom: 15px;
  font-family: 'Inter', sans-serif;
  letter-spacing: -0.5px;

  @media screen and (max-width: 768px) {
    font-size: 36px;
  }
`;

export const SubText = styled.p`
  font-size: 18px;
  color: #718096;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
`;

export const SliderWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 0; /* Extra padding so the pop-out shadow isn't cut off */

  /* Slick Slider custom styles */
  .slick-slide {
    transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
    opacity: 0.4; 
    transform: scale(0.88); /* Shrinks side cards */
    padding: 20px 0;
  }

  /* The active card in the center pops out beautifully */
  .slick-center {
    opacity: 1;
    transform: scale(1.05); 
    z-index: 10;
  }

  .slick-center div > div {
    /* Gives the center card a stronger shadow */
    box-shadow: 0 20px 40px rgba(236, 72, 153, 0.15);
  }

  .slick-dots li button:before {
    color: #ec4899; 
    font-size: 12px;
  }
`;

export const ReviewCard = styled.div`
  background: #ffffff;
  border-radius: 20px;
  padding: 40px 30px;
  display: flex !important; 
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05); 
  margin: 0 15px;
  height: 420px;
  justify-content: space-between;
  border-top: 6px solid #f7b2b0; /* Pink accent bar at the top */
  transition: box-shadow 0.3s ease;


  /* Large decorative quote mark in the background */
  &::before {
    content: '"';
    position: absolute;
    top: 10px;
    left: 20px;
    font-size: 100px;
    color: rgba(247, 178, 176, 0.15); /* Faint pink */
    font-family: serif;
    line-height: 1;
    z-index: 0;
  }
`;

export const Stars = styled.div`
  color: #fbbf24; /* Richer Gold */
  font-size: 26px;
  letter-spacing: 3px;
  margin-bottom: 20px;
  z-index: 1; /* Keeps it above the quote mark */
`;

export const ReviewText = styled.p`
  font-size: 15px;
  color: #4a5568;
  font-style: italic;
  font-weight: 600;
  line-height: 1.8;
  margin-bottom: 20px;
  flex-grow: 1; /* Fixed your 'aa' typo here! */
  font-family: 'Inter', sans-serif;
  z-index: 1;
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
`;