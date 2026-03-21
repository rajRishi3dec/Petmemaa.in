import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const TitleContainer = styled.div`
  text-align: center;
  margin-bottom: 3%;
  margin-top: 10%;
`;
export const Title = styled.h1`
  font-weight: 500;
  font-size: 48px;
  line-height: 62px;
  opacity: 0.8;
`;

export const SubText = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  opacity: 0.7;
`;

export const ProductsContainer = styled.div`
  @media screen and (max-width: 900px) {
    padding: 100px 0;
  }
`;

export const ProductsWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: auto;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;

  @media screen and (max-width: 900px) {
    padding: 0 0px;
  }
`;

export const ServicesRow = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr); /* Two rows */
  grid-template-columns: repeat(4, 1fr); /* Four columns */
  gap: 10px;

  /* Grid template area, used to define orientation of the columns */
  grid-template-areas: "col1 col2 col3 col4" "col5 col6 col7 col8";

  @media screen and (max-width: 900px) {
    grid-template-areas: "col1 col1" "col2 col2" "col3 col3" "col4 col4" "col5 col5" "col6 col6" "col7 col7" "col8 col8";
  }
`;

// Declare what col1 is
export const Column1 = styled.div`
  grid-area: col1;
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

// Declare what col2 is
export const Column2 = styled.div`
  grid-area: col2;
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

// Declare what col3 is
export const Column3 = styled.div`
  grid-area: col3;
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

// Declare what col4 is
export const Column4 = styled.div`
  grid-area: col4;
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

// Declare what col5 is
export const Column5 = styled.div`
  grid-area: col5;
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

// Declare what col6 is
export const Column6 = styled.div`
  grid-area: col6;
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

// Declare what col7 is
export const Column7 = styled.div`
  grid-area: col7;
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

// Declare what col8 is
export const Column8 = styled.div`
  grid-area: col8;
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

// Text inside services box
export const TitleProducts = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
`;

export const GetNowBtn = styled.button`
  background: transparent;
  border: 1px solid #f7b2b0;
  border-radius: 110px;
  box-sizing: border-box;
  color: #FFF;
  width: 50%;
  height: 48px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #f7b2b0;
  }
`;

export const StyledLink = styled(LinkR)`
  text-align: center;
  opacity: 0.8;
  font-style: normal;
  font-weight: 500;
  font-size: 21px;
  line-height: 32px;
  text-decoration: underline;
  text-decoration-color: #f7b2b0;
  color: black;
  margin-top: 5%;
  text-underline-offset: 10px;
`;
