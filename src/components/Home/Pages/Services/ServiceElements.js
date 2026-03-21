import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const TitleContainer = styled.div`
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  width: 60%;
  margin-top: 5%;
  @media screen and (max-width: 900px) {
    margin-top: 40%;
    width: 80%;
  }
`;
export const Title = styled.h1`
  font-weight: 500;
  font-size: 48px;
  line-height: 32px;
  opacity: 0.8;
  @media screen and (max-width: 900px) {
    font-size: 38px;
  }
`;

export const SubText = styled.h3`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  opacity: 0.7;
  @media screen and (max-width: 900px) {
    font-size: 15px;
  }
`;

export const ServicesContainer = styled.div`
  @media screen and (max-width: 900px) {
    padding-left: 10%;
    padding-right: 10%;
  }
`;

export const ServicesWrapper = styled.div`
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
  grid-template-columns: repeat(2, 1fr); /* 2 columns */
  grid-template-rows: repeat(4, 1fr); /* 4 rows */
  align-items: center;
  grid-column-gap: 50px;

  /* Grid template area, used to define orientation of the columns */
  grid-template-areas: "col1 col2" "col3 col4" "col5 col6" "col7 col8";

  @media screen and (max-width: 900px) {
    grid-template-areas: "col1 col1" "col2 col2" "col4 col4" "col3 col3" "col5 col5" "col6 col6" "col8 col8" "col7 col7";
  }
`;

// Declare what col1 is
export const Column1 = styled.div`
  grid-area: col1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

// Declare what col2 is
export const Column2 = styled.div`
  grid-area: col2;
`;

// Declare what col3 is
export const Column3 = styled.div`
  grid-area: col3;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

// Declare what col4 is
export const Column4 = styled.div`
  grid-area: col4;
`;

// Declare what col5 is
export const Column5 = styled.div`
  grid-area: col5;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  @media screen and (max-width: 900px) {
    margin-top: 20%;
  }
`;

// Declare what col6 is
export const Column6 = styled.div`
  grid-area: col6;
  @media screen and (max-width: 900px) {
    margin-top: 10%;
  }
`;

// Declare what col7 is
export const Column7 = styled.div`
  grid-area: col7;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

// Declare what col8 is
export const Column8 = styled.div`
  grid-area: col8;
  @media screen and (max-width: 900px) {
    margin-top: 20%;
  }
`;

// Text inside services box
export const TitleServices = styled.span`
  font-weight: 500;
  font-size: 32px;
  line-height: 48px;
  @media screen and (max-width: 900px) {
    line-height: 28px;
  }
`;

export const StyledLink = styled(LinkR)`
  color: #f7b2b0;
  font-weight: bold;
  text-decoration: none;
`;
