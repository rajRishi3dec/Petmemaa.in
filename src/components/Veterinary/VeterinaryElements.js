import styled from "styled-components";

/* =========================================
   FULL SCREEN BACKGROUND WRAPPER
   ========================================= */
export const VetWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  font-family: 'Inter', sans-serif;
  padding-bottom: 0 !important;
  margin-bottom: 0 !important;
  overflow: hidden; 
`;

/* =========================================
   ALTERNATING FULL-WIDTH SECTIONS
   ========================================= */
export const VetPage = styled.div`
  width: 100%;
  padding-bottom: 0 !important;
  margin-bottom: 0 !important;
  overflow: hidden;

  & > * {
    padding-left: max(20px, calc((100% - 1200px) / 2));
    padding-right: max(20px, calc((100% - 1200px) / 2));
    padding-top: 70px;
    padding-bottom: 70px;
  }

  & > *:nth-child(odd) {
    background: #F0F9FF;
  }

  & > *:nth-child(even) {
    background: #FDF2F8;
  }

  @media (max-width: 768px) {
    & > * {
      padding-top: 40px;
      padding-bottom: 40px;
    }
  }
`;

/* =========================================
   HERO SECTION
   ========================================= */
export const VetHero = styled.header`
  display: flex;
  flex-direction: column; /* Changed to column to match reference */
  align-items: center;
  text-align: center;
  gap: 40px;

  @media screen and (max-width: 992px) {
    gap: 30px;
  }
`;

export const VetTextContent = styled.div`
  width: 100%;
  max-width: 1000px; /* Constrains width for better centering */
  margin: 0 auto;
`;

export const VetTitle = styled.h1`
  font-family: "M PLUS Rounded 1c", sans-serif !important;
  font-weight: 600 !important;
  font-size: 42px !important;
  line-height: 52px;
  letter-spacing: -1px;
  color: #1e293b; 
  margin-bottom: 30px; 
  margin-top: 0;
  text-align: center;

  @media screen and (max-width: 900px) { 
    font-size: 32px !important;
    line-height: 42px;
  }

  @media screen and (max-width: 480px) {
    font-size: 26px !important;
    line-height: 36px;
  }
`;

/* =========================================
   IMAGE GALLERY (NEW)
   ========================================= */
export const HeroImageGallery = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  flex-wrap: wrap; 
  margin-bottom: 30px; /* Spacing between gallery and subtitle */
`;

export const GalleryImage = styled.img`
  width: calc(25% - 15px); 
  height: 350px;
  object-fit: cover;
  object-position: top center; 
  border-radius: 25px;
  border: 4px solid white;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 35px rgba(0,0,0,0.15);
  }

  /* Responsive styling for the gallery */
  @media (max-width: 900px) {
    width: calc(50% - 15px);
    height: 250px;
  }

  @media (max-width: 480px) {
    width: 100%;
    height: 250px;
  }
`;

export const VetSubtitle = styled.p`
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 1.1rem;
  color: #475569;
  line-height: 1.6;
  letter-spacing: 0.3px;
  margin-bottom: 40px;
  text-align: center;

  @media screen and (max-width: 992px) {
    font-size: 15px;
  }
`;

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media screen and (max-width: 992px) {
    grid-template-columns: 1fr; 
    gap: 15px;
  }
`;

export const ServiceCard = styled.div`
  background: #ffffff;
  border: 1px solid #e2e8f0;
  padding: 25px 15px;
  border-radius: 20px;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0,0,0,0.03);
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: #0ea5e9;
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 30px rgba(14, 165, 233, 0.15);
    border-color: #bae6fd;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

export const ServiceIcon = styled.div`
  font-size: 44px;
  margin-bottom: 15px;
`;

export const ServiceHeading = styled.h3`
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  color: #0f172a;
  font-weight: 700;
  margin: 0;
`;

/* =========================================
   VACCINATION PRICING SECTION
   ========================================= */
export const VaccineSection = styled.section`
`;

export const VaccineSectionTitle = styled.h2`
  font-family: "M PLUS Rounded 1c", sans-serif !important;
  font-weight: 600 !important;
  font-size: 42px !important;
  text-align: center;
  color: #1e293b;
  margin-top: 0 !important;
  margin-bottom: 40px;

  @media screen and (max-width: 768px) {
    font-size: 26px !important;
    margin-bottom: 30px;
  }
`;

export const VaccineGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

export const VaccineCard = styled.div`
  background: #ffffff; 
  border-radius: 20px;
  padding: 30px;
  border-top: 6px solid #0ea5e9; 
  box-shadow: 0 10px 30px rgba(0,0,0,0.06);

  &:nth-child(2) {
    border-top: 6px solid #ec4899; 
  }

  @media screen and (max-width: 480px) {
    padding: 20px;
  }
`;

export const VaccineCardTitle = styled.h3`
  font-size: 24px;
  color: #0f172a;
  margin-top: 0;
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 800;
  font-family: 'Inter', sans-serif;
`;

export const VaccineList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const VaccineItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  border-bottom: 1px dashed #cbd5e1;
  font-size: 17px;
  font-family: 'Inter', sans-serif;

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
`;

export const VaccineName = styled.span`
  font-weight: 600;
  color: #334155;
`;

export const VaccinePrice = styled.span`
  font-weight: 700;
  color: #0369a1;
  background: #e0f2fe;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 15px;

  ${VaccineCard}:nth-child(2) & {
    color: #be185d;
    background: #fce7f3;
  }
`;

/* =========================================
   FLOATING CALL BUTTON
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
      display: none; 
    }
  }
`;