import styled from "styled-components";

export const InfoContainer = styled.div`
  padding-top: 3%;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    335deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(255, 239, 239, 0.6125043767507004) 100%
  );
  @media screen and (max-width: 900px) {
    padding: 10px 0;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: auto;
  width: 100%;
  max-width: 1500px;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;

  @media screen and (max-width: 900px) {
    padding: 0 0px;
  }
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;

  /* Grid template area, used to define orientation of the columns */
  grid-template-areas: "col1 col2";

  @media screen and (max-width: 900px) {
    grid-template-areas: "col1 col1" "col2 col2";
  }
`;

// Declare what col1 is
export const Column1 = styled.div`
  padding: 0 8px;
  grid-area: col1;
`;

// Declare what col2 is
export const Column2 = styled.div`
  padding: 0 0 0 120px;
  grid-area: col2;
  @media screen and (max-width: 900px) {
    padding: 0 0 0 50px;
  }
`;

export const ImgWrap = styled.img`
  max-width: 500px;
  @media screen and (max-width: 900px) {
    max-width: 290px;
    margin-bottom: 50px;
  }
`;

export const TextWrapper = styled.div`
  max-width: 600px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const TopLine = styled.span`
  font-weight: 300;
  opacity: 0.8;
  letter-spacing: 1.4px;
  font-size: 52px;
  line-height: 78px;
  @media screen and (max-width: 480px) {
    font-size: 32px;
    line-height: 40px;
  }
`;

export const TopLineBold = styled.span`
  font-weight: 550;
  letter-spacing: 1.4px;
  font-size: 52px;
  line-height: 78px;
  @media screen and (max-width: 480px) {
    font-size: 32px;
    line-height: 40px;
  }
`;

export const Heading = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  opacity: 0.6;

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  font-size: 18px;
  line-height: 24px;
`;

export const GifWrap = styled.img`
  width: 20%;
  max-height: 60px;
  border-radius: 63px;
  @media screen and (max-width: 900px) {
    width: 15%;
    max-height: 70px;
  }
`;

export const ContactBtn = styled.button`
  background: #f7b2b0;
  color: #FFF;
  border-radius: 110px;
  border: none;
  width: 100%;
  height: 50px;
  padding-right: 10px;
  padding-left: 10px;

  margin-right: 10%;
  margin-top: 5%;
  &:hover {
    background: #d2f2fa; /* Set your desired hover color here */
  }
`;

export const OurLovingTeam = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5%;
`;

export const OurLovingTeamHeading = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 27px;
`;

export const OurLovingTeamImages = styled.div`
  margin-top: 2%;
  display: flex;
  align-items: center;
`;

export const TeamImage = styled.img`
  width: 64px;
  height: 64px;
  margin-right: 2%;
`;

export const TeamImageText = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0.03em;
  opacity: 0.5;
`;

// components for secondary.js
// ------------------------------------------------------------------
export const SecondaryContainer = styled.div`
  margin-top: 5%;
  margin-bottom: 10%;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 900px) {
  }
`;

export const SecondaryWrapper = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff2f2;
  border-radius: 46px;
  @media screen and (max-width: 900px) {
    flex-direction: column;
    padding: 2%;
    width: 80%;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10%;
  @media screen and (max-width: 900px) {
    margin: 0;
    align-items: center;
  }
`;

export const ImgWrapLook = styled.img`
  max-width: 300px;
  height: 350px;
  @media screen and (max-width: 900px) {
    max-width: 200px;
    height: auto;
  }
`;

export const TopLine2 = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 30px;
  color: #000000;
  opacity: 0.8;
  letter-spacing: 1.4px;
`;
