import styled from "styled-components";

export const OffersContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center; /* This forces the title and slider to the center */
  justify-content: center; /* Fixed typo from "centre" */
  text-align: center;
  margin-bottom: 10%;
  padding-top: 50px;
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

export const SliderWrapper = styled.div`
  width: 100%;
  margin-top: 40px;

  /* This forces the individual cards to sit perfectly in the center of their slide area */
  .slick-slide > div {
    display: flex;
    justify-content: center;
  }
`;

export const CardContainer = styled.div`
  width: 300px;
  overflow: hidden;
  position: relative;
`;

export const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
`;

export const ScrollImage = styled.img`
  width: 100%;
  transition: transform 0.5s ease-out;
  @media screen and (max-width: 1290px) {
    width: 50%;
  }
`;

export const InnerCard = styled.div`
  margin-top: 2%;
  height: 90px;
  border-radius: 24px;
  background-color: #fbf6fd;
  transition: transform 0.5s ease-out;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1290px) {
    width: 50%;
    height: 80px;
  }
`;

export const InnerCardHeading = styled.span`
  font-weight: 600;
  font-size: 18px;
  line-height: 32px;
  opacity: 0.8;
  @media screen and (max-width: 1290px) {
    font-size: 14px;
    line-height: 12px;
  }
`;

export const InnerCardSubText = styled.span`
  font-weight: 600;
  font-size: 12px;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  line-height: 24px;
  letter-spacing: 0.07em;
  @media screen and (max-width: 1290px) {
    font-size: 10px;
    line-height: 12px;
  }
`;

export const VectorImage = styled.img`
  width: 213px;
  height: 7px;
  transform: rotate(1deg);
  @media screen and (max-width: 1290px) {
    width: 123px;
  }
`;

export const TextOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: #fff;
  align-items: center;
  opacity: 0;
  transition: opacity 0.5s ease-out;
`;

export const HoverContainer = styled.div`
  &:hover ${ScrollImage} {
    transform: translateY(-100%);
  }

  &:hover ${TextOverlay} {
    opacity: 1;
  }
`;

export const CardImg = styled.img`
  height: 100%;
  width: auto;
`;