import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar"; 
import { PhoneCall } from 'lucide-react';

// Import your images (adjust the relative path if needed)
import dogVetJpeg from "../../Assets/Veterinary/dogvet.jpeg";
import catVetJpeg from "../../Assets/Veterinary/catvet.jpeg";
import dogVetPng from "../../Assets/Veterinary/parrotvet.png";
import rabbitVetJpeg from "../../Assets/Veterinary/rabbitvet.jpeg";

import {
  VetWrapper,
  VetPage,
  VetHero,
  VetTextContent,
  VetTitle,
  HeroImageGallery,
  GalleryImage,
  VetSubtitle,
  ServicesGrid,
  ServiceCard,
  ServiceIcon,
  ServiceHeading,
  VaccineSection,
  VaccineSectionTitle,
  VaccineGrid,
  VaccineCard,
  VaccineCardTitle,
  VaccineList,
  VaccineItem,
  VaccineName,
  VaccinePrice,
  FloatingCallBtn 
} from "./VeterinaryElements";

const Veterinary = () => {
  // Scrolls to the top when the page opens
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    { title: "VACCINATION", icon: "🛡️" },
    { title: "OPD VET CONSULTATION", icon: "🏥" },
    { title: "MEDICATION", icon: "💊" }
  ];

  // Vaccination Pricing Data
  const dogVaccines = [
    { name: "9 in 1", price: "900/-" },
    { name: "Rabies", price: "500/-" },
    { name: "Corona", price: "600/-" },
    { name: "Kennel Cough", price: "1000/-" }
  ];

  const catVaccines = [
    { name: "Tri-cat", price: "1100/-" },
    { name: "Rabies", price: "500/-" }
  ];

  return (
    <>
      <Navbar />

      <VetWrapper>
        <VetPage>
          
          {/* SECTION 1: Main Hero & Summary Section (Odd -> Blue Background) */}
          {/* SECTION 1: Main Hero & Summary Section */}
<VetHero>
  
  {/* 1. Title gets its own text constraint so it stays centered properly */}
  <VetTextContent>
    <VetTitle>Pet Health & Wellness Support</VetTitle>
  </VetTextContent>
  
  {/* 2. Gallery is now OUTSIDE, allowing it to stretch to the full width of the page */}
  <HeroImageGallery>
    <GalleryImage src={dogVetJpeg} alt="Dog Vet Care" />
    <GalleryImage src={catVetJpeg} alt="Cat Vet Care" />
    <GalleryImage src={dogVetPng} alt="Dog Veterinary" />
    <GalleryImage src={rabbitVetJpeg} alt="Rabbit Vet Care" />
  </HeroImageGallery>

  {/* 3. Subtitle and Services go back inside a text constraint so they don't stretch too far */}
  <VetTextContent>
    <VetSubtitle>
      Your pet’s wellbeing comes first. We offer pet vaccinations, basic medications, and on-site support from our trained paravet for routine care. For expert guidance and treatment, a qualified veterinarian is also available. From preventive care to timely checkups, we ensure your furry one stays healthy, safe, and happy.
    </VetSubtitle>
    
    <ServicesGrid>
      {services.map((service, index) => (
        <ServiceCard key={index}>
          <ServiceIcon>{service.icon}</ServiceIcon>
          <ServiceHeading>{service.title}</ServiceHeading>
        </ServiceCard>
      ))}
    </ServicesGrid>
  </VetTextContent>

</VetHero>

          {/* SECTION 2: Vaccination Pricing Section (Even -> Pink Background) */}
          <VaccineSection>
            <VaccineSectionTitle>Immunization Pricing</VaccineSectionTitle>
            <VaccineGrid>
              
              {/* Dog Vaccines Card */}
              <VaccineCard>
                <VaccineCardTitle>🐶 Dog Vaccines</VaccineCardTitle>
                <VaccineList>
                  {dogVaccines.map((vaccine, index) => (
                    <VaccineItem key={index}>
                      <VaccineName>{vaccine.name}</VaccineName>
                      <VaccinePrice>{vaccine.price}</VaccinePrice>
                    </VaccineItem>
                  ))}
                </VaccineList>
              </VaccineCard>

              {/* Cat Vaccines Card */}
              <VaccineCard>
                <VaccineCardTitle>🐱 Cat Vaccines</VaccineCardTitle>
                <VaccineList>
                  {catVaccines.map((vaccine, index) => (
                    <VaccineItem key={index}>
                      <VaccineName>{vaccine.name}</VaccineName>
                      <VaccinePrice>{vaccine.price}</VaccinePrice>
                    </VaccineItem>
                  ))}
                </VaccineList>
              </VaccineCard>

            </VaccineGrid>
          </VaccineSection>

        </VetPage>
      </VetWrapper>

      {/* FLOATING CALL BUTTON */}
      <FloatingCallBtn href="tel:+919217326357">
        <PhoneCall />
        <span>Enquire Now</span>
      </FloatingCallBtn>
    </>
  );
};

export default Veterinary;