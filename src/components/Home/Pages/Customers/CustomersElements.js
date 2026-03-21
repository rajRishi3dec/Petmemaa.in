import styled from "styled-components";

export const SubText = styled.h3`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  opacity: 0.7;
`;

export const CustomersContainer = styled.div`
  padding: 100px 0;
  
  @media screen and (max-width: 900px) {
    padding: 10px;
    
  }
`;

export const CustomersWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: auto;
  width: 100%;
  max-width: 80%;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;

  @media screen and (max-width: 900px) {
    padding: 0 0px;
    
  }
`;

export const CustomersRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; /* 2 columns */
  grid-template-rows: auto auto auto; /* 3 rows */
  align-items: center;
  grid-column-gap: 120px;
  grid-row-gap: 70px;

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
    
  }
`;

export const ContentContainer = styled.div`
  margin: 0 30px;
`;

// Declare what col1 is
export const Column1 = styled.div`
  display: flex;
  justify-content: space-between;
`;

// Declare what col2 is
export const Column2 = styled.div`
  grid-row: span 2;
  display: flex;
  
  justify-content: space-between;
  @media screen and (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

// Declare what col3 is
export const Column3 = styled.div`
  grid-row: span 2;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

// Declare what col4 is
export const Column4 = styled.div`
  grid-row: span 2;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

// Declare what col5 is
export const Column5 = styled.div`
  grid-row: span 2;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

// Declare what col6 is
export const Column6 = styled.div`
  grid-row: span 2;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ImgContainer = styled.div``;

export const Colon = styled.img`
  max-width: 15%;
  height: 7%;
  
`;

export const ImgWrap = styled.img`
  max-width: 230px;
  height: auto;
  
  @media screen and (max-width: 900px) {
    max-width: 110px;
  }
`;
