import styled from "styled-components";

export const BoutiqueWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 110px);
  background: url(${props => props.bg}) center 40% / cover no-repeat;
  position: relative;
  display: flex;
`;

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to right,
    rgba(12, 74, 110, 0.85),
    rgba(2, 132, 199, 0.6)
  );
  z-index: 1;
`;

export const BoutiqueHero = styled.div`
  width: 100%;
  z-index: 2;
  padding: 20px 8%;

  display: flex;
  align-items: center;
  height: 100%;

  @media screen and (max-width: 768px) {
    padding: 30px 20px;
    text-align: center;
    justify-content: center;
  }
`;

export const BoutiqueContent = styled.div`
  max-width: 600px;
  color: #fff;

  @media screen and (max-width: 768px) {
    margin: 0 auto;
    text-align: center;
  }
`;

export const BoutiqueTitle = styled.h1`
  font-family: "M PLUS Rounded 1c", sans-serif !important;
  font-weight: 600 !important;
  font-size: 42px !important;
  margin-bottom: 15px;
  line-height: 1.2;

  @media screen and (max-width: 768px) {
    font-size: 30px !important;
  }

  @media screen and (max-width: 480px) {
    line-height: 1.3; 
  }
`;

export const BoutiqueSubtitle = styled.p`
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  margin-bottom: 25px;
  color: #e0f2fe;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const InfoCard = styled.div`
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(14px);
  border-radius: 20px;
  padding: 24px;
  margin-top: 15px;
  color: #fff;

  border: 1px solid rgba(255, 255, 255, 0.3);

  box-shadow: 
    0 8px 25px rgba(0,0,0,0.2),
    0 0 20px rgba(2, 132, 199, 0.4);

  h3 {
    margin-bottom: 15px; 
    font-size: 18px;
    font-weight: 700;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  @media screen and (max-width: 480px) {
    padding: 20px 15px; 
  }
`;

export const FeatureList = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 10px; /* Reduced margin since there is no button below it anymore */

  span {
    background: rgba(255,255,255,0.25);
    padding: 6px 12px;
    border-radius: 15px;
    font-size: 14px;
    font-weight: 600;
  }

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

export const FeatureItem = styled.span``;

/* =========================================
   PLAIN TEXT COMPONENT
   ========================================= */
export const StoreText = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
  margin-top: 15px;
  line-height: 1.5;
  
  /* Add your padding here! */
  padding-bottom: 10px; /* Pushes the bottom edge of the card down */
  padding-left: 10px;   /* Optional: indents it slightly */
  padding-right: 10px;
`;

export const FloatingCallBtn = styled.a`
  position: fixed;
  bottom: 30px;
  right: 30px;
  background-color: #ec4899 !important; 
  color: #ffffff !important; 
  opacity: 1 !important;
  padding: 15px 25px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 16px;
  text-decoration: none;
  box-shadow: 0 10px 30px rgba(236, 72, 153, 0.4);
  z-index: 9999; 
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  svg {
    width: 24px;
    height: 24px;
  }

  &:hover {
    transform: scale(1.05) translateY(-5px);
    background-color: #db2777 !important;
    color: #ffffff !important;
    box-shadow: 0 15px 35px rgba(236, 72, 153, 0.5);
  }

  @media (max-width: 768px) {
    bottom: 20px;
    right: 20px;
    padding: 12px 20px;
    font-size: 14px;
    box-shadow: 0 8px 20px rgba(236, 72, 153, 0.3);

    svg {
      width: 20px;
      height: 20px;
    }
  }

  @media (max-width: 480px) {
    padding: 16px;
    border-radius: 50%;

    span {
      display: none; 
    }
  }
`;