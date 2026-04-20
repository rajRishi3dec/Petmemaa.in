import styled from "styled-components";

export const PoolWrapper = styled.div`
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
    rgba(2, 132, 199, 0.85),
    rgba(14, 165, 233, 0.6)
  );
  z-index: 1;
`;

export const PoolHero = styled.div`
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

export const PoolContent = styled.div`
  max-width: 600px;
  color: #fff;

  @media screen and (max-width: 768px) {
    text-align: center;
    margin: 0 auto;
  }
`;

export const PoolTitle = styled.h1`
  font-family: "M PLUS Rounded 1c", sans-serif !important;
  font-size: clamp(32px, 5vw, 52px);
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 15px;

  @media screen and (max-width: 480px) {
    line-height: 1.3; /* Gives stacked text a bit more breathing room on small phones */
  }
`;

export const PoolSubtitle = styled.p`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  margin-bottom: 25px;
  color: #e0f2fe;

  @media screen and (max-width: 768px) {
    font-size: 14px;
    line-height: 24px;
  }
`;

export const PriceCard = styled.div`
  position: relative;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(12px);
  border-radius: 20px;
  padding: 25px;
  margin-top: 15px;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.3);

  /* Glow effect */
  box-shadow: 
    0 8px 25px rgba(0,0,0,0.2),
    0 0 20px rgba(14, 165, 233, 0.4);

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  @media screen and (max-width: 480px) {
    padding: 20px 15px; /* Slightly less padding on tiny screens to maximize space */
  }
`;

export const PriceRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
  font-size: 15px;
  gap: 10px; /* Prevents text from smashing together on narrow screens */

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const PriceLabel = styled.span`
  opacity: 0.9;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const PriceValue = styled.span`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-size: 18px;
  font-weight: 800;
  color: #fff;
  background: rgba(255,255,255,0.2);
  padding: 5px 14px;
  border-radius: 20px;
  white-space: nowrap; /* Ensures the price tag doesn't break into two lines */

  @media screen and (max-width: 480px) {
    font-size: 16px;
    padding: 4px 12px;
  }
`;

export const HighlightText = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  margin-top: 15px;
  font-weight: 600;
  color: #bae6fd; /* Light blue to stand out slightly from the white text */

  @media screen and (max-width: 768px) {
    font-size: 13px;
  }
`;

/* =========================================
   FLOATING CALL BUTTON (STYLED COMPONENT)
   ========================================= */
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
      display: none; /* Hide text on small screens */
    }
  }
`;