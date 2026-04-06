import styled from "styled-components";
import { HashLink } from "react-router-hash-link";

export const ServicesContainer = styled.div`
  background: #EAF7FC; /* Light blue background from the image */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
`;

export const TitleContainer = styled.div`
  text-align: center;
  max-width: 900px;
  margin-bottom: 40px;
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 48px;
  color: #FFB6C1; /* Pink color */
  margin-bottom: 20px;

  @media screen and (max-width: 900px) {
    font-size: 38px;
  }
`;

export const SubText = styled.p`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 0.3px;
  color: #444;

  @media screen and (max-width: 900px) {
    font-size: 15px;
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 Columns */
  align-items: stretch;
  grid-gap: 30px;
  padding: 0 20px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0;
  }
`;

export const ServicesCard = styled(HashLink)`
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  padding-bottom: 30px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  overflow: hidden;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  }
`;

export const ServicesIcon = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  margin-bottom: 20px;
`;

export const TitleServices = styled.h2`
  font-weight: bold;
  font-size: 22px;
  color: #000;
  margin-bottom: 10px;
  text-align: center;
`;

export const CardText = styled.p`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 0.3px;
  color: #444;
  padding: 0 25px;
  line-height: 1.5;
`;