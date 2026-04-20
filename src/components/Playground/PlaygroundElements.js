import styled from "styled-components";

export const PlayWrapper = styled.div`
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
    rgba(34, 197, 94, 0.85),
    rgba(22, 163, 74, 0.6)
  );
  z-index: 1;
`;

export const PlayHero = styled.div`
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

export const PlayContent = styled.div`
  max-width: 600px;
  color: #fff;

  @media screen and (max-width: 768px) {
    margin: 0 auto;
    text-align: center;
  }
`;

export const PlayTitle = styled.h1`
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

export const PlaySubtitle = styled.p`
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  margin-bottom: 25px;
  color: #dcfce7;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const PriceCard = styled.div`
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(14px);
  border-radius: 20px;
  padding: 24px;
  margin-top: 15px;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 
    0 8px 25px rgba(0,0,0,0.2),
    0 0 20px rgba(34, 197, 94, 0.4);

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  @media screen and (max-width: 480px) {
    padding: 20px 15px; 
  }
`;

export const PriceRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  align-items: center; /* This guarantees perfect vertical alignment */
  width: 100%;
  
  /* We removed the mobile column stacking so they always stay in the same line! */
`;

export const PriceLabel = styled.span`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 15px;
  
  display: flex;
  align-items: center; /* Centers the emoji and text vertically */

  .emoji {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px; /* Uniform width so "Session" and "Entry" start at the exact same pixel */
    margin-right: 5px;
  }

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const PriceValue = styled.span`
  font-weight: 800;
  font-size: 20px;
  background: rgba(255,255,255,0.25);
  padding: 6px 16px;
  border-radius: 20px;
  white-space: nowrap; 

  @media screen and (max-width: 768px) {
    font-size: 16px; /* Scaled down slightly so it fits perfectly next to the label on tiny phones */
    padding: 6px 12px;
  }
`;

export const HighlightText = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  margin-top: 15px;
  font-weight: 700;
  color: #dcfce7; 
  
  /* FIX: Align the calendar emoji */
  display: flex;
  align-items: center;

  .emoji {
    display: inline-block;
    width: 24px;
    text-align: left;
  }

  @media screen and (max-width: 480px) {
    justify-content: center; /* Keeps it centered on small phones */
  }
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