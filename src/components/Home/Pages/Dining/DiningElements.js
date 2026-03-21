import styled from "styled-components";

export const DiningContainer = styled.div`
  margin-top: 10%;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 900px) {
    padding: 100px 0;
  }
`;

export const DiningWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 490px;
  max-width: 1500px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 10%;
  justify-content: center;
  background-color: #6db3d7;
  overflow: visible;
  @media screen and (max-width: 900px) {
    padding: 0 0px;
  }
`;

export const DiningRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-column-gap: 4%;
  grid-template-areas: "col1 col2";

  @media screen and (max-width: 900px) {
    grid-template-areas: "col1 col1" "col2 col2";
  }
`;

export const Column1 = styled.div`
  grid-area: col1;
  display: flex;
  justify-content: flex-end;
`;

export const ImgWrap = styled.img`
  width: 75%;
  position: relative;
  top: -7vh;
`;

// Col2 Stuff
export const Column2 = styled.div`
  grid-area: col2;
  margin-right: 10%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Col2Title = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 50px;
  color: #ffffff;
`;

export const Col2Subtext = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 33px;
  color: #ffffff;
`;

export const DiningBtn = styled.button`
  border: none;
  width: 188px;
  height: 56px;
  background: #ffffff;
  border-radius: 110px;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #fff;
`;

export const DiningImage = styled.img`
  height: 50%;
  width: 100%;
  margin-bottom: 7%;
`;

// 2nd Part ------------------------------------------------------------------
export const DiningWrapper2 = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

export const Title = styled.span`
  font-weight: 500;
  font-size: 48px;
  line-height: 62px;
  opacity: 0.8;
  @media screen and (max-width: 900px) {
    font-size: 28px;
    line-height: 42px;
  }
`;

export const SubText2 = styled.span`
  font-style: normal;
  font-weight: 300;
  font-size: 30px;
  line-height: 72px;
  @media screen and (max-width: 900px) {
    font-size: 18px;
    line-height: 42px;
  }
`;

export const ImgWrapCar = styled.img`
  width: 50%;
  @media screen and (max-width: 900px) {
    width: 90%;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 5%;
`;

export const DiningBtn2 = styled.button`
  background: #f7b2b0;
  border-radius: 110px;
  border: none;
  color: #fff;  
  width: 130%;
  height: 50px;
  &:hover {
    background: #d2f2fa; /* Set your desired hover color here */
  }
  @media screen and (max-width: 900px) {
    width: 120px;
  }
`;


