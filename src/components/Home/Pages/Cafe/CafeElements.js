import styled from "styled-components";

export const CafeContainer = styled.div`
  margin-top: 5%;
  margin-bottom: 10%;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 900px) {
    margin-top: 30%;
  }
`;

export const CafeWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff2f2;
  border-radius: 46px;
  @media screen and (max-width: 900px) {
    flex-direction: column;
    padding:2%;
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
  height: auto;
  @media screen and (max-width: 900px) {
    max-width: 200px;
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

export const ContactBtn = styled.button`
  background: #f7b2b0;
  border-radius: 110px;
  color: #fff;
  border: none;
  width: 35%;
  height: 50px;
  &:hover {
    background: #d2f2fa; /* Set your desired hover color here */
  }
  @media screen and (max-width: 480px) {
    font-size: 12px;
    width: 120px;
    margin-bottom: 5%;
  }
`;

export const Heading = styled.h1`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  opacity: 0.6;

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;
