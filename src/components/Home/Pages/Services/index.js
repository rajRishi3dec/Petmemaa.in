import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import services1 from "../../../../Assets/Services/services1.webp";
import services2 from "../../../../Assets/Services/services2.webp";
import services3 from "../../../../Assets/Services/services3.webp";
import services4 from "../../../../Assets/Services/services4.webp";
import {
  Title,
  SubText,
  ServicesContainer,
  ServicesWrapper,
  ServicesRow,
  Column1,
  Column2,
  Column3,
  Column4,
  Column5,
  Column6,
  Column7,
  Column8,
  TitleServices,
  TitleContainer,
} from "./ServiceElements";

const Services = () => {
  return (
    <>
      <TitleContainer>
        <Title><b>Our Services</b></Title>
        <SubText>
          At Pet Me Maa, we pamper pets like royalty because even fur babies
          deserve a good hair day and a wagging tail time!
        </SubText>
      </TitleContainer>

      <ServicesContainer>
        <ServicesWrapper>
          <ServicesRow>
            <Column1>
              <img src={services1} style={{ width: "100%" }} alt="services1" />
            </Column1>
            <Column2>
              <TitleServices><b>Pet Boarding</b></TitleServices>
              <SubText>
                Planning a trip or need a safe place for your pet to stay while
                you're at work? Our boarding and daycare facilities provide a
                comfortable and secure environment where your pet can socialize,
                exercise, and relax under the supervision of our caring staff.
              </SubText>
              <Link to="/services#petboard" style={{ color: '#f7b2b0', fontWeight: 'bold', textDecoration: 'none' }}>
                View Services ›
              </Link>
            </Column2>

            <Column3>
              <TitleServices><b>Veterinary Consultation</b></TitleServices>
              <SubText>
                We provide top-tier veterinary consultations with a focus on
                your pet's well-being. Our team of dedicated and experienced
                veterinarians is committed to offering personalized care and
                expert advice to keep your furry family members happy and
                healthy.
              </SubText>
              <Link to="/services#vet" style={{ color: '#f7b2b0', fontWeight: 'bold', textDecoration: 'none' }}>
                View Services ›
              </Link>
            </Column3>
            <Column4>
              <img src={services2} style={{ width: "100%" }} alt="services2" />
            </Column4>

            <Column5>
              <img src={services3} style={{ width: "100%" }} alt="services1" />
            </Column5>
            <Column6>
              <TitleServices><b>Pet Grooming</b></TitleServices>
              <SubText>
                Treat your pet to a day of pampering with our professional
                grooming services. From baths and brush-outs to breed-specific
                haircuts and nail trims, we'll help your pet look and feel their
                best. Indulge your pet with our luxurious spa treatments,
                including soothing massages, moisturizing paw treatments, and
                aromatherapy baths. Our spa services are designed to promote
                relaxation, rejuvenation, and overall well-being.
              </SubText>
              <Link to="/services#petgroom" style={{ color: '#f7b2b0', fontWeight: 'bold', textDecoration: 'none' }}>
                View Services ›
              </Link>
            </Column6>

            <Column7>
              <TitleServices><b>Pet Schooling</b></TitleServices>
              <SubText>
                Training and playtime are not only fun for your pet but also
                essential for their overall health and well-being. Regular
                mental and physical stimulation can help prevent boredom, reduce
                stress and anxiety, and strengthen the bond between you and your
                pet.
              </SubText>
              <Link to="/services#petschool" style={{ color: '#f7b2b0', fontWeight: 'bold', textDecoration: 'none' }}>
                View Services ›
              </Link>
            </Column7>
            <Column8>
              <img src={services4} style={{ width: "100%" }} alt="services2" />
            </Column8>
          </ServicesRow>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
