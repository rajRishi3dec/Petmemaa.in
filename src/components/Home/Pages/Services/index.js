import React from "react";
import services1 from "../../../../Assets/Services/services1.webp";
import services2 from "../../../../Assets/Services/services2.webp";
import services3 from "../../../../Assets/Services/services3.webp";
import services4 from "../../../../Assets/Services/services4.webp";
import services5 from "../../../../Assets/Services/services5.webp";
import services6 from "../../../../Assets/Services/services6.webp";
import services7 from "../../../../Assets/Services/services7.webp";
import services8 from "../../../../Assets/Services/services8.webp";
import services9 from "../../../../Assets/Services/services9.webp";

import {
  ServicesContainer,
  TitleContainer,
  Title,
  SubText,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  TitleServices,
  CardText
} from "./ServiceElements";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <TitleContainer>
        <Title>Our Services</Title>
        <SubText>
          At Pet Me Maa, we go beyond ordinary dog care. We're a full-service heaven where your furry family members are treated with love, comfort, and top-tier care. Our offerings include:
        </SubText>
      </TitleContainer>

      <ServicesWrapper>
        {/* Card 1 */}
        <ServicesCard>
          <ServicesIcon src={services1} alt="Boarding/Daycare" />
          <TitleServices>Boarding/Daycare</TitleServices>
          <CardText>
            Comfortable, clean, and fully supervised accommodations that make your pet feel safe and loved while you're away.
          </CardText>
        </ServicesCard>

        {/* Card 2 */}
        <ServicesCard>
          <ServicesIcon src={services2} alt="Grooming" />
          <TitleServices>Grooming</TitleServices>
          <CardText>
            Pamper your pup with our professional grooming services — from basic baths to stylish makeovers.
          </CardText>
        </ServicesCard>

        {/* Card 3 */}
        <ServicesCard>
          <ServicesIcon src={services3} alt="Veterinary Care" />
          <TitleServices>Veterinary Care</TitleServices>
          <CardText>
            All types of veterinary support for routine checkups, preventive care, and emergencies — your pet's health is in expert hands.
          </CardText>
        </ServicesCard>

        {/* Card 4 */}
        <ServicesCard>
          <ServicesIcon src={services4} alt="Shopping Boutique" />
          <TitleServices>Shopping Boutique</TitleServices>
          <CardText>
            Explore our curated collection of pet toys, accessories, treats, and essentials — all under one roof.
          </CardText>
        </ServicesCard>

        {/* Card 5 */}
        <ServicesCard>
          <ServicesIcon src={services5} alt="Swimming Pool" />
          <TitleServices>Swimming Pool</TitleServices>
          <CardText>
            Let your dog dive into joy! Our secure pet-friendly pool is perfect for exercise, therapy, or just splashing fun.
          </CardText>
        </ServicesCard>

        {/* Card 6 */}
        <ServicesCard>
          <ServicesIcon src={services6} alt="Cafeteria" />
          <TitleServices>Cafeteria</TitleServices>
          <CardText>
            At Cafe Pooch, every guest matters—two-legged or four!
            Cafe Pooch, where we serve you delicious cuisines to be enjoyed with family and friends along with your furry companion.
          </CardText>
        </ServicesCard>

        {/* Card 7 */}
        <ServicesCard>
          <ServicesIcon src={services7} alt="Training/School" />
          <TitleServices>Training/School</TitleServices>
          <CardText>
            Opportunities for basic obedience training and supervised socialization sessions for your pups.
          </CardText>
        </ServicesCard>

        {/* Card 8 */}
        <ServicesCard>
          <ServicesIcon src={services8} alt="Pick and drop" />
          <TitleServices>Pick and drop</TitleServices>
          <CardText>
            Busy day? We offer reliable and safe pick-up and drop-off services for your furry friend.
          </CardText>
        </ServicesCard>

        {/* Card 9 */}
        <ServicesCard>
          <ServicesIcon src={services9} alt="Playground" />
          <TitleServices>Playground</TitleServices>
          <CardText>
            A safe and supervised indoor/outdoor play zone for your dogs to socialize and burn off energy.
          </CardText>
        </ServicesCard>
        
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;