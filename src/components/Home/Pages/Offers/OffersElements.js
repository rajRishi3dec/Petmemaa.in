import styled from "styled-components";

export const OffersContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-bottom: 10%;
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
  font-weight: 500;
  font-size: 12px;
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
