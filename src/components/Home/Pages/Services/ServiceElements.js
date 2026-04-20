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
  color: #1a202c; 
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
  grid-template-columns: repeat(3, 1fr);
  align-items: stretch;
  grid-gap: 40px; /* Increased gap for breathing room */
  padding: 0 20px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-gap: 25px; /* Tighter gap on mobile */
    padding: 0 15px;
  }
`;

export const ServicesCard = styled(HashLink)`
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 24px; /* Softer, rounder corners */
  padding-bottom: 30px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04); /* Softer default shadow */
  text-decoration: none;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); /* Bouncy transition */
  overflow: hidden;
  cursor: pointer;
  border: 1px solid rgba(247, 178, 176, 0.1); /* Subtle pink border */

  &:hover {
    transform: translateY(-12px) scale(1.02); /* Lifts up and slightly grows */
    box-shadow: 0 20px 40px rgba(236, 72, 153, 0.12); /* Pink glowing shadow */
    border: 1px solid rgba(247, 178, 176, 0.4);
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

/* =========================================
   NEW: CLICKABLE CUE TEXT
   ========================================= */
export const ExploreLink = styled.div`
  margin-top: 15px;
  font-size: 14px;
  font-weight: 700;
  color: #ec4899; /* PetMeMaa Pink */
  display: inline-flex;
  align-items: center;
  font-family: 'Inter', sans-serif;
  
  /* Adds the arrow */
  &::after {
    content: '→';
    margin-left: 6px;
    font-size: 16px;
    transition: transform 0.3s ease; /* Smooth animation setup */
  }

  /* Animates the arrow to the right when hovered */
  &:hover::after {
    transform: translateX(5px);
  }
`;